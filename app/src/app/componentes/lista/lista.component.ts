// Importar el componente 'Component' desde @angular/Core
import { Component } from '@angular/core';
// Importar el servicio 'ProductosService' desde el archivo 'productos.service' ubicado en la carpeta 'src/app/services'
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-lista', //selector del componente
  templateUrl: './lista.component.html', // maqueta html
  styleUrls: ['./lista.component.css'] // archivo de estilos css
})
export class ListaComponent {
  constructor( public productService :ProductosService ) {
    //constructor del componente
  }

  mostrarLista = true; //variable booleana que indica si de debe o no mostrar la lista

  mostrarVista(){  // metodo que cambia el estado de "mostrarLista"
    this.mostrarLista=!this.mostrarLista;
  }

}
