import { Component } from '@angular/core';

@Component ({
  selector: 'app-post4',
  template: `
    <div class="post4">
        <h2>Post 4 title</h2>
        <p>
        The app will automatically reload if you change any of the source files.

        </p>
    </div>
  ` ,
    styles: [`
       .post4 {
           padding: .5rem;
           border: 1px solid black;
       } 
       h2 {
         font-size: 1rem;  
       }
    `]
})

export class Post4Component {

}
