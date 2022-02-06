import { Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import Stock from 'src/app/shared/models/stock-model';

import { StockCardComponent } from './stock-card.component';

describe('StockCardComponent', () => {
  let component: StockCardComponent;
  let fixture: ComponentFixture<StockCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
