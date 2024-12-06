import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
//
import {ActivatedRoute} from '@angular/router';
import {HousingLocation} from '../housing-location';
import {HousingService} from '../services/housing.service';

@Component({
  selector: 'app-details',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  applyForm = new FormGroup(
    {
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
    }
  );

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    // asynchronously retrieve a single housing location by its id value.
    this.housingService.getHousingLocationById(housingLocationId)
                       .then((housingLocation: HousingLocation | undefined) => {
                           this.housingLocation = housingLocation;
                            });
  }

  submitApplication() {
    // alert('submit application');
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
