import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/modelos/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent  implements OnInit{
  /* se crea una variable forms */
  forms: FormGroup;
  nameProyec = ''; 
  description = '';
  img = '';
  urlProyect = '';
  endDate = '';  

  constructor(private formBuilder: FormBuilder, private proyectoService:ProyectoService){
    ///Creamos el grupo de controles para el formulario de login, en group tenemos los campos del formulario
    this.forms= this.formBuilder.group({
      nameProyec:['', Validators.required], 
      description: ['',Validators.required],
      img: ['',Validators.required],
      urlProyect: ['',Validators.required], 
      endDate: ['',Validators.required]
    })
 }

ngOnInit() {}


// declarar para las validaciones
get NombreProyecto() {
  return this.forms.get("nameProyec");
}

get Descripcion() {
  return this.forms.get("description");
}
get ImgProyect() {
  return this.forms.get("img");
}
get UrlProyect() {
  return this.forms.get("urlProyect");
}
get FchaFin() {
  return this.forms.get("endDate");
}

 //Validaciones
 get NombreProyectoValid()
 {
   return this.NombreProyecto?.touched && !this.NombreProyecto.valid;
 } 

 get DescripcionValid()
 {
   return this.Descripcion?.touched && !this.Descripcion.valid;
 }  
 get ImgProyectValid()
 {
   return this.ImgProyect?.touched && !this.ImgProyect.valid;
 } 
 get UrlProyectValid()
 {
   return this.UrlProyect?.touched && !this.UrlProyect.valid;
 } 
 get FchaFinValid()
 {
   return this.FchaFin?.touched && !this.FchaFin.valid;
 } 

/* onEnviar(event: Event) {
  console.log(this.forms) //para ver por consola
  // Detenemos la propagación o ejecución del compotamiento submit de un form
  event.preventDefault;

  if (this.forms.valid) {
    // Llamamos a nuestro servicio para enviar los datos al servidor
    // También podríamos ejecutar alguna lógica extra
    alert("Formulario Enviado!")
  }
} */

onCreate(event:Event): void{
  const proy = new Proyecto(this.nameProyec,this.description,this.img,this.endDate);
  this.proyectoService.save(proy).subscribe(data=>{
    // alert("Habilidad añadida!");
    window.location.reload();
    
    
  }, err => {
    alert("Falló la carga. intente nuevamente");
      this.forms.reset();
  })
}

limpiar(): void{
  this.forms.reset();
}  

}
