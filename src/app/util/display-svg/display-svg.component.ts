import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-svg',
  templateUrl: './display-svg.component.html',
  styleUrls: ['./display-svg.component.css']
})
export class DisplaySvgComponent implements OnInit {
  link: string = '';
  @Input() name!: string;

  constructor() { }

  ngOnInit(): void {
    this.link = `/assets/${this.name}.svg#${this.name}`;
  }

}
