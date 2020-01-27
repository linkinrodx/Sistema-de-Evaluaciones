import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pointer-selection',
  templateUrl: './pointer-selection.component.html',
  styleUrls: ['./pointer-selection.component.css']
})
export class PointerSelectionComponent implements OnInit {

  selectedPointValue = 0;

  @Input()
  get selectedPoint() {
    return this.selectedPointValue;
  }
  @Output() selectedPointChange = new EventEmitter();
  set selectedPoint(val) {
    this.selectedPointValue = val;
    this.selectPoint(val);
  }


  @Input() maxPoints: number;

  listPoints = [];

  constructor() { }

  ngOnInit() {
    this.getPoints();
  }

  getPoints(){
    for (let index = 0; index < this.maxPoints; index++) {
      var point = {
        value : index + 1,
        width : 100 / this.maxPoints,
        selected: false
      };

      this.listPoints.push(point);      
    }
  }

  selectPoint(value : number){
    var point = this.listPoints.find(o=> o.value == value);

    if (point){
      this.listPoints.forEach(o=> o.selected = false);
      point.selected = true;
      this.selectedPointValue = point.value;
    }

    this.selectedPointChange.emit(this.selectedPointValue);
  }
  
}
