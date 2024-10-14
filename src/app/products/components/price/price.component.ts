import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit,OnChanges,OnDestroy {


  @Input()
  public price: number = 0;
  public interval$?:Subscription
  ngOnInit(): void {
    console.log('PRICE ngOnInit');

   this.interval$ = interval(1000).subscribe((value) => {
      console.log('interval', value);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('PRICE ngOnChanges');
    console.log(changes);
  }
  ngOnDestroy(): void {
    console.log('PRICE ngOnDestroy');
    this.interval$?.unsubscribe();
  }


}
