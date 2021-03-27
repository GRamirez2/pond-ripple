import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cta-button',
  templateUrl: './cta-button.component.html',
  styleUrls: ['./cta-button.component.css']
})
export class CtaButtonComponent implements OnInit {

  @Input() cta:string;
  @Input() bgColor: string;
  buttonText:string;
  buttonColor: string

  constructor() { }

/**
 * cta is passed in to become buttonText or default is 'Call to Action
 */
  ngOnInit(): void {
    this.buttonText = this.cta ? this.cta : 'Call To Action'
    // this.buttonColor = this.bgColor? this.bgColor : 'red'
  }

}
