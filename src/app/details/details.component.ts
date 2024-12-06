import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {HousingLocation} from '../housing-location';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId: number = 0;

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
  }
}
