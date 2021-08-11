export class ResponseDTO<T> {
    private errorCode?:number;
    private errorDescription?:string | null;
    private data:any;

    init(errorCode?:number, errorDescription?:string | null, data?:any){
        this.errorCode = errorCode;
        this.errorDescription = errorDescription;
        this.data = data;
    }
}