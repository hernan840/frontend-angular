import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit{
    /* se crea una variable forms */
    forms: FormGroup;

    company = ''; 
    position = '';
    description = '';
    img = '';  
    startDate = '';
    endDate = '';

    constructor(private formBuilder: FormBuilder, private experienciaService:ExperienciaService){
      ///Creamos el grupo de controles para el formulario de login, en group tenemos los campos del formulario
      this.forms= this.formBuilder.group({
        company:['', Validators.required], /// como trabajamos con varias validaciondes por cada campo se coloca en un array
        position: ['',Validators.required],
        description: ['',Validators.required],
        startDate: ['',[Validators.required, Validators.maxLength(10)]],
        endDate: ['',[Validators.required, Validators.maxLength(10)]]
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
  get FchaFin() {
    return this.forms.get("endDate");
  }


  ngOnInit() {}

  onCreate(event:Event): void{
    const exp = new Experiencia(this.company,this.position,this.description,this.img,this.startDate,this.endDate);
    this.experienciaService.save(exp).subscribe(data=>{
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
  