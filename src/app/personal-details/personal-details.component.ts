// personal-details.component.ts

import { Component, OnInit } from '@angular/core';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
})
export class PersonalDetailsComponent implements OnInit {
  personalDetails: { label: string; value: any }[] = [];
  // DEPENDENCY INJECTION
  constructor(private employeeService: EmployeeDetailsService) {}

  ngOnInit() {
    const personalDetails = this.employeeService.getPersonalDetails();
    this.personalDetails = Object.keys(personalDetails).map((key) => ({
      label: key.charAt(0).toUpperCase() + key.slice(1),
      value: personalDetails[key],
    }));
  }
}
