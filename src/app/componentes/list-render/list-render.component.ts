import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animais = [
    {nome:"Larry", tipo:"cachorro"},
    {nome:"Miau", tipo:"gato"},
    {nome:"Anita", tipo:"cachorro"},
    {nome:"Litajara", tipo:"cavalo"},
    
  ]
}
