import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'apalis';

  ngAfterViewInit() {
    const btn_top = document.getElementById('btn_top');

    window.addEventListener('scroll', (e) => {
      if (window.scrollY > 500) {
        btn_top?.classList.add('active');
      } else {
        btn_top?.classList.remove('active');
      }
    });

    btn_top?.addEventListener('click', function () {
      window.scroll(0, 0);
    });
  }
}
