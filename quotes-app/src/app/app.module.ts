import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicQuotesComponent } from './components/public-quotes/public-quotes.component';
import { PrivateQuotesComponent } from './components/private-quotes/private-quotes.component';
import { CallbackComponent } from './components/callback.component';

@NgModule({
    declarations: [
        AppComponent,
        PublicQuotesComponent,
        PrivateQuotesComponent,
        CallbackComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
