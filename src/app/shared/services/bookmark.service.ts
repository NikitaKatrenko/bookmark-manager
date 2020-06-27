import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BookmarkModel } from '../models/bookmark.models';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  constructor(private firestore: AngularFirestore) { }

  createBookmark(bookmark: BookmarkModel): Promise<firebase.firestore.DocumentReference> {
    return this.firestore.collection('bookmarks').add(bookmark);
  }

  getBookmarks(): Observable<BookmarkModel[]> {
    return this.firestore.collection('bookmarks').snapshotChanges().pipe(
      map(actions => {
        return actions.map(data => {
          const id: string = data.payload.doc.id;
          const itemData = data.payload.doc.data() as object;
          return {id, ...itemData} as BookmarkModel;
        });
    }));
}

  updateBookmark(bookmarkdId: string, bookmark: BookmarkModel): Promise<void> {
    return this.firestore.doc('bookmarks/' + bookmarkdId).update(bookmark);
  }

  deleteBookmark(bookmarkdId: string): Promise<void> {
    return this.firestore.doc('bookmarks/' + bookmarkdId).delete();
  }
}
