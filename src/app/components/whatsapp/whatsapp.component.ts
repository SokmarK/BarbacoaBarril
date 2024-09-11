import { Component } from '@angular/core';

@Component({
    selector: 'app-whatsapp',
    standalone: true,
    imports: [],
    templateUrl: './whatsapp.component.html',
    styleUrl: './whatsapp.component.css'
})
export class WhatsappComponent {

    openChat() {
        window.open('https://wa.me/3124949733', '_blank'); 
    }

}
