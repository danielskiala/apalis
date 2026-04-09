import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';

@Component({
  selector: 'app-fuel-express',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './fuel-express.component.html',
  styleUrl: './fuel-express.component.scss',
})
export class FuelExpressComponent {
  @ViewChild('video') video: ElementRef<HTMLVideoElement>;
  status_video: boolean;

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
