import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {
  /* se crea una variable forms */
  forms: FormGroup;
  expe :Experiencia = new Experiencia('','','','','','');

  constructor(private formBuilder: FormBuilder,
              private experienciaService:ExperienciaService,
              private activatedRoute:ActivatedRoute,
              private router:Router) {
    ///Creamos el grupo de controles para el formulario de login, en group tenemos los campos del formulario
    this.forms = this.formBuilder.group({
      id:[''],
      company: ['', Validators.required], /// como trabajamos con varias validaciondes por cada campo se coloca en un array
      position: ['', Validators.required],
      description: ['', Validators.required],
      img: [''],
      startDate: ['', [Validators.required, Validators.maxLength(10)]],
      endDate: ['', [Validators.required, Validators.maxLength(10)]]
    })
  }

  get Compania() {
    return this.forms.get("company");
  }

  get Posicion() {
    return this.forms.get("position");
  }
  get Descripcion() {
    return this.forms.get("description");
  }
  get FechaInicio() {
    return this.forms.get("startDate");
  }
  get Imagen() {
    return this.forms.get("img");
  }
  get FchaFin() {
    return this.forms.get("endDate");
  }



  ngOnInit(): void {
    // inicie con los datos cargados en el formulario
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.detail(id).subscribe(data => {
      this.expe=data;
    }
    )
  }
  
  onUpdate(event:Event): void{
    event.preventDefault;
    
    console.log(this.forms.value);
    this.experienciaService.update(this.forms.value).subscribe(data=>{
      alert("Experiencia modificada!!!!");
      this.router.navigate(['']);
    }, err => {
      this.forms.markAllAsTouched();
      alert("Falló la modificación de la experiencia!");
  
    })
  }
  
  
  }
  