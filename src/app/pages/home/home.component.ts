import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { register, SwiperContainer } from 'swiper/element';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
register();
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  @ViewChild('video') video: ElementRef<HTMLVideoElement>;
  @ViewChild('swiper') swiper: ElementRef<any>;
  swiperElement = signal<SwiperContainer | null>(null);

  status_video: boolean;
  constructor() {}
  ngOnInit() {}

  startVideoBanner() {
    if (!this.video.nativeElement.paused) {
      this.video.nativeElement.pause();
      this.status_video = true;
    } else {
      this.status_video = false;
      this.video.nativeElement.play();
    }
  }

  ngAfterViewInit() {
    const swiperElementConstructor = document.querySelector('swiper-container');
    const swiperOptions: SwiperOptions = {
      modules: [Autoplay, Navigation],
      slidesPerView: 4,
      spaceBetween: 10,
      speed: 1000,
      autoplay: true,
      loop: true,
      pagination: true,
      navigation: false,
    };
    Object.assign(this.swiper.nativeElement!, swiperOptions);
    this.swiperElement.set(this.swiper.nativeElement as SwiperContainer);
    this.swiperElement()?.initialize();
  }
}
