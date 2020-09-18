import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicQuotesComponent } from './components/public-quotes/public-quotes.component';
import { PrivateQuotesComponent } from './components/private-quotes/private-quotes.component';
import { CallbackComponent } from './components/callback.component';
import { QuoteService } from './services/quote.service';


@NgModule({
    declarations: [
        AppComponent,
        PublicQuotesComponent,
        PrivateQuotesComponent,
        CallbackComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        QuoteService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
