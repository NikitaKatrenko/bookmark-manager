import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { BookmarkModel } from '../../shared/models/bookmark.models';
import { BookmarksActionTypes, ActionsUnion } from '../actions/bookmarks.actions';

export interface BookmarkState {
  bookmarksData: BookmarkModel[] | null;
}

const initialBookmarkState: BookmarkState = {
  bookmarksData: null,
};

export interface AppState {
  bookmarks: BookmarkState;
}

export function bookmarksReducer(state: BookmarkState = initialBookmarkState, action: ActionsUnion): BookmarkState {
  switch (action.type) {
    case BookmarksActionTypes.LoadBookmarks:
      return {
        bookmarksData: action.payload.bookmarkData
      };

    case BookmarksActionTypes.EditBookmark:
      const index = state.bookmarksData.indexOf(action.payload);
      if (index !== -1) {
        state.bookmarksData[index] = action.payload;
      }
      return state;

    case BookmarksActionTypes.DeleteBookmark:
      return {
        bookmarksData: state.bookmarksData.filter(
          item => item.id ===  action.payload
        )
      };

    default:
      return state;
  }
}

export const reducers: ActionReducerMap<AppState> = {
  bookmarks: bookmarksReducer
};

export const selectBookmarks = (state: AppState) => state.bookmarks.bookmarksData;

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
