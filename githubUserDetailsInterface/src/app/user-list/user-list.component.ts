import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../shared/services/user-info.service';
import { User } from '../models/User';
import { UserSearchResponse } from '../models/UserSearchResponse';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userSearchResponse: UserSearchResponse;
  constructor(private userInfoService: UserInfoService) { }

  currentUser: User;
  searchQuery: string;
  page: string;
  per_page: string;
  sort: string;
  order: string;

  ngOnInit() {
  }

  getSearchResults() {

    this.page = '0';
    this.per_page = '10';
    this.sort = 'login';
    this.order = 'asc';
    this.getUsersBySearchAndSortCriteria(this.searchQuery, this.page, this.per_page, this.sort, this.order);
  }

  getUsersBySearchAndSortCriteria(q: string, page: string, per_page: string, sort: string, order: string) {
    this.userInfoService.getUsersBySearchCriteria(q, page, per_page, sort, order).subscribe(
      response => {
        this.userSearchResponse = response;
      }
    );

  }
}
