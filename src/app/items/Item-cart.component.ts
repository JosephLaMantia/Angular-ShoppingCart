import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ItemsService } from './Items.service';

@Component({
  selector: 'app-Item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.css']
})
export class ItemCartComponent implements OnInit, OnDestroy {
  ItemList: string[];
  private ItemListSubs: Subscription;
  // private ItemService: ItemsService;

  constructor(private prsService: ItemsService) {
    // this.ItemList = prsService.Items;
    // this.ItemService = prsService;
  }

  ngOnInit() {
    this.ItemList = this.prsService.Cart;
    this.ItemListSubs = this.prsService.CartChanged.subscribe(Items => {
      this.ItemList = Items;
    });
  }

  onRemoveItem(ItemName: string) {
    this.prsService.removeItem(ItemName);
  }

  ngOnDestroy() {
    this.ItemListSubs.unsubscribe();
  }
}

// export class ItemCartComponent {
//   enteredItemName = '';

//   constructor(private ItemsService: ItemsService) {}

//   onCreateItem() {
//     console.log('Created a Item: ' + this.enteredItemName);
//     this.ItemsService.addItem(this.enteredItemName);
//     this.enteredItemName = '';
//   }
// }
