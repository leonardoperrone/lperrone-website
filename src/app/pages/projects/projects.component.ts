import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss', '../../app.component.scss']
})
export class ProjectsComponent implements OnInit {
  loaded = true;
  projects = [];

  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

}
