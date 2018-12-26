import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultComponent } from './result.component';
import { RouterTestingModule } from '@angular/router/testing';
import { GithubStoreService } from 'src/app/services/githubStore.service';
import { LogoComponent } from 'src/app/components/logo/logo.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { UserInfoComponent } from 'src/app/components/user-info/user-info.component';
import { UserRepositoriesComponent } from 'src/app/components/user-repositories/user-repositories.component';
import { LoadingComponent } from 'src/app/components/loading/loading.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconComponent } from 'src/app/components/icon/icon.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubUser } from 'src/app/models/github-user.model';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;
  let service = new GithubStoreService();
  let mockUser = new GithubUser();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        LoadingComponent,
        IconComponent,
        LogoComponent,
        SearchComponent,
        UserInfoComponent,
        UserRepositoriesComponent,
        ResultComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    mockUser.name = "Test User";
    mockUser.location = "São Paulo";
    mockUser.company = "ACME";

    let navigateSpy = spyOn(service, 'getUser');

    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it.skip('should redirect to home if username is undefined', () => {
    let navigateSpy = spyOn((<any>component).router, 'navigate');
    component.ngOnInit();
    expect(navigateSpy).toHaveBeenCalledWith(['/']);
  });
});
