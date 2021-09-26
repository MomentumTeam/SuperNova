import mongoose from 'mongoose';
import * as C from './config';
import { HealthCheckResponse } from 'grpc-ts-health-check';
import { setHealthStatus } from './health';
import { logger } from './logger';

export async function connectMongo() {
    logger.info('connectDB - trying to mongo server');
    const db = mongoose.connection;

    try {
        await startConnectionAttempts();
    } catch (err) {
        setHealthStatus(HealthCheckResponse.ServingStatus.NOT_SERVING);
        logger.error(`connectDB - did not connect to mongo: ${err}`);
    }

    db.on('connected', () => {
        logger.info(`connectDB- connected to ${C.mongoUrl}`);
        setHealthStatus(HealthCheckResponse.ServingStatus.SERVING);
    });
    db.on('error', (err: any) => {
        logger.error('connectDB - mongo connection error!', err);
        setHealthStatus(HealthCheckResponse.ServingStatus.NOT_SERVING);
    });
    db.on('disconnected', () => {
        logger.error('connectDB - mongo disconnected');
        setHealthStatus(HealthCheckResponse.ServingStatus.NOT_SERVING);
    });
}

/**
 * Attempts to connect to mongo connectionRetries times.
 * Waits reconnectTimeout ms bewteen attempts.
 * @param server - the server trying to connect.
 */
async function startConnectionAttempts() {
    const retries = parseInt(C.mongoConnectionRetries, 10);
    const timeout = parseInt(C.mongoReconnectTimeout, 10);

    for (let i = 1; i <= retries; i++) {
        const connectionRes: { success: boolean; error: Error | null } = await connect();

        // if mongo connection attempt has failed
        if (!connectionRes.success) {
            logger.error(`connectDB - connection retry (${i}/${retries}) ${connectionRes.error}`, {
                errMsg: connectionRes.error?.message,
                stack: connectionRes.error?.stack,
            });

            setHealthStatus(HealthCheckResponse.ServingStatus.NOT_SERVING);
            await sleep(timeout);
        } else {
            logger.info(`connectDB - connected to ${C.mongoUrl}`);
            setHealthStatus(HealthCheckResponse.ServingStatus.SERVING);
            break;
        }
    }
}

/**
 * Connects to mongo with mongoConnectionString.
 */
async function connect(): Promise<{ success: boolean; error: Error | null }> {
    await mongoose.connect(
        C.mongoUrl,
        {
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        },
        async (err: any) => {
            return { success: false, error: err };
        }
    );

    return { success: true, error: null };
}

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

