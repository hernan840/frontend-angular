import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /* se crea una cariable forms */
  forms: FormGroup;

  constructor(private formBuilder: FormBuilder){
     ///Creamos el grupo de controles para el formulario de login, en group tenemos los campos del formulario
     this.forms= this.formBuilder.group({
       email:['', [Validators.required, Validators.email]], /// como trabajamos con varias validaciondes por cada campo se coloca en un array
       password: ['',[Validators.required, Validators.minLength(8)]],
     })
  }

  ngOnInit() {}

  get Password(){
    return this.forms.get("password");
  }
 
  get Mail(){
   return this.forms.get("email");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return false
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
