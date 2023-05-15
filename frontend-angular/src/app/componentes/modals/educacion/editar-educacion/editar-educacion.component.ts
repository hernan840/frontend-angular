import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {
  /* se crea una variable forms */
  forms: FormGroup;
  educ :Educacion = new Educacion('','','','','','');

  constructor(private formBuilder: FormBuilder,
              private educacionService:EducacionService,
              private activatedRoute:ActivatedRoute,
              private router:Router) {

    ///Creamos el grupo de controles para el formulario de login, en group tenemos los campos del formulario
    this.forms = this.formBuilder.group({
      id:[''],
      school: ['', Validators.required], 
      title: ['', Validators.required],
      description: ['', Validators.required],
      img: ['', Validators.required],
      startDate: ['', [Validators.required, Validators.maxLength(10)]],
      endDate: ['', [Validators.required, Validators.maxLength(10)]]
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
    return this.forms.get("startDate");
  }
  get FchaFin() {
    return this.forms.get("endDate");
  }


  ngOnInit(): void {
    // inicie con los datos cargados en el formulario
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionService.detail(id).subscribe(data => {
      this.educ=data;
    }
    )
  }
  
  onUpdate(event:Event): void{
    event.preventDefault;
    
    // console.log(this.forms.value);
    this.educacionService.update(this.forms.value).subscribe(data=>{
      alert("Educacion modificada!!!!");
      this.router.navigate(['']);
    }, err => {
      this.forms.markAllAsTouched();
      alert("Falló la modificación de la proyecto!");
  
    })

}
}

