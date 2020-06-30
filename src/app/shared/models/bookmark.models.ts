export interface BookmarkModel {
    id?: string;
    name: string;
    url: string;
    group: string;
}

export interface ModalDataModel extends BookmarkModel {
    state: string;
}
