import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { timeStamp } from 'console';
import { Subscription } from 'rxjs';
import { Quote } from 'src/app/models/quote';
import { AuthService } from 'src/app/services/auth.service';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
    selector: 'app-private-quotes',
    templateUrl: './private-quotes.component.html',
    styleUrls: ['./private-quotes.component.scss']
})
export class PrivateQuotesComponent implements OnInit, OnDestroy {

    quotesSub: Subscription;
    privateQuotes: Quote[];
    ages = Array(85 - 13 + 1).fill().map((_, idx) => 13 + idx);
    error: any;
    showForm: boolean = false;
    title = 'Esse é o seu perfil';
    subtitle = 'Adicione seus conselhos aqui';
    
    addQuoteTxt = 'Novo conselho';
    hideFormTxt = 'Cancelar';
    btnText : string;
    

    constructor(
        public quoteService: QuoteService,
        public authService: AuthService
    ) { }

    ngOnInit(): void {
        this.quotesSub = this.quoteService
            .getPublicQuotes()
            .subscribe(
                quotes => this.privateQuotes = quotes,
                err => this.error = err
            );
            
        this.btnText = this.addQuoteTxt;
    }
    
    ngOnDestroy() {
        this.quotesSub.unsubscribe();
    }

    toggleQuoteForm() {
        this.showForm = !this.showForm;
        this.btnText = this.showForm ? this.hideFormTxt : this.addQuoteTxt;
        
    }
}
