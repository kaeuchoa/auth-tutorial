import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbackComponent } from './components/callback.component';
import { PrivateQuotesComponent } from './components/private-quotes/private-quotes.component';
import { PublicQuotesComponent } from './components/public-quotes/public-quotes.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'quotes',
        pathMatch: 'full'
    },
    {
        path: 'quotes',
        component: PublicQuotesComponent
    },
    {
        path: 'special',
        component: PrivateQuotesComponent,
        canActivate: [
            AuthGuard
        ]
    },
    {
        path: 'callback',
        component: CallbackComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
