import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-info-perfil-m',
  templateUrl: './edit-info-perfil-m.component.html',
  styleUrls: ['./edit-info-perfil-m.component.css']
})
export class EditInfoPerfilMComponent implements OnInit {
    /* se crea una variable forms */
    forms: FormGroup;

    constructor(private formBuilder: FormBuilder){
      ///Creamos el grupo de controles para el formulario de login, en group tenemos los campos del formulario
      this.forms= this.formBuilder.group({
        name:['', Validators.required], /// como trabajamos con varias validaciondes por cada campo se coloca en un array
        position: ['',[Validators.required, Validators.maxLength(25)]],
        imgPerfilMenu: ['',Validators.required]
      })
   }
 
   ngOnInit() {}

   get Name(){
    return this.forms.get("name");
  }
 
  get Position(){
   return this.forms.get("position");
  }
  get ImagenPerfil(){
    return this.forms.get("imgPerfilMenu");
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
    /* else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.forms.markAllAsTouched(); 
      alert("Formulario NO enviado!")
    } */
  }


}
