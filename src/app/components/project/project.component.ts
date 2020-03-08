// Angular
import { Component, OnInit, Input } from '@angular/core';

// Bootstrap
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Models
import { Project } from 'src/app/models/project.models';

// Components
import { ProjectModalComponent } from 'src/app/modals/project-modal/project-modal.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;

  constructor(private ngbModal: NgbModal) { }

  ngOnInit() {
  }

  open(project: any) {
    const modalRef = this.ngbModal.open(ProjectModalComponent);
    modalRef.componentInstance.project = project;
  }
}
