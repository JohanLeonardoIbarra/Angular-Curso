import { Component } from "@angular/core";


@Component({
  selector: "app-contador",
  template: `
    <h1>{{ title + " " + (35 * 4) }}</h1>

    <h2>La base es: <strong> {{ base }} </strong> </h2>

    <button (click)=" acumular(base) " > +{{ base }} </button>
    <span> {{ numero }} </span>
    <button (click)=" acumular(-base) "> -{{ base }} </button>
  `
})
export class ContadorComponent{
  public title:string = 'contador app';
  public numero:number = 20;
  public base:number = 5;
  public acumular(valor:number){
    this.numero+=valor;
  }
}
