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
  showSubmit = false;


  currentIndex = 0;

  increment() {

    const nextNumber = this.number + 1;
    if (nextNumber >= 4) {
      this.checkForSubmit();
      return;
    }
    // this.number++;
    const backObj = this.list[this.number];
    if (backObj) {
      this.selectedDepartment = backObj.department;
      this.updateFilteredGuides();
      this.selectedGuide = this.guideListTodisplay.find(item => {
        return item.name === backObj.guide.name && item.department === backObj.guide.department;
      });
      this.externalCheckboxChecked = backObj.isExternal;
      this.updateAffiliation();
    } else {
      const currentDep = {
        department: this.selectedDepartment,
        guide: this.selectedGuide,
        isExternal: this.externalCheckboxChecked,
      }

      this.list.push(currentDep);
      if (nextNumber != 3) {
        this.showSubmit = true;
        this.clearCurrentField();
      }
      this.checkForSubmit();
    }

    if (nextNumber === 3) {
      return;
    }

    this.number++;
  }

  submit() {
    // const currentDep = {
    //   department: this.selectedDepartment,
    //   guide: this.selectedGuide,
    //   isExternal: this.externalCheckboxChecked,
    // }
    // this.list.push(currentDep);
  }

  checkForSubmit() {
    this.showSubmit = this.number >= 2 && this.list.length === 3;
  }

  decrement() {
    const previousNumber = this.number - 1;
    this.checkForSubmit();
    if (previousNumber < 0) {
      // this.checkForSubmit();
      return;
    }
    const backObj = this.list[previousNumber];
    if (backObj) {
      this.selectedDepartment = backObj.department;
      this.updateFilteredGuides();
      this.selectedGuide = this.guideListTodisplay.find(item => {
        return item.name === backObj.guide.name && item.department === backObj.guide.department;
      });
      this.externalCheckboxChecked = backObj.isExternal;
      this.updateAffiliation();
    }
    if (previousNumber < 0) {
      return;
    }
    this.number--;
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
    let excludedItems:any[] = [];
    for(let i=0; i<this.list.length; i++ ){
      if(i !== this.number){
        excludedItems.push(this.list[i].guide.name);
      }
    }
    const departMentListexclude = []
    if (this.selectedDepartment) {
      this.guideListTodisplay = this.guides.filter(item => {
        return this.externalCheckboxChecked ? excludedItems.indexOf( item.name) == -1 : item.department === this.selectedDepartment && excludedItems.indexOf( item.name) == -1;
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


  // next() {
  //   this.showSubmit =  false;
  //   if ((this.currentIndex + 1) < 3) {
  //     const backObj = this.list[this.currentIndex];
  //     if (backObj) {
  //       this.selectedDepartment = backObj.department;
  //       this.updateFilteredGuides();
  //       this.selectedGuide = this.guideListTodisplay.find(item => {
  //         return item.name === backObj.guide.name && item.department === backObj.guide.department;
  //       });
  //       this.externalCheckboxChecked = backObj.isExternal;
  //       this.updateAffiliation();
  //     } else {
  //       const currentDep = {
  //         department: this.selectedDepartment,
  //         guide: this.selectedGuide,
  //         isExternal: this.externalCheckboxChecked,
  //       }
  //       this.list.push(currentDep);
  //     }
  //     this.currentIndex++;
  //   }else{
  //     this.showSubmit =  true;
  //   }
  // }

}
