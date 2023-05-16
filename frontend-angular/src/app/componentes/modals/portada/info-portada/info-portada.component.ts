import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-info-portada',
  templateUrl: './info-portada.component.html',
  styleUrls: ['./info-portada.component.css']
})
export class InfoPortadaComponent implements OnInit {
  /* se crea una variable forms */
  forms: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    ///Creamos el grupo de controles para el formulario de login, en group tenemos los campos del formulario
    this.forms = this.formBuilder.group({
      name:['', Validators.required], /// como trabajamos con varias validaciondes por cada campo se coloca en un array
      position: ['',[Validators.required, Validators.maxLength(25)]],
      imgPerfilMenu: ['',Validators.required],

      imgPerfilPortada: ['', Validators.required], 
      backPortada: ['', Validators.required],

      imgPerfilSibreMi: ['', Validators.required], /// como trabajamos con varias validaciondes por cada campo se coloca en un array
      about: ['', Validators.required]
    })
  }

  ngOnInit() { }

  get Name(){
    return this.forms.get("name");
  }
 
  get Position(){
   return this.forms.get("position");
  }
  get ImagenPerfil(){
    return this.forms.get("imgPerfilMenu");
   }

  get ImgPerfilPortada() {
    return this.forms.get("imgPerfilPortada");
  }

  get FondoPortada() {
    return this.forms.get("backPortada");
  }
 get ImgSobremi() {
    return this.forms.get("imgPerfilSibreMi");
  }

  get Sobremi() {
    return this.forms.get("about");
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
