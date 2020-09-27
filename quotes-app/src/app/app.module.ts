import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicQuotesComponent } from './components/public-quotes/public-quotes.component';
import { PrivateQuotesComponent } from './components/private-quotes/private-quotes.component';
import { CallbackComponent } from './components/callback.component';
import { QuoteService } from './services/quote.service';
import { AuthService } from './services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';


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
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [
        QuoteService,
        AuthService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
