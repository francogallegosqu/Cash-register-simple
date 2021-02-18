import { Component } from '@angular/core';
import { Producto} from './models/producto.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrComida:Producto[];
  arrBebida:Producto[];

 productosSeleccionado:Producto[];
  constructor(){
    this.arrComida=[
      new Producto('Papa','https://static.vix.com/es/sites/default/files/styles/4x3/public/imj/otramedicina/p/papa.jpg',2.50),
      new Producto('Yuca','https://static.diariofemenino.com/media/22740/consejos-conservar-yuca.jpg',4.30),
      new Producto('camote','https://www.yanuq.com/images/articulos-publicados/camote.jpg',3.20)
    ];
    this.arrBebida=[
      new Producto('Coca Cola','http://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2020/10/01145157/6529.png',10.50),
      new Producto('Inka Cola','https://vivanda.vteximg.com.br/arquivos/ids/207168-1000-1000/20200653.jpg?v=637345275484200000',11.50),
      new Producto('Guarana','https://chely.pe/wp-content/uploads/2019/02/Guarana-x-2-l.jpg',9.20)
    ];
    this.productosSeleccionado=[]
  }

  onProductoSeleccionado($event){
    // console.log($event);
    //this.productosSeleccionado.push($event)

    const productoEncontrado = this.productosSeleccionado.find(producto=>producto.nombre===$event.nombre);
     if(productoEncontrado){
       productoEncontrado.cantidad++;
     }else{
       $event.cantidad=1;
       this.productosSeleccionado.push($event);
     }
  }
}
