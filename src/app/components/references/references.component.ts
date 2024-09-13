import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-references',
    standalone: true,
    imports: [RouterLink, RouterOutlet],
    templateUrl: './references.component.html',
    styleUrl: './references.component.css'
})
export class ReferencesComponent {

}
