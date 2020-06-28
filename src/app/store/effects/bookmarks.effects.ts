import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { BookmarkService } from '../../shared/services/bookmark.service';
import { BookmarksActionTypes,
         LoadBookmarks,
         InitBookmarks,
         AddBookmark,
         PostBookmarkData,
         EditBookmark,
         DeleteBookmark } from '../actions/bookmarks.actions';
import { from } from 'rxjs';

@Injectable()
export class BookmarksEffects {

  constructor(private actions$: Actions, private bookmarkService: BookmarkService) { }

  @Effect()
  loadBookmarks$ = this.actions$.pipe(
    ofType<InitBookmarks>(BookmarksActionTypes.InitBookmarks),
    switchMap(() => this.bookmarkService.getBookmarks()
      .pipe(
        map((data) => {
          return (new LoadBookmarks({ bookmarkData: data }));
        })
      ))
  );

  @Effect()
  postBookmarkData$ = this.actions$.pipe(
    ofType<PostBookmarkData>(BookmarksActionTypes.PostBookmarkData),
    switchMap((action) => {
      const id = action.payload.id;
      if (id) {
        return from(this.bookmarkService.updateBookmark(id, action.payload))
          .pipe(
            map(() => (new EditBookmark(action.payload))
          ));
      } else {
        return from(this.bookmarkService.createBookmark(action.payload))
          .pipe(
            map((data) => {
              return (new AddBookmark({ id: data.id, ...action.payload }));
            }
          ));
      }
    })
  );

  @Effect({dispatch: false})
  deleteBookmark$ = this.actions$.pipe(
    ofType<DeleteBookmark>(BookmarksActionTypes.DeleteBookmark),
    switchMap((action) => (this.bookmarkService.deleteBookmark(action.payload)))
  );
}
