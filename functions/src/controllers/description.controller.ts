import { FirestoreDB } from '../db/firestore.db';
import { TAG_DESCRIPTION, Description  } from '../models/description.model';
import { Response, Request } from 'express';
import { ResponseDTO } from '../models/base.model';

export class DescriptionController {

    private db:FirestoreDB;

    constructor(){
        this.db = FirestoreDB.getInstance();
    }


    public get = async (req:Request, res:Response): Promise<any> =>  {
        const dataDb = await this.db.get(TAG_DESCRIPTION);
        if(dataDb){
            return res.status(200).json({
                errorCode: 200,
                data: dataDb,
                errorDescription: null
            } as ResponseDTO)
        }
    }

    public create = async (req:Request, res:Response) => {
        let response:ResponseDTO = new ResponseDTO;
        try {
            const descr = {
                info1:req.body.info1,
                info2: req.body.info2,
                info3:req.body.info3,
                info4:req.body.info4,
                urlCV:req.body.urlCV
            } as Description;
            let idCreated:string = await this.db.create(TAG_DESCRIPTION, descr);
            res.status(201).json(response.init(201,null,idCreated));
        } catch (error) {
            res.status(500).json(response.init(201,'error in params of the body request',null));
        }
    }
}