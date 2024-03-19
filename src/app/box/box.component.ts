import { Component } from '@angular/core';

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
  selectedGuide: string | null = null;
  previousGuide: string | null = null;
  nextGuide: string | null = null;

  guides = [
    { name: 'Prof. Jagadeesh Bayry', department: 'Biological Sciences and Engineering' },
    { name: 'Dr. Abdul Rasheed P', department: 'Biological Sciences and Engineering' },
    { name: 'Debarati Chatterjee', department: 'Chemistry' },
    { name: 'Dinesh Jagadeesan', department: 'Chemistry' },
    { name: 'Ankesh Kumar', department: 'Civil Engineering' },
    { name: 'Arun C O', department: 'Civil Engineering' },
    { name: 'Albert Sunny', department: 'dept-4' },
    { name: 'Sandeep Chandran', department: 'dept-4' },
    { name: 'Koninika Pal', department: 'dept-5' },
    { name: 'Mrinal Kanti Das', department: 'dept-5' },
    { name: 'Anirudh Guha', department: 'dept-6' },
    { name: 'Arun Rahul S', department: 'dept-6' }
  ];
  externalCheckboxChecked: boolean = false;

  increment() {
    this.previousDepartment = this.selectedDepartment;
    this.previousGuide = this.selectedGuide;
    this.selectedDepartment = this.nextDepartment;
    this.selectedGuide = this.nextGuide;
    this.nextDepartment = null;
    this.nextGuide = null;
    this.number++;
  }

  decrement() {
    this.nextDepartment = this.selectedDepartment;
    this.nextGuide = this.selectedGuide;
    this.selectedDepartment = this.previousDepartment;
    this.selectedGuide = this.previousGuide;
    this.previousDepartment = null;
    this.previousGuide = null;
    this.number--;
  }

  updateFilteredGuides() {
    if(this.selectedDepartment==null){
      return this.guides
    }


    return this.guides.filter(guide => guide.department === this.selectedDepartment);
  }


  get filteredGuides(): any[] {
    console.log("depart",this.selectedDepartment)
    if(this.selectedDepartment==null){
      return this.guides
    }
    if (this.externalCheckboxChecked) {
      return this.guides
    }
    return this.guides.filter(guide => guide.department === this.selectedDepartment);
  }
}
