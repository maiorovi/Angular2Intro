import {AuthorService} from "./author.service";
import {Component} from "angular2/core";


@Component({
    selector: 'authors',
    template: `<h2>{{title}}</h2>
        <ul>
            <li *ngFor="#author of authors">
                {{author}}          
            </li>
        </ul>
    `,
    providers: [AuthorService]
})
export class AuthorsComponents {
    title = "Authors"
    authors;

    constructor(authorService: AuthorService) {
        this.authors = authorService.getAuthors()
    }
}