import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  attendanceForm: FormGroup;
  attendanceRecords: any[] = [];

  constructor(private fb: FormBuilder) {
    this.attendanceForm = this.fb.group({
      
      date: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Load initial data if needed
  }

  onSubmit() {
    if (this.attendanceForm.valid) {
      this.attendanceRecords.push(this.attendanceForm.value);
      this.attendanceForm.reset();
    }
  }
}
