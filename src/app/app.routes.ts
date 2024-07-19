import { Routes } from '@angular/router';
import { ViewModeComponent } from './pages/view-mode/view-mode.component';
import { SettingsComponent } from './pages/settings/settings.component';
export const routes: Routes = [
    {path:"view-mode", component: ViewModeComponent},
    {path:"settings", component: SettingsComponent},    
    {path:"", redirectTo: "/view-mode", pathMatch: "full"}//default route
];
