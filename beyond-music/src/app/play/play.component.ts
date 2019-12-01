import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
  video = {};

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: any) => {
      console.log(data);
      this.video = data.items[0];
    });
  }
}
