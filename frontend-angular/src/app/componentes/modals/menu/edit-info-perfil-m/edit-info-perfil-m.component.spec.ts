import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInfoPerfilMComponent } from './edit-info-perfil-m.component';

describe('EditInfoPerfilMComponent', () => {
  let component: EditInfoPerfilMComponent;
  let fixture: ComponentFixture<EditInfoPerfilMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInfoPerfilMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditInfoPerfilMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
