import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { QuoteShufflerService } from '../quote-shuffler.service';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';

interface quoteDataType {
  author? : string,
  authorSlug? : string,
  content? : string,
  dateAdded? : string,
  dateModified? : string,
  length? : number,
  tags? : object[],
  _id ?: string,
}

@Component({
  selector: 'app-quote-shuffler',
  templateUrl: './quote-shuffler.component.html',
  styleUrls: ['./quote-shuffler.component.scss'],
  standalone : true,
  providers : [QuoteShufflerService],
  imports : [CommonModule, HttpClientModule, MatButtonModule, MatRippleModule, MatIconModule],
})


export class QuoteShufflerComponent implements OnInit {
  quoteData: quoteDataType = [];
  isQuoteLoading : boolean = true;
  constructor(
    private _QuoteShufflerService :QuoteShufflerService
  ){
   
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.isQuoteLoading = true;
    this._QuoteShufflerService.quoteShuffle().then((res)=>{
      this.quoteData = res as quoteDataType;
      this.isQuoteLoading = false;
    })
  }
}
