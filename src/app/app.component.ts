import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  selected = 'BSSE';
  selectedSemester;
 programme = [
   {
     class: 'BSSE',
     id: '1',
   },
   {
    class: 'BSCS',
    id: '2',
  },
  {
    class: 'MCS',
    id: '3',
  },
 ];

 semesters = [];

 designations = ['Professor', 'Assistant Professor', 'lecturer'];

 days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
 semesterForTimeTable = [];

  constructor(
    private fb: FormBuilder
  ) { }

  createCourseForm = this.fb.group({
    courseTitle: ['', Validators.required],
    courseNumber: ['', Validators.required],
    programName: ['', Validators.required],
    semester: ['', Validators.required],
  });

  createTeacherForm = this.fb.group({
    name: ['', Validators.required],
    fatherName: ['', Validators.required],
    designation: ['', Validators.required],
    qualification: ['', Validators.required],
    contact: ['', Validators.required],
  });

  createTimeTableForm = this.fb.group({
    days: ['', Validators.required],
    shift: ['', Validators.required],
    Programme: ['', Validators.required],
    section: ['', Validators.required],
    semester: ['', Validators.required],
    timing: ['', Validators.required],
    courseCreditHours: ['', Validators.required],
    theoryTeacher: ['', Validators.required],
    labTeacher: ['', Validators.required],
    labTiming: ['', Validators.required],
  });
  // ngOnInit() {
  //   this.checkProgramme();
  // }

  checkProgramme() {
    if (this.selected === 'BSSE' || this.selected === 'BSCS') {
      this.semesters = [];
      this.semesters.push('1', '2', '3', '4', '5', '6', '7', '8');
    } else if (this.selected === 'MCS') {
      this.semesters = [];
      this.semesters.push('1', '2', '3', '4');
    }
   }
   submitCreateCourse() {
   console.log( this.createCourseForm.value);
   this.createCourseForm.reset();
   }
   submitCreateTeacher() {
    console.log( this.createTeacherForm.value);
    this.createTeacherForm.reset();
    }
    checkProgrammeForTimeTable() {
      if (this.selected === 'BSSE' || this.selected === 'BSCS') {
        this.semesterForTimeTable = [];
        this.semesterForTimeTable.push('1', '2', '3', '4', '5', '6', '7', '8');
      } else if (this.selected === 'MCS') {
        this.semesterForTimeTable = [];
        this.semesterForTimeTable.push('1', '2', '3', '4');
      }
    }
    submitCreateTimeTable() {
      console.log( this.createTimeTableForm.value);
      this.createTimeTableForm.reset();
      }
}
