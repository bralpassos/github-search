import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';
import { LogoComponent } from 'src/app/components/logo/logo.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { UserInfoComponent } from 'src/app/components/user-info/user-info.component';
import { UserRepositoriesComponent } from 'src/app/components/user-repositories/user-repositories.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LoadingComponent } from 'src/app/components/loading/loading.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconComponent } from 'src/app/components/icon/icon.component';
import { SESSION_STORAGE } from 'angular-webstorage-service';
import { HttpClientModule } from '@angular/common/http';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: SESSION_STORAGE, useValue: {} },
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        LogoComponent,
        SearchComponent,
        UserInfoComponent,
        UserRepositoriesComponent,
        LoadingComponent,
        IconComponent,
        ResultComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
