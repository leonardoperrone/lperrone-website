import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { state, style, trigger } from '@angular/animations';

@Component({
  selector: 'app-project-detail',
  animations: [
    trigger('collapseExpand', [
      state('collapsed', style({
        height: '120px',
        overflow: 'hidden'
      })),
      state('expanded', style({
        height: 'auto',
        overflow: 'visible'
      }))
    ]),
  ],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  @Input() project: Project;
  public isCollapsed = true;
  public isLongDescription = true;

  constructor() {
  }

  ngOnInit() {
    if (this.project) {
      this.isLongDescription = this.project.description.length > 300;
    }
  }

  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }

}
