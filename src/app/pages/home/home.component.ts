import { Component, OnInit } from '@angular/core';
import { TechnologyService } from '../../services/technology.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../app.component.scss']
})
export class HomeComponent implements OnInit {

  public technologies: Technology[];
  public loaded = false;

  constructor(private technologyService: TechnologyService) {
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
