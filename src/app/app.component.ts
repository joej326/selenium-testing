import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  theText = 'old text';


  changeText(){
    this.theText = 'new text';
  }
}
