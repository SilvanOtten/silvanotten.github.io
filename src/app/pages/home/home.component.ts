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
                label: 'Communication',
                description: 'Excellent writing, good people skills, and the capacity to think critically and strategically.'
            },
            {
                image: this.imagePath + 'pineapple.jpg',
                label: 'Passion and Commitment',
                description: 'Involved to solve real problems, aiming for success.'
            },
            {
                image: this.imagePath + 'lamps.jpg',
                label: 'Analyse',
                description: 'Let\'s figure things out.'
            },
            {
                image: this.imagePath + 'skyline.jpg',
                label: 'Creative',
                description: 'New and imaginative ideas into reality.'
            },
            {
                image: this.imagePath + 'cooking.jpg',
                label: 'Collaboration',
                description: 'Working together for a shared goal.'
            },
        ];
    }

}
