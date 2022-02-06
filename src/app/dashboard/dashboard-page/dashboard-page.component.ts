import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import Stock from '../../shared/models/stock-model';
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  stocks: Stock[] = [];
  constructor(private componenteService: DashboardService ) { }

  ngOnInit(): void {
    this.getStocks();
  }
  async getStocks(): Promise<void> {
    this.stocks = await this.componenteService.getStocks();
    console.log(this.stocks);
  }
}
