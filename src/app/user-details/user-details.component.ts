import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/User';
import { UserInfoService } from '../shared/services/user-info.service';
import { UserRepository } from '../models/UserRepository';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  showReposClicked: boolean;
  repositories: UserRepository[];
 @Input() user: User;
  constructor(private userInfoService: UserInfoService) { 
    this.showReposClicked = false;
  }

  ngOnInit() {
  }

  revertMoreDetailsFlag(user: User) {
    user.showMoreDetails = !user.showMoreDetails;
  }

  getReposByLogin(login: string) {
     this.showReposClicked = !this.showReposClicked;
     if (!this.repositories) {
     this.userInfoService.getUserRepositories(login).subscribe(response => this.repositories = response);
     }
  }
}
