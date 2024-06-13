import { Component } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-registra-cliente',
  templateUrl: './registra-cliente.component.html',
  styleUrls: ['./registra-cliente.component.css']
})
export class RegistraClienteComponent {

  isLoading = true;
  showContent = false;
  validateForm!: UntypedFormGroup;

  constructor(
    private msg: NzMessageService, 
    private fb: FormBuilder) {}


  ngOnInit() {
    this.validateForm = this.fb.group({
      titulo: ['',[Validators.required]],
      tipoMensaje: ['',[Validators.required]],
      fechaCaducidad: ['',[Validators.required]],
      mensaje: ['',[Validators.required]],
      archivo: [''],
      cuentas: [[]],
      //prioridad: ['',[Validators.required]],
      //descripcion: ['',[Validators.required]]
    });

    this.loadData();
  }

  loadData() {
    this.isLoading = false;
    this.showContent = true;
  }
}
