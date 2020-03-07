// Angular
import { Component, OnInit, Input } from '@angular/core';

// Bootstrap
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// Models
import { Project } from 'src/app/models/project.models';

@Component({
  selector: 'app-project',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent implements OnInit {
  @Input() project: Project;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
}
