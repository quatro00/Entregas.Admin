import { Component } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CreateClienteModel } from 'src/app/models/clientes/create-cliente-model';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-registra-cliente',
  templateUrl: './registra-cliente.component.html',
  styleUrls: ['./registra-cliente.component.css']
})
export class RegistraClienteComponent {

  btnLoading = false;
  isVisible = false;
  isLoading = true;
  showContent = false;
  validateForm!: UntypedFormGroup;

  constructor(
    private msg: NzMessageService, 
    private fb: FormBuilder,
    private clientesService:ClientesService) {}


  ngOnInit() {
    this.validateForm = this.fb.group({
      nombre: ['',[Validators.required]],
      apellidos: ['',[Validators.required]],
      correoElectronico: ['',[Validators.required]],
      telefono: ['',[Validators.required]],
      password: ['',[Validators.required]]
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

  guardarCliente(){
    //console.log(this.validateForm);
    //
    if (this.validateForm.valid) {
      this.btnLoading = true;
      //console.log(this.validateForm);
      var riel:CreateClienteModel = {
        nombre: this.validateForm.value.nombre,
        apellidos: this.validateForm.value.apellidos,
        correoElectronico: this.validateForm.value.correoElectronico,
        telefono: this.validateForm.value.telefono,
        password: this.validateForm.value.password
      }

  
      
      this.btnLoading = true;
      this.clientesService.Create(riel)
      .subscribe({
        next:(response)=>{
          this.btnLoading = false;
          this.validateForm.reset();
        }
      })
      
      
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
