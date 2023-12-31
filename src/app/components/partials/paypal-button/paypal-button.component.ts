import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Order } from 'src/app/shared/models/Order';

//window.paypal
declare var paypal: any;

@Component({
  selector: 'paypal-button',
  templateUrl: './paypal-button.component.html',
  styleUrls: ['./paypal-button.component.css'],
})
export class PaypalButtonComponent implements OnInit {
  @Input()
  order!: Order;

  @ViewChild('paypal', { static: true })
  paypalElement!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    const self = this;
    paypal
      .Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: 'USD',
                  value: self.order.totalPrice,
                },
              },
            ],
          });
        },

        onApprove: async (data: any, actions: any) => {
          const payment = await actions.order.capture();
          this.order.paymentId = payment.id;
        },

        onError: (err: any) => {
          console.log(err);
        },
      })
      .render(this.paypalElement.nativeElement);
  }
}
