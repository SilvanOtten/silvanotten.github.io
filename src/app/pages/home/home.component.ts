// Angular
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    private imagePath = '../../../assets/images/';
    public slides: object[];

    constructor() { }

    ngOnInit() {
        this.slides = [
            {
                image: this.imagePath + 'wall.jpg',
                label: 'Nature',
                description: 'Discover and explore the possibilities in nature'
            },
            {
                image: this.imagePath + 'pineapple.jpg',
                label: 'Relaxed',
                description: 'Take to relax and be creative'
            },
            {
                image: this.imagePath + 'lamps.jpg',
                label: 'Nightowl',
                description: 'Available all day'
            },
            {
                image: this.imagePath + 'skyline.jpg',
                label: 'International',
                description: 'Let\'s go places'
            },
            {
                image: this.imagePath + 'cooking.jpg',
                label: 'Cooking',
                description: 'Good food good life'
            },
        ];
    }

}
