import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/models/Order';
import { CartService } from './../services/cart/cart.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css'],
})
export class CheckoutPageComponent implements OnInit {
  order: Order = new Order();

  constructor(cartService: CartService) {
    const cart = cartService.getCartValue();
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;
  }

  createOrder() {
    if (this.order) {
      return console.log(this.order);
    }
  }

  ngOnInit(): void {}
}
