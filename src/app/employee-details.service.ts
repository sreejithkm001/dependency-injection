import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDetailsService {
  constructor() {}
  // PERSONAL DETAILS
  private personalDetails: { [key: string]: string | number } = {
    firstName: 'Sreejith',
    lastName: 'K M',
    age: 24,
    gender: 'Male',
  };
  // OFFICIAL DETAILS
  private officialDetails: { [key: string]: string | number } = {
    employeeId: 'E12345',
    department: 'AUREX',
    position: 'Associate Software Engineer',
  };

  getPersonalDetails() {
    return this.personalDetails;
  }

  getOfficialDetails() {
    return this.officialDetails;
  }
}
