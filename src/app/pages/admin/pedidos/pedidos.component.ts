import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {
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
