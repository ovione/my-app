import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-svg',
  templateUrl: './display-svg.component.html',
  styleUrls: ['./display-svg.component.css']
})
export class DisplaySvgComponent implements OnInit {
  @Input() name!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
