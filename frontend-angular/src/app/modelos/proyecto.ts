export class Proyecto {

    id: any;
    nameProyect : string;
    description : string;
    img : string;
    endDate : string;
    urlProyect : string;
  
    constructor(nameProyect:string,description:string,img:string,endDate:string,urlProyect:string){
        this.nameProyect = nameProyect;
        this.description = description;   
        this.img = img;  
        this.endDate = endDate;  
        this.urlProyect = urlProyect; 
    }


    
}
