import { Component } from '@angular/core';

@Component({
  selector: 'box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
})
export class BoxComponent {
  number: number = 0;
  selectedDepartment: string | null = null;

  list: any[] = [];
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

  guideListTodisplay: any[] = [];

  externalCheckboxChecked: boolean = false;

  increment() {
    this.number++;
    if (this.number >= 3) {
      return;
    }
    const currentDep = {
      department: this.selectedDepartment,
      guide: this.selectedGuide,
      isExternal: this.externalCheckboxChecked,
    }
    
    this.list.push(currentDep);
    this.clearCurrentField();
  }

  submit() {
    const currentDep = {
      department: this.selectedDepartment,
      guide: this.selectedGuide,
      isExternal: this.externalCheckboxChecked,
    }
    this.list.push(currentDep);
  }

  decrement() {
    this.number--;
    if (this.number < 0) {
      return;
    }
    const backObj = this.list[this.number];
    if (backObj) {
      this.selectedDepartment = backObj.department;
      this.selectedGuide = backObj.guide;
      this.externalCheckboxChecked = backObj.isExternal;
      this.updateAffiliation();
    }

  }

  clearCurrentField() {
    this.selectedDepartment = '';
    this.selectedGuide = null;
    this.externalCheckboxChecked = false;
    this.affil = 'Enter Affiliation';
  }

  // decrement() {
  //   if (this.number > 1)
  //     this.number--;
  //   const index = this.number;
  //   if (this.list[index]) {
  //     if (this.number === this.list[index][0]) {
  //       this.selectedGuide = this.list[index][1];
  //       this.selectedDepartment = this.list[index][2];
  //     }
  //   }
  //   this.updateAffiliation();
  //   //this.updateFilteredGuides();
  // }

  updateAffiliation() {
    if (this.externalCheckboxChecked) {
      const selectedGuide = this.selectedGuide;
      this.affil = selectedGuide ? selectedGuide.department : '';
    } else {
      this.affil = 'Enter Affiliation';
    }
  }

  onGuideSelect() {
    if (this.externalCheckboxChecked && this.selectedGuide?.department) {
      this.affil = this.selectedGuide.department
    } else {
      this.affil = 'Enter Affiliation';
    }
  }

  updateFilteredGuides() {
    if (this.selectedDepartment) {
      this.guideListTodisplay = this.guides.filter(item => {
        return this.externalCheckboxChecked ? true : item.department === this.selectedDepartment;
      })
    }
    this.onGuideSelect()
  }

  // filteredGuides(): any[] {
  //   const filteredGuides = this.updateFilteredGuides();
  //   // const guidesNotSelected = filteredGuides.filter((guide) => {
  //   //   const index = this.list.findIndex((item) => item[1].name === guide.name);
  //   //   return index === -1 || this.list[index][0] === this.number;
  //   // });

  //   return [];
  // }

}
