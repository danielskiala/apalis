import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  inject,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { register, SwiperContainer } from 'swiper/element';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
register();
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, FooterComponent, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  @ViewChild('video') video: ElementRef<HTMLVideoElement>;
  @ViewChild('swiper') swiper: ElementRef<any>;
  swiperElement = signal<SwiperContainer | null>(null);
  router = inject(Router);

  status_video: boolean;
  constructor() {}
  ngOnInit() {}

  gotoContact() {
    this.router.navigate(['/contact']);
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

  changeTheme(theme: string) {
    // window.scrollTo(0, 0);
    if (theme == 'orange') {
      document.documentElement.className = theme;
    }

    if (theme == 'green') {
      document.documentElement.className = theme;
    }

    if (theme == 'blue') {
      document.documentElement.className = theme;
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
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        },
        // when window width is >= 480px
        580: {
          slidesPerView: 2,
        },
        // when window width is >= 480px
        767: {
          slidesPerView: 3,
        },
        // 992: {
        //   slidesPerView: 3.5,
        // },
        // 1200: {
        //   slidesPerView: 4,
        // },
        // 1400: {
        //   slidesPerView: 4.5,
        // },
      },
    };
    Object.assign(this.swiper.nativeElement!, swiperOptions);
    this.swiperElement.set(this.swiper.nativeElement as SwiperContainer);
    this.swiperElement()?.initialize();
  }
}
