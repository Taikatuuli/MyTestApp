import { Component } from '@angular/core';

//Component need always contain ONE template. You can use style URL's or styles straight on the component.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 // styleUrls: ['./app.component.css']
styles: [`
    h2 {color:dodgerblue;
    }
`]
})
export class AppComponent {
}
