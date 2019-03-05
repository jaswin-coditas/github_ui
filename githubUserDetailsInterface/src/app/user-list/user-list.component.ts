import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UserInfoService } from '../shared/services/user-info.service';
import { User } from '../models/User';
import { UserSearchResponse } from '../models/UserSearchResponse';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnChanges {
  userSearchResponse: UserSearchResponse;
  constructor(private userInfoService: UserInfoService) {

  }

  currentUser: User;
  @Input()
  searchQuery: string;
  page: number;
  per_page: number;
  sort: string;
  order: string;
  totalCount: number;


  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searchQuery.previousValue !== changes.searchQuery.currentValue) {
      this.getSearchResults();
    }
  }

  getSearchResults() {
    if (this.searchQuery === '\s*') {
     this.searchQuery = undefined;
    }

    this.page = 0;
    this.per_page = 10;
    this.sort = 'login';
    this.order = 'asc';
    this.getUsersBySearchAndSortCriteria(this.searchQuery, this.page, this.per_page, this.sort, this.order);
  }

  getUsersBySearchAndSortCriteria(q: string, page: number, per_page: number, sort: string, order: string) {
    this.userInfoService.getUsersBySearchCriteria(q, page, per_page, sort, order).subscribe(
      response => {
        this.userSearchResponse = response;
        this.totalCount = this.userSearchResponse.total_count;
      }
    );

  }
  goToPage(n: number): void {
    this.page = n;
    this.getUsersBySearchAndSortCriteria(this.searchQuery, this.page, this.per_page, this.sort, this.order);
  }

  onNext(): void {
    this.page++;
    this.getUsersBySearchAndSortCriteria(this.searchQuery, this.page, this.per_page, this.sort, this.order);
  }

  onPrev(): void {
    this.page--;
    this.getUsersBySearchAndSortCriteria(this.searchQuery, this.page, this.per_page, this.sort, this.order);
  }
}
