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

  additionalInfoForCurrentUser: User;
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
    this.page = 0;
    this.per_page = 3;
    this.sort = 'login';
    this.order = 'asc';
    this.getUsersBySearchAndSortCriteria(this.searchQuery, this.page, this.per_page, this.sort, this.order);
  }

  getUsersBySearchAndSortCriteria(q: string, page: number, per_page: number, sort: string, order: string) {
    this.userInfoService.getUsersBySearchCriteria(q, page, per_page, sort, order).subscribe(
      response => {
        this.userSearchResponse = response;
        this.totalCount = this.userSearchResponse.total_count;
        // tslint:disable-next-line:forin
        for (let index in this.userSearchResponse.items) {
          let user: User;
          this.userInfoService.getUserByLoginId(this.userSearchResponse.items[index].login).
            subscribe(res => {
              user = res;
              this.userSearchResponse.items[index].name = user.name;
            });
        }
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
