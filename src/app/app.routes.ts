import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FuelExpressComponent } from './pages/fuel-express/fuel-express.component';
import { ServiceComponent } from './pages/service/service.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'fuel-express', component: FuelExpressComponent },
  { path: 'services', component: ServiceComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
