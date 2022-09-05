import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-random-task',
  templateUrl: './random-task.component.html',
  styleUrls: ['./random-task.component.css'],
})
export class RandomTaskComponent implements OnInit {
  task: any;
  constructor(private ServObj: ApiService) {}

  ngOnInit(): void {
    this.ServObj.getRandomTask().subscribe((Response) => {
      this.task = Response;
    });
  }
}
