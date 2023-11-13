import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  
  mostrar: boolean=false;
  //constructor(){}

  //ngOnInit(): void { }

  mostraMensagem(): void {
    this.mostrar = !this.mostrar; //toggle
  }
}


