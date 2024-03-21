import { Component } from '@angular/core';

@Component({
  selector: 'task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {
  number: number = 1;
  selectedDepartment: string | null = null;
  previousDepartment: string | null = null;
  nextDepartment: string | null = null;
  guideSelected: any[] = [];
  selectedGuide: string | null = null;
  previousGuide: string | null = null;
  nextGuide: string | null = null;
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
  useTextboxes: boolean = true;

  increment() {
    this.number++;
    this.selectedGuides.push(this.selectedGuide);
    this.guideSelected.push(this.selectedGuide);
  }

  decrement() {
    this.number--;
    this.selectedGuides.pop();
    this.selectedGuide = this.guideSelected.pop();
    
    this.updateFilteredGuides();
  }
  onGuideSelect(guide: any) {
    this.selectedGuide = guide;

  }

  updateFilteredGuides() {
    if (this.selectedDepartment == null) {
      return this.guides;
    }

    if (this.externalCheckboxChecked) {
      this.useTextboxes = this.externalCheckboxChecked;
      console.log(this.externalCheckboxChecked);
      return this.guides;
    }

    return this.guides.filter(guide => guide.department === this.selectedDepartment);
  }

  get filteredGuides(): any[] {
    const filteredGuides = this.updateFilteredGuides();
    const guidesNotSelected = filteredGuides.filter(guide => !this.guideSelected.includes(guide));
    return guidesNotSelected;
  }
  update() {
    if (this.externalCheckboxChecked)
      this.useTextboxes = false;
    else
      this.useTextboxes = true;
  }

}
