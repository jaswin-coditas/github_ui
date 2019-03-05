import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserSearchResponse } from 'src/app/models/UserSearchResponse';
import { sprintf } from 'sprintf-js';
import { APIEndPoints } from 'src/APIEndpoints';
import { UserRepository } from 'src/app/models/UserRepository';
import { User } from 'src/app/models/User';
@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private httpClient: HttpClient) { }


  getUsersBySearchCriteria(q: string, page: number, per_page: number, sort: string, order: string) {
    return this.httpClient.get<UserSearchResponse>
      (sprintf(APIEndPoints.SEARCH_USER_API, q, page, per_page, sort, order));
  }

  getUserRepositories(user: string) {
    return this.httpClient.get<UserRepository[]>
      (sprintf(APIEndPoints.USER_REPO_LISTING_API, user));
  }

  getUserByLoginId(login: string) {
    return this.httpClient.get<User>
      (sprintf(APIEndPoints.GET_USER_BY_LOGIN_ID_API, login));
  }

}
