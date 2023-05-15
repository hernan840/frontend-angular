export class Educacion {

    id: any;
    school : string;
    title : string;
    description : string;
    img : string;
    startDate : string;
    endDate : string;

    constructor(school:string,title:string,description:string,img:string,startDate:string,endDate:string){
        this.school = school;
        this.title = title;   
        this.description = description;  
        this.img = img;  
        this.startDate = startDate; 
        this.endDate = endDate; 

    }
}
