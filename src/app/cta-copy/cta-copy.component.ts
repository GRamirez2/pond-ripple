import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cta-copy',
  templateUrl: './cta-copy.component.html',
  styleUrls: ['./cta-copy.component.css']
})
export class CtaCopyComponent implements OnInit {

  @Input() copy: string;
  constructor() { }

  ngOnInit(): void {
  }

}
