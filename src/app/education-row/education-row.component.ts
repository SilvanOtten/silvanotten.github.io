// Angular
import { Component, OnInit, Input } from '@angular/core';

// Models
import { Education } from '../models/education.models';

@Component({
  selector: 'app-education-row',
  templateUrl: './education-row.component.html',
  styleUrls: ['./education-row.component.scss']
})
export class EducationRowComponent implements OnInit {
  @Input() education: Education;

  constructor() { }

  ngOnInit() {
  }
}
