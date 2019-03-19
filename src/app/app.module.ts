import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicStyleComponent } from './style/dynamic-style/dynamic-style.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicStyleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
