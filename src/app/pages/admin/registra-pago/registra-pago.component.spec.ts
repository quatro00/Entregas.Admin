import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraPagoComponent } from './registra-pago.component';

describe('RegistraPagoComponent', () => {
  let component: RegistraPagoComponent;
  let fixture: ComponentFixture<RegistraPagoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistraPagoComponent]
    });
    fixture = TestBed.createComponent(RegistraPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
