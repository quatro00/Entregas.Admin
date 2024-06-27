import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ClientesService } from 'src/app/services/clientes.service';
import { CreateClienteModel } from 'src/app/models/clientes/create-cliente-model';
import { VERSION } from 'ng-zorro-antd/version';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  isVisible = false;
  isLoading = true;
  showContent = false;
  btnLoading = false;
  isChecked:boolean;
  clienteId:string;

  centros:any[] = [];
  filteredData: any[] = [];
  filteredData_Riel: any[] = [];

  validateForm!: UntypedFormGroup;
  constructor(
    private clientesService:ClientesService,
    private msg: NzMessageService,
    private fb: FormBuilder) {}


  ngOnInit() {

    this.validateForm = this.fb.group({
      nombre: ['',[Validators.required]],
      apellidos: ['',[Validators.required]],
      telefono: [],
      activo: [''],
    });

    this.loadData();
  }

  handleCancel(){
    this.isVisible = false;
  }

  handleOk(): void {
    //console.log(this.validateForm);
    if (this.validateForm.valid) {
      //console.log(this.validateForm);
      
      
      var request:CreateClienteModel = {
        nombre: this.validateForm.value.nombre,
        apellidos: this.validateForm.value.apellidos,
        activo: this.isChecked,
        telefono: this.validateForm.value.telefono,
        correoElectronico: '',
        password: '',
      };
      
      this.btnLoading = true;
      this.clientesService.Update(this.clienteId, request)
      .subscribe({
        next:(response)=>{
          this.btnLoading = false;
          this.isVisible = false;
          this.validateForm.reset();
          this.loadData();
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


  log(value: string[]): void {
    //console.log(value);
    if(value.length == 0){
      this.isChecked = false;
    }
    else{
      this.isChecked = true;
    }
  }

  showNew(newItem: TemplateRef<{}>, model:any) {
    
    this.validateForm.setValue({
      nombre : model.nombre,
      apellidos : model.apellidos,
      telefono:model.telefono,
      activo:0,
      
  })

  this.clienteId = model.id;
    this.isVisible = true;
  }

  loadData() {
    this.clientesService.GetClientes()
    .subscribe({
      next:(response)=>{
        this.isLoading = false;
        this.showContent = true;
        this.filteredData = response;
        this.centros = response;
      }})

    
  }
}