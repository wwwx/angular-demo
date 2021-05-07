import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
 
animations: [
  trigger('stateAnimation', [
    state('opened', style({transform: 'translateY(0%)', opacity: 1})),
    state('void, closed', style({transform: 'translateY(100%)', opacity: 0})),
    transition('* => *', [animate('.3s ease-in-out')])
  ])
] 
})
export class PopupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isOpen = false
  toggle() {
    // console.log(this.isOpen)
    this.isOpen = !this.isOpen
  }

}
