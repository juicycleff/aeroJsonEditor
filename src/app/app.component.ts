import { Component } from '@angular/core';
import { Content, JSONContent, TextContent } from 'vanilla-jsoneditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aeroJsonEditor';
  public jsonDataContent: Content;

  constructor() {

    this.jsonDataContent={
      json: {
        greeting: "Hello World",
        color: "#ff3e00",
        ok: true,
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
      },
      text: undefined
    };
   }

  changeJson(d:Content){
    console.log("from parent",d);
    let t =d as JSONContent;
    if (t.json){
      console.log("from parent json content",t.json);
    }else{
      let h = d as TextContent
      console.log("from parent text content",h.text);
    }
  }
  ngAfterViewInit(){

  }
}
