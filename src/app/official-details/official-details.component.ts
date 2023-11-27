// official-details.component.ts
import { Component, OnInit } from '@angular/core';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'app-official-details',
  templateUrl: './official-details.component.html',
  styleUrls: ['./official-details.component.scss'],
})
export class OfficialDetailsComponent implements OnInit {
  officialDetails: { label: string; value: any }[] = [];
// DEPENDENCY INJECTION
  constructor(private employeeService: EmployeeDetailsService) {}

  ngOnInit() {
    const officialDetails = this.employeeService.getOfficialDetails();
    this.officialDetails = Object.keys(officialDetails).map((key) => ({
      label: key.charAt(0).toUpperCase() + key.slice(1),
      value: officialDetails[key],
    }));
  }
}
