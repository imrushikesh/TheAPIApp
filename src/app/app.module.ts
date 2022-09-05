import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { HttpClientModule } from '@angular/common/http';
import { RandomJokeComponent } from './random-joke/random-joke.component';
import { RandomTaskComponent } from './random-task/random-task.component';
import { RandomApisComponent } from './random-apis/random-apis.component';
@NgModule({
  declarations: [
    AppComponent,
    RandomQuoteComponent,
    RandomJokeComponent,
    RandomTaskComponent,
    RandomApisComponent
  ],
  imports: [
    BrowserModule,  HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
