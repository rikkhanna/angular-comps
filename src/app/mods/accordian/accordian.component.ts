import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {

  accordianCurrentIndex = 0;
  @Input() accordianItems: [];
  constructor() { }

  ngOnInit(): void {
  }
  onClickChangeIndex(index: number){
    if(this.accordianCurrentIndex === index){
      this.accordianCurrentIndex = -1;
    }else{
      this.accordianCurrentIndex = index;
    }
  }

}
