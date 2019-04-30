// Angular
import { Component, OnInit, Input } from '@angular/core';

// Bootstrap
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent implements OnInit {
  @Input() project: any;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
