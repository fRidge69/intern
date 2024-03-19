import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'box',
  templateUrl: './box.component.html',
  styleUrl: './box.component.css'
})
export class BoxComponent implements OnInit{
  number: number = 1;
  selectedDepartment: string | null = null;
  previousDepartment: string | null = null;
  nextDepartment: string | null = null;
  selectedGuide: string | null = null;
  previousGuide: string | null = null;
  nextGuide: string | null = null;
  guides = [
    { name: 'Prof. Jagadeesh Bayry', department: 'dept-1' },
    { name: 'Dr. Abdul Rasheed P', department: 'dept-1' },
    { name: 'Debarati Chatterjee', department: 'dept-2' },
    { name: 'Dinesh Jagadeesan', department: 'dept-2' },
    { name: 'Ankesh Kumar', department: 'dept-3' },
    { name: 'Arun C O', department: 'dept-3' },
    { name: 'Albert Sunny', department: 'dept-4' },
    { name: 'Sandeep Chandran', department: 'dept-4' },
    { name: 'Koninika Pal', department: 'dept-5' },
    { name: 'Mrinal Kanti Das', department: 'dept-5' },
    { name: 'Anirudh Guha', department: 'dept-6' },
    { name: 'Arun Rahul S', department: 'dept-6' }

  ]
  filteredguides: any[]=[];
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
  ngOnInit(){
    this.filteredguides=this.guides.filter(
      guide=> {
        return (this.guides.department===this.selectedDepartment?this.guides.name)
      }
    )
  }
}
