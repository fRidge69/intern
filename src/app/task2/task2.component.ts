import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrl: './task2.component.css'
})
export class Task2Component {
  number: number = 1;
  selectedDepartment: string | null = null;
  previousDepartment: string | null = null;
  nextDepartment: string | null = null;
  selectedGuide: string | null = null;
  previousGuide: string | null = null;
  nextGuide: string | null = null;
  affil: string = 'Enter Affiliation';
  isVisible = false;

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

  ngOnInit() {
    console.log("External Checkbox: ",this.externalCheckboxChecked)
  }

  constructor(){
    console.log("External Checkbox: ",this.externalCheckboxChecked)
  }
  selectedGuides: any[] = [];
  externalCheckboxChecked: boolean = false;
  selectedOption: string = '';
  useTextboxes: boolean = true;

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

  
  


    return this.guides.filter(guide => guide.department === this.selectedDepartment);
  }

  get filteredGuides(): any[] {
    const filteredGuides = this.updateFilteredGuides();
    const guidesNotSelected = filteredGuides.filter(guide => !this.selectedGuides.includes(guide));
    return guidesNotSelected;
  }
  textbox() {
    console.log("hi",this.externalCheckboxChecked);
    if (this.externalCheckboxChecked)
      this.useTextboxes = true;
      this.isVisible = true;
 
  }

}