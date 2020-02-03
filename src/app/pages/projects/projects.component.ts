import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss', '../../app.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  loaded = false;

  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.projectService.getProjects().subscribe(res => {
      this.projects = res.data.docs;
      if (this.projects) {
        this.loaded = true;
      }
    });
  }

}
