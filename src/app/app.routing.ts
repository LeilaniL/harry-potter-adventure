import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';
import { SortingHatComponent } from './sorting-hat/sorting-hat.component';


const appRoutes: Routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'sorting-hat',
        component: SortingHatComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);