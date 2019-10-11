import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../app.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('copy') copy: ElementRef;


  constructor() {
  }

  ngOnInit() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    const typedString = 'Web Developer, Passionate Engineer, Technology Enthusiast';
    const typed = new Typed('#typed', {
      strings: typedString.split(','),
      typeSpeed: 80,
      loop: true,
      backDelay: 1100,
      backSpeed: 30
    });
  }


}
