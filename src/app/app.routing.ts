import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostMessageComponent } from './post-message/post-message.component';
import { LoginComponent } from './login/login.component';
import { ChatroomComponent } from './chatroom/chatroom.component';


const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'chatroom',
        component: ChatroomComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
