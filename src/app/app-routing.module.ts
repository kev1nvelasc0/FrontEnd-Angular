import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {RegistroComponent} from './components/registro/registro.component';
import { TablaComponent } from './components/tabla/tabla.component';
import {LoginComponent} from './components/login/login.component';
const routes: Routes =[
  {
    path:'',
    redirectTo: '/registro',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    component: RegistroComponent
  },{
    path: 'tabla',
    component: TablaComponent
  },{
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
