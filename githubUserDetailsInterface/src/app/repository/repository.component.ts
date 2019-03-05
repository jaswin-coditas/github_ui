import { Component, OnInit, Input } from '@angular/core';
import { UserRepository } from '../models/UserRepository';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {

 @Input() repository: UserRepository;

  constructor() { }

  ngOnInit() {
  }

}
