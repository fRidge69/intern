import { Component } from '@angular/core';

@Component({
  selector: 'box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
  number: number = 1;
  selectedDepartment: string | null = null;
  guideSelected: any[] = [];
  selectedGuide: any = null;
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

  externalCheckboxChecked: boolean = false;

  increment() {
    this.number++;
    this.guideSelected.push(this.selectedGuide);
  }

  decrement() {
    this.number--;
    this.selectedGuide = this.guideSelected.pop();
    this.updateAffiliation();
  }

  updateAffiliation() {
    if (this.externalCheckboxChecked) {
      const selectedGuide = this.selectedGuide;
      this.affil = selectedGuide ? selectedGuide.department : '';
    } else {
      this.affil = 'Enter Affiliation';
    }
  }

  onGuideSelect(guide: any) {
    this.selectedGuide = guide;
    this.updateAffiliation();
  }

  updateFilteredGuides(): any[] {
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
    const guidesNotSelected = filteredGuides.filter(guide => !this.guideSelected.includes(guide));
    return guidesNotSelected;
  }
}
