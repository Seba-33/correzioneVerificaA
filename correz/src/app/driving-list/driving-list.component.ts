import { Component, Input } from '@angular/core';
import { Mezzi } from '../Models/driving.model';
import { RentModel } from '../Models/rent.model';

@Component({
  selector: 'app-driving-list',
  standalone: true,
  imports: [],
  templateUrl: './driving-list.component.html',
  styleUrl: './driving-list.component.css'
})
export class DrivingListComponent {
  @Input() mezz! : Mezzi
  @Input() nol! : RentModel[]

  noleggia(nGiorni: HTMLInputElement){
    console.log(" Tipo: " + this.mezz.tipo + " Descrizione: " + this.mezz.descrizione + " Tariffa: " + this.mezz.tariffa + " ValutazioneMedia: " + this.mezz.valutazionemedia + " Noleggi: " + nGiorni.value)
    this.nol.push(new RentModel(this.mezz.tipo, this.mezz.descrizione, this.mezz.tariffa, this.mezz.valutazionemedia, nGiorni.value))
    console.log(this.nol)
  }
}
