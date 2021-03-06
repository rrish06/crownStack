import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'category', component: CategoryComponent },
  { path: 'subCategory', component: SubcategoryComponent },
  { path: '', component: AppComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    SubcategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
