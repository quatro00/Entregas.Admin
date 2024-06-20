import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  isVisible = false;
  isLoading = true;
  showContent = false;

  constructor(
    private msg: NzMessageService) {}


  ngOnInit() {
   
    this.loadData();
  }



  loadData() {
    this.isLoading = false;
    this.showContent = true;
  }
}