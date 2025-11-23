import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  @ViewChild('video') video: ElementRef<HTMLVideoElement>;
  status_video: boolean;
  constructor() {}
  ngOnInit() {
  }

  startVideoBanner() {
    if (!this.video.nativeElement.paused) {
      this.video.nativeElement.pause();
      this.status_video = true;
    } else {
      this.status_video = false;
      this.video.nativeElement.play();
    }
  }
}
