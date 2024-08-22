import { Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EmpComponent } from './emp/emp.component';
import { EmpdetComponent } from './empdet/empdet.component';
import { Compo1Component } from './compo1/compo1.component';
import { DemoComponent } from './demo/demo.component';
import { ProductsComponent } from './products/products.component';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { RouteguardsComponent } from './routeguards/routeguards.component';
import { Service1Service } from './service1.service';
import { ObservablesComponent } from './observables/observables.component';
import { DeactivateserviceService } from './deactivateservice.service';
import { DeactivateComponent } from './deactivate/deactivate.component';
import { NgdestroyComponent } from './ngdestroy/ngdestroy.component';
export const routes: Routes = [
    {
        path:'',component:HeaderComponent
    },
    {
        path:'header',component:HeaderComponent
    },
    {
        path:'users',component:UsersComponent
    },
    {
        path:'about',component:AboutComponent
    },
    {
        path:'emp',component:EmpComponent,
        children :[
            {
                path:'demo',component:DemoComponent
            },
            {
                path:'empdet',component:EmpdetComponent
            }
        ]
       
    },
    {
        path:'empdet/:id/:name',component:EmpdetComponent
    },
    {
        path:'compo1',component:Compo1Component
    },
    {
        path:'demo/:id',component:DemoComponent
    },
    {
        path:'products',component:ProductsComponent
    },
    {
        path:'httpclient',component:HttpclientComponent
    },
    {
        path:'routeguards',component:RouteguardsComponent, canActivate:[Service1Service]
    },
    {
        path:'observables',component:ObservablesComponent
    },
    {
        path:'deactivate',component:DeactivateComponent,canDeactivate:[DeactivateserviceService]
    },
    {
        path:'ngdestroy',component:NgdestroyComponent
    },
    {
        path:'lazy',
        loadChildren:()=>import('./lazy/lazy.module').then((m)=>m.LazyModule)
    },
    {
        path:'**',component:NotfoundComponent
    }
];



