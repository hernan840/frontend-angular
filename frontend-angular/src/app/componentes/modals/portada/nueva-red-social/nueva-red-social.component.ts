import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-nueva-red-social',
  templateUrl: './nueva-red-social.component.html',
  styleUrls: ['./nueva-red-social.component.css']
})
export class NuevaRedSocialComponent implements OnInit {
  /* se crea una variable forms */
  forms: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    ///Creamos el grupo de controles para el formulario de login, en group tenemos los campos del formulario
    this.forms = this.formBuilder.group({
      icono: ['', Validators.required], 
      urlRedSocial: ['', Validators.required]
    })
  }

  ngOnInit() { }

  get ImgIcono() {
    return this.forms.get("icono");
  }

  get DireccionRedSocial() {
    return this.forms.get("urlRedSocial");
  }
 

  onEnviar(event: Event) {
    console.log(this.forms) //para ver por consola
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault;
    if (this.forms.valid) {
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Formulario Enviado!")
    }
  }
}
