import { Injectable, OnChanges, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService implements OnInit {

  constructor(private db: AngularFireDatabase) {
    // this.db.database.ref('/categories').on('value', (value) => {
    //   console.log(value.val());
    //   this.categorySub.next(value.val());
    // });
    this.db.list('/categories');
   }

  ngOnInit() {

  }

  getCategories(): Observable<any> {
    return this.db.object('/categories').valueChanges();
  }

}
