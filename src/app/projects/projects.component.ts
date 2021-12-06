import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  index: number = 1; 
  backDisplay: string = 'none;';
  forwardDisplay: string = 'contents;';
  constructor() { }
  
  showData($event: any){ 
    console.log("button is clicked!"); if($event) { 
       console.log($event.target); 
    } 
  } 

  increment($event: any) {
    console.log($event.target);
    if (this.index < 4) {
      this.index++;
      console.log(this.index);
      if (this.index === 4) {
        console.log('four');
        $event.target.style.display = 'none';
      }
    }
  }

  decrement($event: any) {
    if (this.index > 1) {
      this.index--;
      console.log(this.index);
      if (this.index === 1) {
        $event.target.style.display = 'none';
      }
    }
  }

  ngOnInit(): void {
  }

}
