import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ItemsService } from './Items.service';

@Component({
  selector: 'app-Items',
  templateUrl: './Items.component.html'
})
export class ItemsComponent implements OnInit, OnDestroy {
  ItemList: string[];
  private ItemListSubs: Subscription;

  Cart: string[];
  private CartSubs: Subscription;

  // private ItemService: ItemsService;

  constructor(private prsService: ItemsService) {
    // this.ItemList = prsService.Items;
    // this.ItemService = prsService;
  }

  ngOnInit() {
    this.ItemList = this.prsService.Items;
    this.ItemListSubs = this.prsService.ItemsChanged.subscribe(Items => {
      this.ItemList = Items;
    });
  }

  onAddItem(ItemName: string) {
    this.prsService.addItem(ItemName)
  }

  ngOnDestroy() {
    this.ItemListSubs.unsubscribe();
  }
}
