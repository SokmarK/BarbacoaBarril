import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-clients',
    standalone: true,
    imports: [RouterLink, RouterOutlet],
    templateUrl: './clients.component.html',
    styleUrl: './clients.component.css'
})
export class ClientsComponent implements OnInit {

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.fragment.subscribe(fragment => {
            const element = document.querySelector("#" + fragment);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

}
