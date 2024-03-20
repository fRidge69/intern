import { Component, OnInit } from '@angular/core';
let selectedGuide: string|undefined;
let affil: string|undefined;
@Component({
  selector: 'box',
  templateUrl: './box.component.html',
  styleUrl: './box.component.css'
})
export class BoxComponent {
  number: number = 1;
  selectedDepartment: string | null = null;
  previousDepartment: string | null = null;
  nextDepartment: string | null = null;
  selectedGuide: string | null = null;
  previousGuide: string | null = null;
  nextGuide: string | null = null;
  affil: string ='Enter Affiliation';
  
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
  ]
  selectedGuides=[];
  externalCheckboxChecked: boolean = false;
  selectedOption: string = ''; 
  increment() {
    this.number++;
  }

  decrement() {
    this.number--;
  }
 
  updateFilteredGuides() {
    if(this.selectedDepartment==null){
      return this.guides
    }
if (this.externalCheckboxChecked) {
      return this.guides
    }

    return this.guides.filter(guide => guide.department === this.selectedDepartment);
  }


  get filteredGuides(): any[] {
    console.log("depart",this.selectedDepartment)
    this.affil=== this.selectedGuide;
    console.log(this.affil);
    if(this.selectedDepartment==null){
      return this.guides
    }
    if (this.externalCheckboxChecked) {
      this.affil=this.selectedDepartment;
      return this.guides
      
    }
    return this.guides.filter(guide => guide.department === this.selectedDepartment);
  }
  updatedaffil(){
    this.affil=this.selectedOption;
      console.log("selected",this.affil);
  }
    
  }
