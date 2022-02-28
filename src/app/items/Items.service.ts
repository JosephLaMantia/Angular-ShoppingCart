import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ItemsService {
  ItemsChanged = new Subject<string[]>();
  Items: string[] = ['Apple', 'Banana', 'Pear', 'Grape', 'Cherry', 'Orange', 'Kiwi', 'Pineapple'];
  CartChanged = new Subject<string[]>();
  Cart: string[] = [];

  addItem(name: string) {
    console.log(this.Cart)
    this.Cart.push(name)
    console.log("ADDED " + name, this.Cart)
  }

  removeItem(name: string) {
    console.log(this.Cart)
    console.log(this.Cart.indexOf(name))
    let indexToRemove = this.Cart.indexOf(name)
    this.Cart.splice(indexToRemove, 1)
    console.log("REMOVED " + name, this.Cart)
    this.CartChanged.next(this.Cart)
  }
}
