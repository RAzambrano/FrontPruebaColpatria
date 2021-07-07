export interface UserI {
    state:boolean;
    message:string;
    responseCode:string;
    data: {
        total: number,
        rows: [
            {
                id: number,
                nombre: string,
                email: string,
                prioridad: number,
                tel: string,
                lastName: string
            }
        ]
    }

}