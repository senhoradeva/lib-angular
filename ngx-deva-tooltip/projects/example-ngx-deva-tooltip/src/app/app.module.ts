import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDevaTooltipModule } from 'ngx-deva-tooltip';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxDevaTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
