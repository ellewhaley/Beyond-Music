import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  videos = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: any) => {
      console.log(data);
      this.videos = data.items;
    });
  }
}
