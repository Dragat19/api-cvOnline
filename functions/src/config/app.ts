import express from 'express';
import { CompanysRoute } from '../routes/companys.route';
import { AppFirebase } from '../db/firebase';

class App {
    public app: express.Application;
    private companysRoute: CompanysRoute;
    private appFirebase: AppFirebase = new AppFirebase();

    constructor() {
        this.app = express();
        this.appFirebase.initDB();
        this.companysRoute = new CompanysRoute();
        this.companysRoute.route(this.app);
    }
}

export default new App().app;