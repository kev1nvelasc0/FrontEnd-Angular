import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { EditregistroComponent } from './components/editregistro/editregistro.component';
import { DocumentoComponent } from './components/documento/documento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabla',
    pathMatch: 'full',
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'tabla',
    component: TablaComponent,
  },
  {
    path: 'editregistro/:id',
    component: EditregistroComponent,
  },
  {
    path: 'documento',
    component: DocumentoComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
