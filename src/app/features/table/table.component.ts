import { Component, OnInit } from '@angular/core';
import { BookmarkModel } from '../../shared/models/bookmark.models';
import { ModalComponent } from '../../shared/modal/modal.component';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState, selectBookmarks } from '../../core/reducers';
import { PostBookmarkData, DeleteBookmark } from 'src/app/core/actions/bookmarks.actions';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'url', 'group', 'action'];
  dataSource: BookmarkModel[];
  bookmarks$: Observable<BookmarkModel[]>;
  routeParams$: Observable<Params>;
  isLoading = true;
  state: string;

  constructor(public dialog: MatDialog,
              private store: Store<AppState>,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.bookmarks$ = this.store.pipe(select(selectBookmarks));
    this.routeParams$ = this.route.params;
    const tableData$ = combineLatest(this.bookmarks$, this.routeParams$);

    tableData$.subscribe(([data, params]) => {
      if (data) {
        data = data.filter(
          item => params.group === 'all' || item.group === params.group
        );
        this.dataSource = data;
        this.isLoading = false;
      }
    });
  }

  openDialog(action: string, data: BookmarkModel): void {
    this.state = action;
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '450px',
      data: {
        state: this.state,
        id: data.id,
        name: data.name,
        url: data.url,
        group: data.group
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateBookmarks(result);
      }
    });
  }

  updateBookmarks(bookmark: BookmarkModel): void {
    if (this.state === 'edit') {
      this.store.dispatch(new PostBookmarkData(bookmark));
    } else {
      this.store.dispatch(new DeleteBookmark(bookmark.id));
    }
  }
}
