import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {
  isActive = false;
  constructor() { }

  ngOnInit() {
  }

  activBtn() {
    if (this.isActive === true) {
      this.isActive = false
      console.log(this.isActive)

    }
    else {
      this.isActive = true;
      console.log(this.isActive)

    }
  }
}
