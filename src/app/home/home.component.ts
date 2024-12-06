import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
//
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {HousingLocation} from '../housing-location';
import {HousingService} from '../services/housing.service';

//
@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];

  constructor() {
    this.housingService.getAllHousingLocations()
                       .then((housingLocationList: HousingLocation[]) => {
                          this.housingLocationList = housingLocationList;
                          this.filteredLocationList = housingLocationList;
                       })
  }

  filterResults(text: string) {
    // protect against null/undefined/empty text being passed in.
    if(!text) this.filteredLocationList = this.housingLocationList;

    this.filteredLocationList = this.filteredLocationList.filter((housingLocation: HousingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()));
  }
}
