import { Component, OnInit } from '@angular/core';
import { SharedService } from '../Service/shared.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
  showHomeText: Boolean = true;
  showCategory: Boolean = false;
  showSubCategory: Boolean = false;
  catgory: any
  subcategory: any
  breadCrum: any
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.subCategogy.subscribe(data => {
      console.log("data")
      console.log(data)
      this.subcategories(data)
    })
  }

  subcategories(data) {
    this.showHomeText = false
    this.showCategory = false;
    this.showSubCategory = true;
    this.subcategory = data
    this.breadCrum = data.name
    console.log(this.subcategory)
    this.sharedService.showHomeText = false
  }
}
