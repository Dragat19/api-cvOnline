import { Response, Request } from 'express';
import { Companys, TAG_COMPANYS } from '../models/companys.model';
import { FirestoreDB } from '../db/firestore.db';
import { ResponseDTO } from '../models/base.model';

export class CompanysController {

    private db: FirestoreDB;
    
    constructor() {
        this.db = FirestoreDB.getInstance();
    }

    public create = async (req: Request, res: Response) => {
        let response:ResponseDTO = new ResponseDTO();
        try {
            const company :Companys = {
                company: req.body.company,
                address: req.body.address,
                date: req.body.date,
                employment: req.body.employment
            }
            let idCreated:string = await  this.db.create( TAG_COMPANYS, company);
            res.status(201).json(response.init())

        } catch (error) {
            
        }
        
    }

    public get =  async (req: Request, res: Response): Promise<any> => {
        const dataDb  = await this.db.get(TAG_COMPANYS);
        if(dataDb){
            return res.status(200).json({
                errorCode: 200,
                data: dataDb
            } as ResponseDTO); 
        }
    }


    public delete = (req: Request, res: Response) => {
        this.db.delete(TAG_COMPANYS, req.params.id, (id: string) => {
            return res.status(200).json({
                status: 'ok',
                delete: id 
            }); 
        });
    }


    public update = (req: Request, res: Response) => {
        const company: Companys = {
            id: req.body.id,
            company: req.body.company,
            address: req.body.address,
            date: req.body.date,
            employment: req.body.employment
        }
        this.db.update(TAG_COMPANYS, company, req.body.id, (id:string) => {
            return res.json({
                ok: 'ok',
                update: id
            })
        })
    }
}
