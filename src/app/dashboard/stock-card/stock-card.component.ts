import { Component, Input, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock-model';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent implements OnInit {

  @Input()
  stock: Stock;
  constructor() { }

  ngOnInit(): void {
  }

  get variation(): string{
    const variationString = this.stock.variation.toLocaleString();
    const sinal = this.stock.variation > 0? "+" : "-";
    return `${sinal} ${variationString.replace('-', '')}%`;
  }
}
