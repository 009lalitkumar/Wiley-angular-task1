import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css'],
})
export class TwoWayBindingComponent implements OnInit {
  artifact: string = '';
  name: string = '';
  package: string = `com.example.${this.artifact}`;
  constructor() {}

  ngOnInit(): void {}

  packageChange() {
    this.package = `com.example.${this.artifact}`;
  }
}
