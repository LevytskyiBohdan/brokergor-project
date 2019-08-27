import { Component, OnInit, Sanitizer } from '@angular/core';
import { NewsService } from 'src/app/shared/services/news.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { observable, Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { INews } from 'src/app/shared/interfaces/news.interface';

@Component({
  selector: 'app-admin-news',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.css'],
})
export class AdminNewsComponent implements OnInit {

  buttonToggle: boolean = true;

  id:string;
  title: string;
  article: string;
  

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  image: string = null;

  constructor(private afStorage: AngularFireStorage, public NewsService: NewsService) { 
    this.NewsService.getData();
  }

  ngOnInit() { }

  addNews(form): void {
    this.NewsService.addNews(form, this.image);
  }

  editNews(item): void {
    this.buttonToggle = false;
    this.id = item.id;
    this.title = item.title;
    this.article = item.article;
    this.image = item.image;    
  }

  saveEditNews(form): void {
    this.NewsService.seveEdit(form, this.id, this.image);  
    this.id = '';
    this.title = '';
    this.article = '';
    this.buttonToggle = true;
  }

  deleteNews(id: string): void{
    this.NewsService.deleteNews(id);
  }

  public upload(event):void{
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(`images/news/${id}`);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.uploadProgress = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(()=>{
        this.downloadURL = this.ref.getDownloadURL();
        this.downloadURL.subscribe(url => this.image = url)
      })
    ).subscribe()
  }
  
  past(article){
    console.log(article);
    
  }


}
