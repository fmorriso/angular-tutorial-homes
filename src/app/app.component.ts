import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
//
import {HomeComponent} from './home/home.component';
import {AngularVersionInformationService} from './angular-version-information.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'homes';
  get angularVersion(): string {
    return this.ngVersion.versionFull;
  }
  constructor(public ngVersion: AngularVersionInformationService) {}
}
