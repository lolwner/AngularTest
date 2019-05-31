import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import {LicenseManager} from 'ag-grid-enterprise';
LicenseManager.setLicenseKey('Evaluation_License-_Not_For_Production_Valid_Until_31_July_2019__MTU2NDUyNzYwMDAwMA==b429d7445e3742359074b18c0a57dc7f');

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
