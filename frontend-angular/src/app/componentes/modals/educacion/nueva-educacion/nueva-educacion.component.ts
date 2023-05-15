import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css']
})
export class NuevaEducacionComponent implements OnInit {
  /* se crea una variable forms */
  forms: FormGroup;

  school = ''; 
  title = '';
  description = '';
  img = '';  
  startDate = '';
  endDate = '';

  constructor(private formBuilder: FormBuilder, private educacionService:EducacionService) {
    ///Creamos el grupo de controles para el formulario de login, en group tenemos los campos del formulario
    this.forms = this.formBuilder.group({
      school: ['', Validators.required], 
      title: ['', Validators.required],
      description: ['', Validators.required],
      img: ['', Validators.required],
      dstart: ['', [Validators.required, Validators.maxLength(10)]],
      dend: ['', [Validators.required, Validators.maxLength(10)]]
    })
  }


  get Escuela() {
    return this.forms.get("school");
  }

  get Titulo() {
    return this.forms.get("title");
  }
  get Descripcion() {
    return this.forms.get("description");
  }
  get Imagen() {
    return this.forms.get("img");
  }
  get FechaInicio() {
    return this.forms.get("dstart");
  }
  get FchaFin() {
    return this.forms.get("dend");
  }



  ngOnInit() {}

  onCreate(event:Event): void{
    const proy = new Educacion(this.school, this.title,this.description,this.img,this.startDate,this.endDate);
    this.educacionService.save(proy).subscribe(data=>{
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
