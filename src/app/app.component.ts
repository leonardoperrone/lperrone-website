import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('navbar') navbar: ElementRef;

  title = 'Leonardo Perrone';
  isHomeActive: boolean;
  isCollapsed = true;

  constructor(private router: Router, private renderer: Renderer2) {
    router.events.filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        this.isHomeActive = event.url.endsWith('home');
      });
  }

  ngOnInit() {
  }

  checkMenuCollapse(source: string) {
    this.isCollapsed = source === 'logo-link' ? true : !this.isCollapsed;
    console.log((this.isCollapsed));
    if (!this.isCollapsed) {
      this.renderer.addClass(this.navbar.nativeElement, 'navbar-arie-expanded');
    } else {
      this.renderer.removeClass(this.navbar.nativeElement, 'navbar-arie-expanded');
    }
  }
}

