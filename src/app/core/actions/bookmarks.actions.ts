import { Action } from '@ngrx/store';
import { BookmarkModel } from '../../shared/models/bookmark.models';

export enum BookmarksActionTypes {
  InitBookmarks = '[Bookmarks] Bookmarks Init',
  LoadBookmarks = '[Bookmarks] Load Bookmarks',
  PostBookmarkData = '[Bookmarks] Post Bookmark Data',
  AddBookmark = '[Bookmarks] Add Bookmark',
  EditBookmark = '[Bookmarks] Edit Bookmark',
  DeleteBookmark = '[Bookmarks] Delete Bookmark'
}

export class InitBookmarks implements Action {
  readonly type = BookmarksActionTypes.InitBookmarks;

  constructor(public payload: any) { }
}

export class LoadBookmarks implements Action {
  readonly type = BookmarksActionTypes.LoadBookmarks;

  constructor(readonly payload: {bookmarkData: BookmarkModel[]}) { }
}

export class PostBookmarkData implements Action {
  readonly type = BookmarksActionTypes.PostBookmarkData;

  constructor(public payload: BookmarkModel) { }
}

export class AddBookmark implements Action {
  readonly type = BookmarksActionTypes.AddBookmark;

  constructor(public payload: BookmarkModel) { }
}

export class EditBookmark implements Action {
  readonly type = BookmarksActionTypes.EditBookmark;

  constructor(public payload: BookmarkModel) { }
}

export class DeleteBookmark implements Action {
  readonly type = BookmarksActionTypes.DeleteBookmark;

  constructor(public payload: string) { }
}


export type ActionsUnion = InitBookmarks | LoadBookmarks | PostBookmarkData
| AddBookmark | EditBookmark | DeleteBookmark;
