import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent {
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
