import { Component, OnInit, Input } from '@angular/core';
import { UserRepository } from '../models/UserRepository';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.scss']
})
export class UserReposComponent implements OnInit {

  @Input() repositories: UserRepository[];
  constructor() { }

  ngOnInit() {
  }

}
