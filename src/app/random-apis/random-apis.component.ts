import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-random-apis',
  templateUrl: './random-apis.component.html',
  styleUrls: ['./random-apis.component.css']
})
export class RandomApisComponent implements OnInit {
publicApi:any;
  constructor(public ServObj:ApiService) { }


  ngOnInit(): void {
    this.ServObj.getListOfPublicApis()
      .pipe(
        map((response: any) => {
          console.log(response);
          this.publicApi = response;
        })
      )
      .subscribe();
  }

}
