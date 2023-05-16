import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/modelos/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editar-sobremi',
  templateUrl: './editar-sobremi.component.html',
  styleUrls: ['./editar-sobremi.component.css']
})
export class EditarSobremiComponent implements OnInit {
  /* se crea una variable forms */
  forms: FormGroup;
  perso :Persona = new Persona('','','','','','','');

  constructor(private formBuilder: FormBuilder,
               private personaService:PersonaService,
              private activatedRoute:ActivatedRoute,
              private router:Router) {
    ///Creamos el grupo de controles para el formulario de login, en group tenemos los campos del formulario
    this.forms = this.formBuilder.group({
      id:[''],
      imgPerfilSibreMi: ['', Validators.required], /// como trabajamos con varias validaciondes por cada campo se coloca en un array
      about: ['', Validators.required],
      name: ['', Validators.required]
    })
  }

  

  get ImgSobremi() {
    return this.forms.get("imgPerfilSibreMi");
  }

  get Sobremi() {
    return this.forms.get("about");
  }
  get Name() {
    return this.forms.get("name");
  }

  ngOnInit(): void {
    // inicie con los datos cargados en el formulario
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.detail(id).subscribe(data => {
      this.perso=data;
    }
    )
  }
  
  onUpdate(event:Event): void{
    event.preventDefault;
    this.personaService.update(this.forms.value).subscribe(data=>{
      alert("Sobre mi modificado!!!!");
      this.router.navigate(['']);
    }, err => {
      this.forms.markAllAsTouched();
      alert("Falló la modificación de Sobre mi!");
  
    })
  }
}
