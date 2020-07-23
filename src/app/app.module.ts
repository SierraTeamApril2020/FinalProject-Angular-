import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProvideFeedbackComponent } from './provide-feedback/provide-feedback.component';
import { ViewPerformanceComponent } from './view-performance/view-performance.component';
import { HttpClientModule } from '@angular/common/http';
import { TrainingModuleComponent } from './training-module/training-module.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SeePerformanceComponent } from './see-performance/see-performance.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProvideFeedbackComponent,
    ViewPerformanceComponent,
    TrainingModuleComponent,
    SeePerformanceComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
