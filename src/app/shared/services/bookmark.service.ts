import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BookmarkModel } from '../models/bookmark.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  constructor(private firestore: AngularFirestore) { }

  createBookmark(bookmark: BookmarkModel) {
    return this.firestore.collection('bookmarks').add(bookmark);
  }

  getBookmarks() {
    return this.firestore.collection('bookmarks').snapshotChanges().pipe(
      map(actions => {
        return actions.map(data => {
          const id: string = data.payload.doc.id;
          const itemData = data.payload.doc.data() as object;
          return {id, ...itemData} as BookmarkModel;
        });
    }));
}

  updateBookmark(bookmarkdId: string, bookmark: BookmarkModel) {
    return this.firestore.doc('bookmarks/' + bookmarkdId).update(bookmark);
  }

  deleteBookmark(bookmarkdId: string) {
    return this.firestore.doc('bookmarks/' + bookmarkdId).delete();
  }
}
