# JsonEditor

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.
This library is a simple wrap of the library  (https://www.npmjs.com/package/svelte-jsoneditor)
You can tested online at (https://jsoneditoronline.org/)

## How to

On your app module import:

    import { JsonEditorModule } from 'ng-svelt-json-editor';
    ...
     imports: [
        ....
        JsonEditorModule
    ],

On your html view component:

    <aero-jsonEditor [jsonData]="jsonDataContent"
    [readOnly]=false
    (changeContent)="changeJson($event)"></aero-jsonEditor>

On your component
    
    import { Content, JSONContent, TextContent } from 'vanilla-jsoneditor';
    ...
     public jsonDataContent: Content;
    ...
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
    ...
    changeJson(d:Content){
        console.log("log event",d);
        let t =d as JSONContent;
        if (t.json){
        console.log("json content",t.json);
        }else{
        let h = d as TextContent
        console.log("text content",h.text);
        }
    }

You can handle othe event like changeText, but be ware to handle the JSON.

## Code scaffolding

Run `ng generate component component-name --project jsonEditor` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project jsonEditor`.
> Note: Don't forget to add `--project jsonEditor` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build jsonEditor` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build jsonEditor`, go to the dist folder `cd dist/json-editor` and run `npm publish`.

## Running unit tests

Run `ng test jsonEditor` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
