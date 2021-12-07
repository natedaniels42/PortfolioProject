import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {
  techText: string = '';
  constructor() { }

  setText($event: any) {
    this.techText = $event.target.id;
  }

  ngOnInit(): void {
  }

}
