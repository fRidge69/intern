import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
  number: number = 1;
  selectedDepartment: string | null = null;
  previousDepartment: string | null = null;
  nextDepartment: string | null = null;
  selectedGuide: any = null;
  previousGuide: any = null;
  nextGuide: any = null;

  affil: string = 'Enter Affiliation';

  guides = [
    { name: 'Prof. Jagadeesh Bayry', department: 'Biological Sciences and Engineering' },
    { name: 'Dr. Abdul Rasheed P', department: 'Biological Sciences and Engineering' },
    { name: 'Debarati Chatterjee', department: 'Chemistry' },
    { name: 'Dinesh Jagadeesan', department: 'Chemistry' },
    { name: 'Ankesh Kumar', department: 'Civil Engineering' },
    { name: 'Arun C O', department: 'Civil Engineering' },
    { name: 'Albert Sunny', department: 'Computer Science & Engineering' },
    { name: 'Sandeep Chandran', department: 'Computer Science & Engineering' },
    { name: 'Koninika Pal', department: 'Data Science' },
    { name: 'Mrinal Kanti Das', department: 'Data Science' },
    { name: 'Anirudh Guha', department: 'Electrical Engineering' },
    { name: 'Arun Rahul S', department: 'Electrical Engineering' }
  ];

  selectedGuides: any[] = [];
  externalCheckboxChecked: boolean = false;
  selectedOption: string = '';

  increment() {
    this.number++;
    this.selectedGuides.push(this.selectedGuide);
  }

  decrement() {
    this.number--;
    this.selectedGuides.pop();
  }

  updateFilteredGuides() {
    if (this.selectedDepartment == null) {
      return this.guides;
    }

    if (this.externalCheckboxChecked) {
      return this.guides;
    }

    return this.guides.filter(guide => guide.department === this.selectedDepartment);
  }

  get filteredGuides(): any[] {
    const filteredGuides = this.updateFilteredGuides();
    const guidesNotSelected = filteredGuides.filter(guide => !this.selectedGuides.includes(guide));
    return guidesNotSelected;
  }

  updateAffiliation() {
    console.log(this.externalCheckboxChecked);
    if (this.externalCheckboxChecked) {
      const selectedGuide = this.selectedGuide;
      this.affil = selectedGuide ? selectedGuide.department : '';
      
    } 
    else {
      this.affil = 'Enter Affiliation';
    }
  }

  onGuideSelect(guide: any) {
    console.log("sg", this.selectedGuide);
    console.log("sgs");
    this.updateAffiliation();
  }
}