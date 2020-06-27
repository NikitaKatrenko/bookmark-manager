import { Component } from '@angular/core';
import { ModalComponent } from '../../shared/modal/modal.component';
import { MatDialog } from '@angular/material';
import { BookmarkModel } from 'src/app/shared/models/bookmark.models';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/reducers';
import { PostBookmarkData } from 'src/app/core/actions/bookmarks.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  action = 'add';

  constructor(public dialog: MatDialog,
              private store: Store<AppState>) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '450px',
      data: {
        state: this.action
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const bookmark: BookmarkModel = {
          name: result.name,
          url: result.url,
          group: result.group
        };
        this.store.dispatch(new PostBookmarkData(bookmark));
      }
    });
  }
}
