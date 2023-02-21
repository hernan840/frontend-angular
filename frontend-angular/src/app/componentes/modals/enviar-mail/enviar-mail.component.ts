import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-enviar-mail',
  templateUrl: './enviar-mail.component.html',
  styleUrls: ['./enviar-mail.component.css']
})
export class EnviarMailComponent implements OnInit {
  /* se crea una variable forms */
  forms: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    ///Creamos el grupo de controles para el formulario de login, en group tenemos los campos del formulario
    this.forms = this.formBuilder.group({
      consultnombre: ['', Validators.required],
      consultemail: ['', [Validators.required, Validators.email]], /// como trabajamos con varias validaciondes por cada campo se coloca en un array
      consultasunto: ['', Validators.required],
      consultdetalle: ['', Validators.required]
    })
  }

  ngOnInit() { }

  get ConsultaNombre() {
    return this.forms.get("consultnombre");
  }

  get ConsultaMail() {
    return this.forms.get("consultemail");
  }
  get ConsultaAsunto() {
    return this.forms.get("consultasunto");
  }
  get ConsultaCuepoMensaje() {
    return this.forms.get("consultdetalle");
  }




  onEnviar(event: Event) {
    console.log(this.forms) //para ver por consola
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault;

    if (this.forms.valid) {
      // Llamamos a nuestro servicio para enviar los datos al servidor
      alert("Formulario Enviado!")
    }
  }
}
