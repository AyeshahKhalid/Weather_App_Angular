import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StateUtils } from './state-utils';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    
  ],
  providers: [StateUtils],
  bootstrap: [AppComponent]
})
export class AppModule {} 