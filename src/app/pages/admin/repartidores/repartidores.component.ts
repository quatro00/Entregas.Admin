import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-repartidores',
  templateUrl: './repartidores.component.html',
  styleUrls: ['./repartidores.component.css']
})
export class RepartidoresComponent {
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