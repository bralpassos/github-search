import { Component, OnInit, Inject } from '@angular/core';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {  }

  ngOnInit() {
    this.storage.remove("github_user");
    this.storage.remove("github_repositories");
  }

}
