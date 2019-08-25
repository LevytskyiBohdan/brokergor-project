import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/shared/services/news.service';
import { INews } from 'src/app/shared/interfaces/news.interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  point: string = "...";

  constructor(public NewsService: NewsService) { }

  ngOnInit() {
    this.NewsService.getData();
  }


}
