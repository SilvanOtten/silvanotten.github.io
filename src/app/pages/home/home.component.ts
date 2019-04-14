// Angular
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public screenHeight: number;
    public screenWidth: number;
    public images: any;

    constructor() { }

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.screenHeight = window.innerHeight * 0.905;
        this.screenWidth = window.innerWidth;
        this.images = [1, 2, 3].map(() => `https://picsum.photos/` + this.screenWidth + `/` + this.screenHeight + `?random&t=${Math.random()}`);
    }

    ngOnInit() {
        this.onResize();
    }

}
