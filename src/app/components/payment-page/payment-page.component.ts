import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css'],
})
export class PaymentPageComponent {
  order: Order = new Order();

  constructor(cartService: CartService) {
    const cart = cartService.getCartValue();
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;
  }
}
