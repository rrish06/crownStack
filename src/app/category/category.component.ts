import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../Service/shared.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public loc: any
  catgory: any
  subcategory: any
  breadCrum: any
  constructor(public sharedService: SharedService, private route: Router) { }

  ngOnInit(): void {
    this.sharedService.categogy.subscribe(data => {
      console.log("data")
      console.log(data)
      this.subCat(data)
    })
  }

  subCat(branch) {
    this.catgory = branch
    console.log(this.catgory)
  }
  subcategories(data) {
    this.sharedService.subCategoryData(data)
    console.log(this.subcategory)
    this.route.navigate(['/subCategory'])
    this.sharedService.showHomeText = false
  }
}
