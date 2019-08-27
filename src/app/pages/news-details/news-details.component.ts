import { Component, OnInit } from '@angular/core';
import { NewsDetailsService } from 'src/app/shared/services/news-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  constructor(public NewsDetailsService: NewsDetailsService, private Router: ActivatedRoute) { }

  ngOnInit() {
    this.getNewsDetails();
  }

  getNewsDetails(): void {
    let id = this.Router.snapshot.paramMap.get('id');
    this.NewsDetailsService.getNewsId(id);   
  }
}
