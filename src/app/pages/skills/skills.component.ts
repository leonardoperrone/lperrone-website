import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TechnologyService } from '../../services/technology.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', '../../app.component.scss']
})
export class SkillsComponent implements OnInit {
  public technologies: Technology[];
  public loaded = false;

  constructor(private meta: Meta, private technologyService: TechnologyService) {
    this.meta.addTag({
      name: 'keywords', content: 'Leonardo, Perrone, ' +
        'leonardoperrone, wichita state, developer, software'
    });
    this.meta.addTag({
      name: 'description', content: 'Landing page for ' +
        'Leonardo Perrone own website, it displays some of his skills and background'
    });
    this.meta.addTag({ name: 'author', content: 'Leonardo Perrone' });
  }

  ngOnInit() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.technologyService.getTechnologies().subscribe((res) => {
      this.technologies = res;
      if (this.technologies) {
        this.loaded = true;
      }
    });


  }
}
