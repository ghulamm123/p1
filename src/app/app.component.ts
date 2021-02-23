import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';

  myName = "ghulam";

  name() {
    return this.myName;
  }


shame()

{
  return "life is all good "
}


  obj = {
    name: "ghulam lets go ",
    number: 5
  };

  siteURL = window.location.href;
  arr = ["ghulam", "mohammad", "dadabhoy"];
  a = 100;
  b = 300;




} // class
