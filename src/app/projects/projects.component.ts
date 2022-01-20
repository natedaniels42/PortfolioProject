import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  index: number = 1; 
  backDisplay: string = 'none';
  forwardDisplay: string = 'flex';
  projectDisplay: string[] = ['inline-block', 'inline-block', 'inline-block', 'none', 'none'];
  mobile: boolean = false;
  
  constructor() { }
  
  onResize(event: Event) {
    if ((event.target as Window).innerWidth <= 800) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }
  
  showData($event: any){ 
    console.log("button is clicked!"); if($event) { 
       console.log($event.target); 
    } 
  } 

  increment($event: any) {
    if (this.index < 4) {
      this.index++;
      console.log(this.index);
    }
  }

  decrement($event: any) {
    if (this.index > 1) {
      this.index--;
      console.log(this.index);
    }
  }

  ngOnInit(): void {
  }

}
