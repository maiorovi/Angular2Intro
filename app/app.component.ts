import {Component} from 'angular2/core'
import {CoursesComponent} from "./courses.component";
import {AuthorsComponents} from "./authors.component";

@Component({
    selector: 'my-app',
    template: '<h1>Hello Angular</h1><courses></courses><authors></authors>',
    directives: [CoursesComponent, AuthorsComponents]
})
export class AppComponent { }