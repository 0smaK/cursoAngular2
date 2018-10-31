import { Component } from '@angular/core';

interface producto {
	description:string;
	checked:boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre;
  title = 'Lista de la compra';
  iconoBorrar = 'assets/trash.png'
  quedan;

  setName(nombre:string){
    this.nombre=nombre;
  }

  private productos: producto[] = [];
  private numItemsMarked: number = 0;
  errorProductoNombre: boolean = false;

	addProducto(description: string){
    if(description.length!=0){
      this.productos.push({description, checked: false});
      this.numItemsMarked += 1;
      this.errorProductoNombre = false;
    }else{
      this.errorProductoNombre = true;
    }
	}

	marcar(value: number){
    this.numItemsMarked += value;
	}

	eliminar(index:number){
		if(!this.productos[index].checked) this.numItemsMarked -= 1;
		this.productos.splice(index,1);
	}

  quedanProductos(){
    return this.productos.length - (this.productos.length - this.numItemsMarked);
    
  }
}
