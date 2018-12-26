import { TestBed, inject, ComponentFixture } from '@angular/core/testing';
import { GithubService } from './github.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { GithubUser } from '../models/github-user.model';

describe('GithubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubService],
      imports: [
        HttpClientModule,
      ]
    });
  });

  it('should be created', inject([GithubService], (service: GithubService) => {
    expect(service).toBeDefined();
  }));
});
