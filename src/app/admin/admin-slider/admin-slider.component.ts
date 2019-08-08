import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { observable, Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { ISlide } from 'src/app/shared/interfaces/slide.interface';
import { SliderService } from 'src/app/shared/services/slider.service';
import { NewSlide } from 'src/app/shared/classes/new-slide';

@Component({
  selector: 'app-admin-slider',
  templateUrl: './admin-slider.component.html',
  styleUrls: ['./admin-slider.component.css']
})
export class AdminSliderComponent implements OnInit {
  // adminSlide: Array<ISlide> = [];

  id:number;
  firstTitle: string;
  secondTitle: string;
  

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  image: string = null;

  refSM: AngularFireStorageReference;
  taskSM: AngularFireUploadTask;
  uploadStateSM: Observable<string>;
  uploadProgressSM: Observable<number>;
  downloadURLsm: Observable<string>;
  imageSM: string = null;


  constructor(private afStorage: AngularFireStorage, public SlideService: SliderService) { }

  ngOnInit() {
    this.getSlide();
  }
  private getSlide(): void{
    this.SlideService.getSlide();
  }

  addSlide(form): void{
    this.SlideService.addSlide(form, this.image, this.imageSM);
  }
  deleteSlide(id: string): void{
    this.SlideService.deleteSlide(id);
    
  }

  // private getSlide(): void{
  //   this.SlideServiceIn.getSlide().subscribe(
  //     data =>{
  //       this.adminSlide = data;
  //     },
  //     err =>{
  //       console.log(err);
  //     }
  //   )
  // }

  // public isAddSlide():void{
  //   const newSlide: ISlide = new NewSlide(
  //     0,
  //     this.firstTitle,
  //     this.secondTitle,
  //     this.image,
  //     this.imageSM,
  //   );
  //   newSlide.id = this.adminSlide.slice(-1)[0].id + 1;

  //   this.SlideServiceIn.addSlide(newSlide).subscribe(
  //     ()=> {
  //       this.getSlide();
  //     });

  //     this.firstTitle = '';
  //     this.secondTitle = '';
  // }

  // public isDeleteSlide(slide: ISlide): void {
  //   const id = slide.id;
  //   this.SlideServiceIn.deleteSlide(id).subscribe(
  //     () => {
  //       this.getSlide();
  //     }
  //   )
  // }





  public upload(event):void{
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(`images/slider/${id}`);
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

  public uploadSMImage(event):void{
    const id = Math.random().toString(36).substring(2);
    this.refSM = this.afStorage.ref(`images/slider/${id}`);
    this.taskSM = this.refSM.put(event.target.files[0]);
    this.uploadStateSM = this.taskSM.snapshotChanges().pipe(map(s => s.state));
    this.uploadProgressSM = this.taskSM.percentageChanges();
    this.taskSM.snapshotChanges().pipe(
      finalize(()=>{
        this.downloadURLsm = this.refSM.getDownloadURL();
        this.downloadURLsm.subscribe(url => this.imageSM = url)
      })
    ).subscribe()
  }
}
