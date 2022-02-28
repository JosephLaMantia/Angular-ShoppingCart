import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ItemsService } from './Items.service';

@Injectable({
  providedIn: 'root'
})
export class ItemCartService {
  ItemsChanged = new Subject<string[]>();
  Items: string[] = [];

  addItem(name: string) {
    this.Items.push(name);
    this.ItemsChanged.next(this.Items);
  }

  removeItem(name: string) {
    this.Items = this.Items.filter(Item => {
      return Item !== name;
    });
    this.ItemsChanged.next(this.Items);
  }
}