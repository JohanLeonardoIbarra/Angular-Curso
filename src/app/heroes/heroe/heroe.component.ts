import { Component } from "@angular/core";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html"
})
export class HeroeComponent{
  nombre:string = "ironman";
  edad:number = 40;

  get nombreCapitalizado():string {
    return this.nombre.toUpperCase();
  }

  setNombre(nombre:string){
    this.nombre = nombre;
  }

  setEdad(edad:number){
    this.edad = edad;
  }

  obtenerNombre():string {
    return `${ this.nombre } - ${ this.edad }`;
  }
}
