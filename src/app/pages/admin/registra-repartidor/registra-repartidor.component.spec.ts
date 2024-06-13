import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraRepartidorComponent } from './registra-repartidor.component';

describe('RegistraRepartidorComponent', () => {
  let component: RegistraRepartidorComponent;
  let fixture: ComponentFixture<RegistraRepartidorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistraRepartidorComponent]
    });
    fixture = TestBed.createComponent(RegistraRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
