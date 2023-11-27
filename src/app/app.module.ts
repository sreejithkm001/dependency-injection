import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeDetailsService } from './employee-details.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { OfficialDetailsComponent } from './official-details/official-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    OfficialDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EmployeeDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
