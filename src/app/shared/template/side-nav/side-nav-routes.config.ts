import {
  SideNavInterface
} from '../../interfaces/side-nav.type';

export const AdminRoutes: SideNavInterface[] = [
  
  {
    path: 'administrador/dashboard',
    title: 'Dashboard',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: '',
    submenu:[]
  },
  {
    path: 'administrador/pedidos',
    title: 'Pedidos',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: '',
    submenu:[]
  },
  {
    path: 'administrador/pagos',
    title: 'Pagos',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: '',
    submenu:[
      {
        path: 'administrador/pagos',
        title: 'Ver pagos',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: '',
        submenu:[]
      },
      {
        path: 'administrador/registra-pago',
        title: 'Registrar pago',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: '',
        submenu:[]
      }
    ]
  },
  {
    path: '',
    title: 'Clientes',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: '',
    submenu:[
      {
        path: 'administrador/clientes',
        title: 'Ver clientes',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: '',
        submenu:[]
      },
      {
        path: 'administrador/registra-cliente',
        title: 'Registrar cliente',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: '',
        submenu:[]
      }
    ]
  },
  {
    path: '',
    title: 'Repartidores',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: '',
    submenu:[
      {
        path: 'administrador/repartidores',
        title: 'Ver repartidores',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: '',
        submenu:[]
      },
      {
        path: 'administrador/registra-repartidor',
        title: 'Registrar repartidor',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: '',
        submenu:[]
      }
    ]
  },
 
]

export const MercaderiaRoutes: SideNavInterface[] = [
  
  {
    path: 'mercaderia/dashboard',
    title: 'Dashboard',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: '',
    submenu:[]
},
{
  path: 'mercaderia/ordenes-compra',
  title: 'Ordenes de compra',
  iconType: 'nzIcon',
  iconTheme: 'outline',
  icon: '',
  submenu:[]
},
{
  path: 'mercaderia/citas',
  title: 'Citas',
  iconType: 'nzIcon',
  iconTheme: 'outline',
  icon: '',
  submenu:[
    {
      path: 'mercaderia/citas',
      title: 'Agenda',
      iconType: 'nzIcon',
      iconTheme: 'outline',
      icon: '',
      submenu:[]
    },
    {
    path: 'mercaderia/citas/nueva-cita',
    title: 'Registrar cita',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: '',
    submenu:[]
  },]
}
]

  export const ClienteRoutes: SideNavInterface[] = [
  
    {
      path: 'cliente/dashboard',
      title: 'Dashboard',
      iconType: 'nzIcon',
      iconTheme: 'outline',
      icon: 'home',
      submenu:[]
    },
   
]

  export const SupervisorRoutes: SideNavInterface[] = [

    {
      path: 'supervisor/dashboard',
      title: 'Dashboard',
      iconType: 'nzIcon',
      iconTheme: 'outline',
      icon: 'appstore-add',
      submenu:[]
    },
]
