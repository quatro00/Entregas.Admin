import { Component } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-registra-repartidor',
  templateUrl: './registra-repartidor.component.html',
  styleUrls: ['./registra-repartidor.component.css']
})
export class RegistraRepartidorComponent {
  isVisible = false;
  isLoading = true;
  showContent = false;
  validateForm!: UntypedFormGroup;

  constructor(
    private msg: NzMessageService, 
    private fb: FormBuilder) {}


  ngOnInit() {
    this.validateForm = this.fb.group({
      nombre: ['',[Validators.required]],
      apellidos: ['',[Validators.required]],
      correoElectronico: ['',[Validators.required]],
      telefono: ['',[Validators.required]]
    });

    this.loadData();
  }

  handleCancel() {
    this.isVisible = false;
  }

  loadData() {
    this.isLoading = false;
    this.showContent = true;
  }
}
