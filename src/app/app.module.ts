import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { QuoteShufflerComponent } from "./quote-shuffler/quote-shuffler/quote-shuffler.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuotesListComponent } from './quotes-list/quotes-list.component';

@NgModule({
    declarations: [
        AppComponent,
        QuotesListComponent,
    ],
    schemas: [],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        QuoteShufflerComponent,
        BrowserAnimationsModule
    ]
})
export class AppModule { }
