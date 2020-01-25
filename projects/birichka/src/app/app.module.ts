import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '@ti/shared/shared.module';
import { CoreModule, ENV_CONFIG } from '@ti/core';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule.forRoot(),
  ],
  providers: [
    {
      provide: ENV_CONFIG,
      useValue: environment,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
