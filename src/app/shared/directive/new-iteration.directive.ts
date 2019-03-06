import { Directive, Output, EventEmitter, Input, SimpleChange, OnInit} from '@angular/core';

@Directive({
  selector: '[appNewIteration]'
})
export class NewIterationDirective implements OnInit {

  @Output() appNewIteration: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {
     this.appNewIteration.emit('appNewIteration');
  }

}
