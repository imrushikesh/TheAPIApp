import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-random-quote',
  templateUrl: './random-quote.component.html',
  styleUrls: ['./random-quote.component.css'],
})
export class RandomQuoteComponent implements OnInit {
  constructor(private ServObj: ApiService) {}
  quotes: any;
  randomQuote: any;
  ngOnInit(): void {
    this.ServObj.getQuote().subscribe((Response) => {
      this.quotes = Response;
      this.randomQuote = this.getRandomItem(this.quotes);
    });
  }

  getRandomItem(arr: string | any[]) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
  }
}
