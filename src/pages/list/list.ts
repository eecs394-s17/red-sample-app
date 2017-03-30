import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      if (i == 1) {
        this.items.push({
          title: 'Junwon' + i,
          note: 'This is Junwons update',
          icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        });
      }
      else {
        this.items.push({
          title: 'Item ' + i,
          note: 'This is item #' + i,
          icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        });
      }
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
