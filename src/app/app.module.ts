import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JsonEditorModule } from 'jsonEditor';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JsonEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
