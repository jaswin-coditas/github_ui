import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'githubUserDetailsInterface';
  searchQuery: string;

  sortBy: string;

  constructor() {
    this.sortBy = 'joined';
  }
  setSortBy(sortBy: string) {
   this.sortBy = sortBy;
  }
}
