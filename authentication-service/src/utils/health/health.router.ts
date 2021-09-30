import { Router, Response } from 'express';

const HealthRouter: Router = Router();

HealthRouter.get('/health/live', (_, res: Response) => {
    res.status(200).send('OK');
});

HealthRouter.get('/health/ready', (_, res: Response) => {
    res.status(200).send('OK');
});

export { HealthRouter };
