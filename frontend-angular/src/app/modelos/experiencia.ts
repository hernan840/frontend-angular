export class Experiencia {

    id: any;
    company : string;
    position : string;
    description : string;
    img : string;
    startDate : string;
    endDate : string;

    constructor(company:string,position:string,description:string,img:string,startDate:string,endDate:string){
        this.company = company;
        this.position = position;   
        this.description = description;  
        this.img = img;  
        this.startDate = startDate; 
        this.endDate = endDate; 

    }
}
