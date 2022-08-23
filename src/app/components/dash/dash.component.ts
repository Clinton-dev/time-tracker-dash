import { Component, OnInit } from '@angular/core';
import { TimeItemsService } from 'src/app/services/time-items.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  timeItems: any = [];
  frame: string = 'monthly';

  constructor(private timeItemsService: TimeItemsService) { }

  ngOnInit(): void {
    this.timeItemsService.getData().subscribe(data => {
      console.log(data)
      this.timeItems = data;
    });
    console.log(this.timeItems)
  }

  getTimeFrames(period: string) {
    // when clicked I want to change key on timeframes
    console.log(period)

  }

}
