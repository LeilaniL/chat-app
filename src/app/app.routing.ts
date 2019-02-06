import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostMessageComponent } from './post-message/post-message.component';

const appRoutes: Routes = [
    {
        path: '',
        component: PostMessageComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
