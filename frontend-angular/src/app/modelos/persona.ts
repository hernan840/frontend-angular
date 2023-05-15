export class Persona {

    id: any;
    name : string;
    position : string;
    imgPerfilMenu : string;
    imgPerfilPortada : string;
    backPortada : string;
    imgPerfilSibreMi : string;
    about : string;

    constructor(name:string,position:string,imgPerfilMenu:string,imgPerfilPortada:string,backPortada:string,imgPerfilSibreMi:string,about:string){
        this.name = name;
        this.position = position;   
        this.imgPerfilMenu = imgPerfilMenu;  
        this.imgPerfilPortada = imgPerfilPortada;  
        this.backPortada = backPortada; 
        this.imgPerfilSibreMi = imgPerfilSibreMi; 
        this.about = about; 

    }




}
