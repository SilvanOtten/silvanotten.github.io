// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public discord = 'Niamus#0931';
  public email = 'silvan.otten@windesheim.nl';
  public isExpanded = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  isActive(url: string): boolean {
    return this.router.url.includes(url);
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

}
