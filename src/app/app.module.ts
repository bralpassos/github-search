import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { LogoComponent } from './components/logo/logo.component';
import { UserRepositoriesComponent } from './components/user-repositories/user-repositories.component';
import { IconComponent } from './components/icon/icon.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ResultComponent } from './pages/result/result.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'result/:username', component: ResultComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultComponent,
    HomeComponent,
    NotFoundComponent,
    LogoComponent,
    UserInfoComponent,
    UserRepositoriesComponent,
    IconComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }