import { Server } from './server';

process.on('uncaughtException', (err) => {
    console.error('Unhandled Exception', err.stack);
    process.exit(1);
});

process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection', err);
    process.exit(1);
});

process.on('SIGINT', async () => {
    console.log('User Termination');
    process.exit(0);
});

(async () => {
    console.log('Starting server');
    const server: Server = Server.bootstrap();

    server.app.on('close', () => {
        console.log('Server closed');
    });
})();
