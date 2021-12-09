import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  source: string = '';
  view: boolean = false;
  index: number = 0;
  active: boolean = false;
  constructor() { }

  setSource(event: Event) {
    if (!this.active) {
      this.source = (event.target as HTMLImageElement).src;
      this.view = true;
      this.active = true;
  
      const timer = setInterval(() => {
        this.index++;
        console.log(this.index);
        if (this.index === 5) {
          this.view = false;
          clearInterval(timer);
          this.index = 0;
          this.active = false;
        }
      }, 1000)
    }
  }

  ngOnInit(): void {
  }

}
