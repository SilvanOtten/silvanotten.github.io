// Angular
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public activeLink = 'home';
  public discord = 'Niamus#0931';
  public email = 'silvan.otten@windesheim.nl';

  constructor() { }

  ngOnInit() {
  }

}
