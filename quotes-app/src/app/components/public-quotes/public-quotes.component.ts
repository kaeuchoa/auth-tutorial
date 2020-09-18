import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Quote } from '../../models/quote';
import { QuoteService } from '../../services/quote.service';

@Component({
    selector: 'app-public-quotes',
    templateUrl: './public-quotes.component.html',
    styleUrls: ['./public-quotes.component.scss']
})
export class PublicQuotesComponent implements OnInit, OnDestroy {

    quotesSub: Subscription;
    publicQuotes: Quote[];
    error: any;

    title: string = "O que eu gostaria que soubesse aos X anos de idade";
    subtitle: string = "Aqui está tudo que todos gostariam de saber quanto eles tinham x anos de idade. Se for um bom conselho, deixe seu voto positivo no botão. O número ao lado dele indica a idade em que o autor escreveu a mensagem. Sentiu que tem algo faltando? Adicione uma nova mensagem!";

    constructor(
        public quoteService: QuoteService,
        public authService: AuthService
    ) { }

    ngOnInit(): void {
        this.quotesSub = this.quoteService
            .getPublicQuotes()
            .subscribe(
                quotes => this.publicQuotes = quotes,
                err => this.error = err
            );
    }

    ngOnDestroy() {
        this.quotesSub.unsubscribe();
    }


}
