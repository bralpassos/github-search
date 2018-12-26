import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { GithubUser } from '../models/github-user.model';
import { GithubStoreService } from './githubStore.service';

describe('GithubStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubStoreService],
      imports: [
        HttpClientModule,
      ]
    });
  });

  it('should save and restore github user', inject([GithubStoreService], (service: GithubStoreService) => {
    const user: GithubUser = {
      login: "faketest",
      name: "Fake Test",
      company: "ACME",
      location: "São Paulo",
      followers: "15"
    };

    let githubStoreService = new GithubStoreService();
    githubStoreService.saveUser(user);

    const result = githubStoreService.getUser();

    expect(result.login).toBe("faketest");
  }));
});
