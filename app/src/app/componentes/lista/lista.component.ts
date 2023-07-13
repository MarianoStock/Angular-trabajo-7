import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  constructor( public productService :ProductosService ) {
    
  }

  mostrarLista = true;

  mostrarVista(){
    this.mostrarLista=!this.mostrarLista;
  }

}
