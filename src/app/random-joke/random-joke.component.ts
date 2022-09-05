import { NullTemplateVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-random-joke',
  templateUrl: './random-joke.component.html',
  styleUrls: ['./random-joke.component.css'],
})
export class RandomJokeComponent implements OnInit {
  joke: any;
  constructor(private ServObj: ApiService) {}

  ngOnInit(): void {
    this.ServObj.getJokes()
      .pipe(
        map((response: any) => {
          if(response!=null){
          this.joke = response;
          }
        })
      )
      .subscribe();
  
  }
}
