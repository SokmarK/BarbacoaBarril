import { Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { ProductsComponent } from './components/products/products.component';
import { GuideComponent } from './components/guide/guide.component';
import { ContactComponent } from './components/contact/contact.component';
import { ClientsComponent } from './components/clients/clients.component';
import { AboutComponent } from './components/about/about.component';
import { AccesoriesComponent } from './components/accesories/accesories.component';
import { EcoComponent } from './components/eco/eco.component';
import { ReferencesComponent } from './components/references/references.component';

export const routes: Routes = [
    { path: "", component: PrincipalComponent },
    { path: "products", component: ProductsComponent },
    { path: "guide", component: GuideComponent },
    { path: "contact", component: ContactComponent },
    { path: "clients", component: ClientsComponent },
    { path: "about", component: AboutComponent },
    { path: "accesories", component: AccesoriesComponent },
    { path: "eco", component: EcoComponent },
    { path: "references", component: ReferencesComponent }
];
