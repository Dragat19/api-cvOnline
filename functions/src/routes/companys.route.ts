import { Application,Response,Request } from 'express';
import { CompanysController } from '../controllers/companys.controller';

export class CompanysRoute {

    private companysController: CompanysController;

    constructor() {
        this.companysController = new CompanysController();
    }

    public route(app: Application) {
        app.get('/', (req: Request, res: Response) => {
            return res.json({
                status: 'ok',
                data: 'funcionando'
            });
        });

        this.companysRoute(app);
    }

    private companysRoute = (app: Application): void => {
        app.post('/companys', this.companysController.create);
        app.get('/companys', this.companysController.get);
        app.delete('/companys/:id', this.companysController.delete);
        app.put('/companys', this.companysController.update);
    }
}