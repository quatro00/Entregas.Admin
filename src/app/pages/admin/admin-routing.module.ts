import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authAdminGuard } from 'src/app/guard/auth-admin.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PagosComponent } from './pagos/pagos.component';
import { RegistraPagoComponent } from './registra-pago/registra-pago.component';
import { ClientesComponent } from './clientes/clientes.component';
import { RegistraClienteComponent } from './registra-cliente/registra-cliente.component';
import { RepartidoresComponent } from './repartidores/repartidores.component';
import { RegistraRepartidorComponent } from './registra-repartidor/registra-repartidor.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
        title: 'Dashboard',
    },
    //canActivate: [authAdminGuard]
  },
  {
    path: 'pedidos',
    component: PedidosComponent,
    data: {
        title: 'Pedidos',
    },
    //canActivate: [authAdminGuard]
  },
  {
    path: 'pagos',
    component: PagosComponent,
    data: {
        title: 'Pagos',
    },
    //canActivate: [authAdminGuard]
  },
  {
    path: 'registra-pago',
    component: RegistraPagoComponent,
    data: {
        title: 'Registra pago',
    },
    //canActivate: [authAdminGuard]
  },
  {
    path: 'clientes',
    component: ClientesComponent,
    data: {
        title: 'Clientes',
    },
    //canActivate: [authAdminGuard]
  },
  {
    path: 'registra-cliente',
    component: RegistraClienteComponent,
    data: {
        title: 'Registra cliente',
    },
    //canActivate: [authAdminGuard]
  },
  {
    path: 'repartidores',
    component: RepartidoresComponent,
    data: {
        title: 'Repartidores',
    },
    //canActivate: [authAdminGuard]
  },
  {
    path: 'registra-repartidor',
    component: RegistraRepartidorComponent,
    data: {
        title: 'Registra repartidor',
    },
    //canActivate: [authAdminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
