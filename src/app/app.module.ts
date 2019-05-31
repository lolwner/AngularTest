import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ApiConfiguration } from './core/api-confuguration';

import { YoutubeService } from './core/services/youtube.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponentComponent } from './grid-component/grid-component.component';
import { CustomComponentComponent } from './custom-toolbar/custom-component.component';
import { environment } from 'src/environments/environment.prod';

export function initConfiguration(appConfig: ApiConfiguration): Function {
  return () => {
    appConfig.youtubeEndpoint = environment.youtubeEndPoint;
  };
}

@NgModule({
  declarations: [
    AppComponent,
    GridComponentComponent,
    CustomComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule.withComponents(
      [CustomComponentComponent]
    )
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
