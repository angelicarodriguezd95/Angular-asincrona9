import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
  
  constructor() { }

  ngOnInit(): void {
  }
  numero1=0
  numero2=0
  seleccionado = ""
  lista = ["suma","resta","multiplicacion","division"]

}
