import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @ViewChild('video') video: ElementRef<HTMLVideoElement>;
  status_video: boolean;

  startVideoBanner() {
    if (!this.video.nativeElement.paused) {
      this.video.nativeElement.pause();
      this.status_video = true;
    } else {
      this.video.nativeElement.play();
    }
  }
}
