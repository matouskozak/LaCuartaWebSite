import { Component } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  title = 'LaCuartaIonic';

  constructor(private store: AngularFirestore) {
    store.firestore.settings({ignoreUndefinedProperties: true, merge: true});
  }
}
