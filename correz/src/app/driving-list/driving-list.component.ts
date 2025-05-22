import { Component, Input } from '@angular/core';
import { Mezzi } from '../Models/driving.model';

@Component({
  selector: 'app-driving-list',
  standalone: true,
  imports: [],
  templateUrl: './driving-list.component.html',
  styleUrl: './driving-list.component.css'
})
export class DrivingListComponent {
  @Input() mezz! : Mezzi
}
