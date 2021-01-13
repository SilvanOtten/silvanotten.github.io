// Angular
import { Component, OnInit } from '@angular/core';

// Modal Components
import { ProjectModalComponent } from 'src/app/modals/project-modal/project-modal.component';

// Bootstrap
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Models
import { Project } from 'src/app/models/project.models';
import { Education } from 'src/app/models/education.models';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public projects: Project[];
    public educations: Education[];
    private projectUrlPath = '../../../assets/images/projects/';

    constructor(private modalService: NgbModal) { }

    ngOnInit() {
        // TO-DO: Retrieve from service
        this.projects = [
            {
                title: 'Continuous Delivery',
                description: 'Minor at the Hogeschool Utrecht by Info Support, building complex applications from front to back with C# / .NET Core. ' +
                    'Using K8s, Specflow, Docker, MoQ, RabbitMQ with a focus on automation in Azure.',
                url: this.projectUrlPath + 'infosupport.jpg'
            },
            {
                title: 'Kavelruilonline',
                description: 'Project for the minor Web & Analytics at Windesheim. ' +
                    'Developed a brand new platform to facilitate lot exchanges within a multidisciplanary scrum team of four!',
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

        // TO-DO: Retrieve from service
        this.educations = [
            {
                title: 'Windesheim',
                timespan: 'Sept. 2016 - Present',
                description: 'Information & Communication Technology',
                characteristics: ['Software Engineering', 'Scrum & Agile Methodology', 'Design Patterns & Algorithms and Datastructures', 'Web & App Development with Analytics']
            },
            {
                title: 'Info Support',
                timespan: 'Feb. 2020 - April 2020',
                description: 'Realtime Monitoring in Distributed Systems',
                characteristics: ['Internship', 'Trace Context W3C Implementation', 'Full Stack Monitoring', '.NET Core 3.x / Framework 4.x / Blazor / MVC']
            },
            {
                title: 'Hogeschool Utrecht',
                timespan: 'Sept. 2019 - Feb. 2020',
                description: 'Continuous Delivery in Large and Complex Software Systems',
                characteristics: ['Building big applications from front to back with C# / .NET Core',
                    'Complex systems with K8s, Specflow, Docker, MoQ, RabbitMQ', 'Focus on Process Automation']
            },
            {
                title: 'Windesheim',
                timespan: 'Sept. 2010 - June 2011',
                description: 'Business Economics',
                characteristics: ['Accounting & Financial Management', 'Management & Financial Accounting', 'Internal and External Business Factors']
            },
            {
                title: 'University of Twente',
                timespan: 'Sept. 2009 - June 2010',
                description: 'Industrial Design Engineering',
                characteristics: ['Creatively designing Consumer Products', 'Applied Physics and Material Sciences']
            },
            {
                title: 'CSG. De Heemgaard',
                timespan: 'Sept. 2003 - June 2009',
                description: 'Nature and Health Sciences - Pre-university Degree',
                characteristics: ['Math, Biology, Physics, Chemistry, and Economics']
            }
        ];
    }

    open(project: any) {
        const modalRef = this.modalService.open(ProjectModalComponent);
        modalRef.componentInstance.project = project;
    }
}
