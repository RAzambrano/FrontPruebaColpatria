export interface ResponseI {
    state:boolean;
    message:string;
    responseCode:string;
    data: {
            total:number,
            rows: [
                {
                    id:number,
                }
            ]
        }
}