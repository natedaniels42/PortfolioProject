import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  index: number = 1; 
  backDisplay: string = 'none';
  forwardDisplay: string = 'flex';
  projectDisplay: string[] = ['inline-block', 'inline-block', 'inline-block', 'none', 'none'];

  constructor() { }
  
  showData($event: any){ 
    console.log("button is clicked!"); if($event) { 
       console.log($event.target); 
    } 
  } 

  updateProjectCards() {
    this.projectDisplay = this.projectDisplay.map((project, i) => i >= this.index - 1 && i <= this.index + 1 ? 'inline-block' : 'none');
  }

  increment($event: any) {
    console.log($event.target);
    if (this.index === 1) {
      this.backDisplay = 'flex';
    }
    if (this.index < 3) {
      this.index++;
      console.log(this.index);
      if (this.index === 3) {
        this.forwardDisplay = 'none';
      }
      this.updateProjectCards();
    }
  }

  decrement($event: any) {
    if (this.index === 3) {
      this.forwardDisplay = 'flex';
    }
    if (this.index > 1) {
      this.index--;
      console.log(this.index);
      if (this.index === 1) {
        this.backDisplay = 'none';
      }
      this.updateProjectCards();
    }
  }

  ngOnInit(): void {
  }

}
