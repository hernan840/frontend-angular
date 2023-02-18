import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-sobremi',
  templateUrl: './editar-sobremi.component.html',
  styleUrls: ['./editar-sobremi.component.css']
})
export class EditarSobremiComponent implements OnInit{
  /* se crea una variable forms */
    forms: FormGroup;

    constructor(private formBuilder: FormBuilder){
      ///Creamos el grupo de controles para el formulario de login, en group tenemos los campos del formulario
      this.forms= this.formBuilder.group({
        imgPerfilSibreMi:['', Validators.required], /// como trabajamos con varias validaciondes por cada campo se coloca en un array
        about: ['',Validators.required],
        name: ['',Validators.required]
      })
   }
 
  ngOnInit() {}

  get ImgSobremi(){
    return this.forms.get("imgPerfilSibreMi");
  }
 
  get Sobremi(){
   return this.forms.get("about");
  }
  get Name(){
    return this.forms.get("name");
   }
  


   onEnviar(event: Event){
    console.log(this.forms) //para ver por consola
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 

  
 
    if (this.forms.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Formulario Enviado!")
      
    }
   
    
  }



}
