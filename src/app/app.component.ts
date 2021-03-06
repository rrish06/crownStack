import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './Service/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crownstack';
  public loc: any
  showCategory: Boolean = false;
  showSubCategory: Boolean = false;
  catgory: any
  subcategory: any
  breadCrum: any
  constructor(private http: HttpClient, public sharedService: SharedService, private route: Router) { }

  ngOnInit() {
    this.sharedService.showHomeText = true
    this.http.get("assets/catalog.json").subscribe((data: any) => {
      this.loc = data.data.locations
      console.log(this.loc)
    })
  }
  subCat(branch) {
    this.sharedService.categoryData(branch)
    this.route.navigate(['/category'])
    this.sharedService.showHomeText = false
  }
}
