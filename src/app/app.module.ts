import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RegistroComponent } from './components/registro/registro.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceService } from './services/service.service';
import { GraficoComponent } from './components/grafico/grafico.component';
import { EditregistroComponent } from './components/editregistro/editregistro.component';
import { DocumentoComponent } from './components/documento/documento.component';
import { NgxChartModule } from 'ngx-chart';
import { FilterPipe } from './pipes/filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RegistroComponent,
    TablaComponent,
    GraficoComponent,
    EditregistroComponent,
    DocumentoComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxChartModule,
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
