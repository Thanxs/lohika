import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {
  public isHidden = false;
  @HostListener('window:scroll', ['$event']) onScroll() {
    this.isHidden = window.pageYOffset > 10;
  }
}
