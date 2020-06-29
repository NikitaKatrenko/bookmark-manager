export interface BookmarkModel {
    id?: string;
    name: string;
    url: string;
    group: string;
}

export interface modalDataModel extends BookmarkModel {
    state: string;
}
