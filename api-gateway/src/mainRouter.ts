
import Router from "express"; 
import KartoffelRouter from './kartoffel/kartoffel.router';
import RequestsRouter from './requests/requests.router';
import ProducerRouter from './producer/producer.router';

const mainRouter = Router();

mainRouter.use('/kartoffel', KartoffelRouter);
mainRouter.use('/requests', RequestsRouter);
mainRouter.use('/producer', ProducerRouter);


export default mainRouter;
