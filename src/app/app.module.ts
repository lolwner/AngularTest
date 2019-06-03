import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ApiConfiguration } from './core/api-confuguration';

import { YoutubeService } from './core/services/youtube.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponentComponent } from './grid-component/grid-component.component';
import { CustomToolbarComponent } from './custom-toolbar/custom-toolbar.component';
import { environment } from 'src/environments/environment.prod';
import { CustomHeaderComponent } from './custom-header/custom-header.component';

export function initConfiguration(appConfig: ApiConfiguration): Function {
  return () => {
    appConfig.youtubeEndpoint = environment.youtubeEndPoint;
  };
}

@NgModule({
  declarations: [
    AppComponent,
    GridComponentComponent,
    CustomToolbarComponent,
    CustomHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule.withComponents(
      [CustomToolbarComponent, CustomHeaderComponent]
    )
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
