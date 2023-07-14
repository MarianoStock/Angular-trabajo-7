import { NgModule } from '@angular/core'; //importa el decorador ngModule
import { BrowserModule } from '@angular/platform-browser'; // importa browserModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './componentes/lista/lista.component'; //importa el componente desde "componentes..."

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'; // importa el modulo matButt.. desde Angular material

@NgModule({ //declaraciones de los componentes del modulo
  declarations: [
    AppComponent,
    ListaComponent 
  ],
  imports: [ //importacion de modulos necesarios
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
