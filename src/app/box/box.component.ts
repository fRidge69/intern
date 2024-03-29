import { Component } from '@angular/core';

@Component({
  selector: 'box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
})
export class BoxComponent {
  number: number = 1;
  selectedDepartment: string | null = null;

  list: [number, any, any][] = [];
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
    { name: 'Arun Rahul S', department: 'Electrical Engineering' },
  ];

  externalCheckboxChecked: boolean = false;

  increment() {
    if (this.number < 3) {
      this.number++;
    }
    console.log('Increment - New Page Number:', this.number);
    console.log('Increment - Pushed Guide:', this.selectedGuide);
    console.log('List', this.list);

    const index = this.number;
    if (this.list[index]) {
      if (this.number === this.list[index][0]) {
        this.list[index][1] = this.selectedGuide;
        this.list[index][2] = this.selectedDepartment;
      }
    }

    this.updateAffiliation();
  }

  decrement() {
    if(this.number>1)
    this.number--;
    console.log('Increment - New Page Number:', this.number);
    console.log('Increment - Pushed Guide:', this.selectedGuide);
    console.log('List', this.list);

    const index = this.number;
    if (this.list[index]) {
      if (this.number === this.list[index][0]) {
        this.selectedGuide = this.list[index][1];
        this.selectedDepartment = this.list[index][2];
      }
    }
    this.updateAffiliation();
    this.updateFilteredGuides();
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
    const index = this.number - 1;
    this.list[index] = ([this.number, this.selectedGuide, this.selectedDepartment]);
  }

  updateFilteredGuides(): any[] {
    if (this.selectedDepartment == null) {
      return this.guides;
    }
    if (this.externalCheckboxChecked) {
      return this.guides;
    }
    return this.guides.filter(
      (guide) => guide.department === this.selectedDepartment
    );
  }

  get filteredGuides(): any[] {
    const filteredGuides = this.updateFilteredGuides();
    const guidesNotSelected = filteredGuides.filter((guide) => {
      const index = this.list.findIndex((item) => item[1].name === guide.name);
      return index === -1 || this.list[index][0] === this.number;
    });

    return guidesNotSelected;
  }

}
