import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectComponent } from './project/project.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'resume', component: ResumeComponent},
    { path: 'project', component: ProjectComponent},
];
