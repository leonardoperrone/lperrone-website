import { Component, OnInit } from '@angular/core';
import { TechnologyService } from '../../services/technology.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../app.component.scss']
})
export class HomeComponent implements OnInit {

  public technologies: Technology[];
  public loaded = false;

  constructor(private meta: Meta, private technologyService: TechnologyService) {
    this.meta.addTag({ name: 'keywords', content: 'Leonardo, Perrone, leonardoperrone, wichita state, developer, software' });
    this.meta.addTag({ name: 'description', content: 'Landing page for Leonardo Perrone own website, it displays some of his skills and background'});
    this.meta.addTag({ name: 'author', content: 'Leonardo Perrone'});
  }

  ngOnInit() {
    this.technologyService.getTechnologies().subscribe((res) => {
      this.technologies = res;
      if (this.technologies) {
        this.loaded = true;
      }
    });
  }

}
