import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Content, JSONContent, JSONEditor, JSONValue, OnChangeStatus, TextContent } from "vanilla-jsoneditor";

@Component({
  selector: 'aero-jsonEditor',
  template: `
    <div className="svelte-jsoneditor-react" #jsonEditor></div>
  `,
  styles: [
  ]
})
export class JsonEditorComponent implements OnInit {
  private editorRef: JSONEditor;
  private _jsonData: Content
  @Input('jsonData')
  set jsonData(value: Content) {
    this._jsonData = value;
    if (this.editorRef) {
      this.editorRef.destroy();
      this.ngOnInit();
    }
  }; 
  @Input() readOnly: boolean=false; 
  @Input() debug = false;
  @Output() changeContent:EventEmitter<Content> = new EventEmitter<Content>();
  @Output() changeText:EventEmitter<Content> = new EventEmitter<Content>();
  @ViewChild('jsonEditor') editor: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit():void{
    this.editorRef= new JSONEditor({
      target: this.editor.nativeElement,
      props: {content:this._jsonData,readOnly:this.readOnly,onChange:(e)=>this.emitChange(e,this)}
    }); 
  }
  emitChange(d:any, x:any){
    try {
      if (this.debug) {
        console.log(d);
      }
      if (this.changeContent){
        x.changeContent.emit(d);
      }
      let t =d as JSONContent;
      if (t.json){
        if (this.debug) {
          console.log(t.json);
        }
        x.changeText.emit(JSON.stringify(t.json))
      }else{
        let h = d as TextContent
        if (this.debug) {
          console.log(h.text);
        }
        x.changeText.emit(h.text)
      }      

    }catch (e) {
      if (this.debug) {
        console.log(e);
      }
    }
    
  }

  public expandAll() {
    this.editorRef.expand();
  }
  public get(): Content {
    return this.editorRef.get();
  }
  public getText(): string {
    let d = this.editorRef.get()
    let returnText :string;
    let t =d as JSONContent;
      if (t.json){
        if (this.debug) {
          console.log(t.json);
        }
        returnText=JSON.stringify(t.json);
      }else{
        let h = d as TextContent
        if (this.debug) {
          console.log(h.text);
        }
        returnText=h.text;
      }      
    return returnText;
  }
  ngOnDestroy() {
    this.destroy();
  }
  public isValidJson() {
    try {
      JSON.parse(this.getText());
      return true;
    } catch (e) {
      return false;
    }
  }
  public destroy() {
    this.editorRef?.destroy();
  }
}
