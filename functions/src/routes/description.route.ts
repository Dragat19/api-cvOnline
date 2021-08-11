import { DescriptionController } from "../controllers/description.controller";
import { Application } from 'express';

export class DescriptionsRoute {

    private bioController: DescriptionController;

    constructor (){
        this.bioController = new DescriptionController();
    }

    public route(app:Application) {
        this.bioRoute(app);
    }

    private bioRoute = (app:Application): void=> {
        app.post('/bio',this.bioController.create);
        app.get('/bio', this.bioController.get);
    }




}