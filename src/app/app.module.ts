import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {JsonEditorModule} from "../../projects/json-editor/src/lib/json-editor.module";

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
