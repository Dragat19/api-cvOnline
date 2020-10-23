import { Response, Request } from 'express';
import { Companys, TAG_COMPANYS } from '../models/companys.model';
import { FirestoreDB } from '../db/firestore.db';

export class CompanysController {

    private db: FirestoreDB;
    
    constructor() {
        this.db = FirestoreDB.getInstance();
    }

    public create = (req: Request, res: Response) => {
        const company :Companys = {
            company: req.body.company,
            address: req.body.address,
            date: req.body.date,
            employment: req.body.employment
        }
        this.db.create( TAG_COMPANYS, company, (idFb: string) => {
            return res.status(201).json({
                status: 'ok',
                id: idFb
            });
        });
    }

    public get = (req: Request, res: Response) => {
        this.db.get(TAG_COMPANYS, (dataFb:Companys) => {
            return res.status(200).json({
                status: 'ok',
                data: dataFb
            }); 
        });
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
