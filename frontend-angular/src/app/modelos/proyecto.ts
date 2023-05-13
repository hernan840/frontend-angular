export class Proyecto {

    id: any;
    nameProyect : string;
    description : string;
    img : string;
    endDate : string;
  

    constructor(nameProyect : string, description : string, img : string, endDate : string){
        this.nameProyect = nameProyect;
        this.description = description;   
        this.img = img;  
        this.endDate = endDate;  
    }
}
