import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { OffersComponent } from './offers/offers.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { authGuard } from './services/auth.guard';
import { EditPageComponent } from './edit-page/edit-page.component';
import { roleGuard } from './services/role.guard';
import { notCompletGuard } from './services/not-complet.guard';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'contact',component:ContactComponent,canDeactivate:[notCompletGuard]},
    {path:'admin',component:AdminComponent,canActivate:[authGuard]},
    {path:'offers',component:OffersComponent,canActivateChild:[roleGuard],
        children:[
            {path:'edit',component:EditPageComponent}
        ]
    },
    {path:'about',component:AboutComponent},
    {path:'notFound',component:NotfoundComponent}
];
