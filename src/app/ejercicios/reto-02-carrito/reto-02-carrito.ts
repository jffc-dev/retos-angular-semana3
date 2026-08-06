import { Component, computed, signal } from '@angular/core';
import { IProductoCarrito, IProductoTienda } from '../../interfaces/producto-carrito.interface';
import { ProductCardComponent } from './product-card/product-card';

@Component({
  selector: 'app-reto-02-carrito',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './reto-02-carrito.html',
})
export class Reto02Carrito {
  // TODO: crea carrito = signal<ItemCarrito[]>([]) (ver
  // ../../models/carrito.model.ts), los métodos totalItems()/totalSoles()
  // que lo recorran, y onAddToCart(item) que agregue el producto (sumando
  // la cantidad si el id ya existe). Escúchalo con
  // (addToCart)="onAddToCart($event)" en cada <app-product-card />.

  elementosCarrito = signal<IProductoCarrito[]>([])

  productos = signal<IProductoTienda[]>([
    { id: 1, nombre: 'Laptop Ultra 14"', precio: 3499, imagen: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop&auto=format', stock: 10 },
    { id: 2, nombre: 'Mouse Inalámbrico', precio: 89, imagen: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&auto=format', stock: 100 },
    { id: 3, nombre: 'Teclado Mecánico', precio: 259, imagen: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop&auto=format', stock: 0 },
    { id: 4, nombre: 'Audífonos Bluetooth', precio: 349, imagen: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&auto=format', stock: 10 },
    { id: 5, nombre: 'Smartphone Pro', precio: 2899, imagen: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop&auto=format', stock: 10 },
    { id: 6, nombre: 'Smartwatch Fit', precio: 599, imagen: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop&auto=format', stock: 1000 },
    { id: 7, nombre: 'Monitor 27" 4K', precio: 1199, imagen: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop&auto=format', stock: 8 },
    { id: 8, nombre: 'Tablet 10"', precio: 1099, imagen: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop&auto=format', stock: 5 },
    { id: 9, nombre: 'Cámara Mirrorless', precio: 2599, imagen: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop&auto=format', stock: 50 },
    { id: 10, nombre: 'Parlante Bluetooth', precio: 199, imagen: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&auto=format', stock: 100 },
  ]);

  manejarAgregarAlCarrito(data: IProductoCarrito){
    this.elementosCarrito.update((listaActual) => {
      return [...listaActual, data]
    })
  }

  cantidadDeItems = computed(() => {
    let cantidadTotal = 0
    for(let index = 0; index < this.elementosCarrito().length; index++){
      cantidadTotal += this.elementosCarrito()[index].cantidad
    }
    return cantidadTotal
  })

  precioTotal = computed(() => {
    let precioTotal = 0
    for(let index = 0; index < this.elementosCarrito().length; index++){
      precioTotal += (this.elementosCarrito()[index].cantidad * this.elementosCarrito()[index].precio)
    }
    return precioTotal
  })
}
