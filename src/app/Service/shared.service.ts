import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public categogy = new BehaviorSubject('');
  currentMessage = this.categogy.asObservable();
  public subCategogy = new BehaviorSubject('');
  currentdata = this.categogy.asObservable();
  showHomeText: Boolean = true;
  constructor() { }

  categoryData(message) {
    this.categogy.next(message)
  }

  subCategoryData(data) {
    this.subCategogy.next(data)
  }

}
