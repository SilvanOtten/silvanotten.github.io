// Angular
import { Component, OnInit } from '@angular/core';

// Modal Components
import { ProjectModalComponent } from 'src/app/modals/project-modal/project-modal.component';

// Bootstrap
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public projects: any[];
    private projectUrlPath = '../../../assets/images/projects/';

    constructor(private modalService: NgbModal) { }

    ngOnInit() {
        // TO-DO: Retrieve from service
        this.projects = [
            {
                title: 'Kavelruilonline',
                description: 'This is my current project for the minor Web & Analytics at Windesheim. ' +
                    'I\'m developing a brand new platform to facilitate lot exchanges within a multidisciplanary scrum team of four!',
                url: this.projectUrlPath + 'logo-kro.png'
            },
            {
                title: 'TSP',
                description: 'Displaying simulations with Java presenting various solutions to the Travelling Salesman Problem' +
                    'based on different algorithms(brute force, nearest neighbour and a swapping algorithm).',
                url: this.projectUrlPath + 'tsp.jpg'
            },
            {
                title: 'Driving Analyses',
                description: 'Proof of Concept for the National Railroad commissioned by Info Support. ' +
                    'Mobile Application to help machinists get insight into their driving style.',
                url: this.projectUrlPath + 'ns.png'
            },
            {
                title: 'Platform Game',
                description: 'Real time 2D platform game written in C#. Map creation, obstacle interaction, inventory system. ' +
                    'Improved my Object Oriented Programming skills in C#.',
                url: this.projectUrlPath + 'game.jpg'
            },
            {
                title: 'SuperBuddy',
                description: 'Internship developing a Native Progressive Web Application in NativeScript. ' +
                    'Designed a cross-platform mobile app to help delivery crew pick consumer goods.',
                url: this.projectUrlPath + 'superbuddy.png'
            },
            {
                title: 'Peer Assessment',
                description: 'Lead a project devolping a website environment for students to learn and improve SQL with eachother. ' +
                    'This helped improve the level of my PhP, SQL, HTML and CSS skills.',
                url: this.projectUrlPath + 'pat.jpg'
            }
        ];
    }

    open(project: any) {
        const modalRef = this.modalService.open(ProjectModalComponent);
        modalRef.componentInstance.project = project;
    }

}
