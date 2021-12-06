import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  index: number = 1;
  
  constructor() { }
  
  increment() {
    if (this.index < 4) {
      this.index++;
      console.log(this.index);
    }
  }

  decrement() {
    if (this.index > 1) {
      this.index--;
      console.log(this.index);
    }
  }

  ngOnInit(): void {
  }

}
