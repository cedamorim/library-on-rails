import { Store as PullStateStore } from "pullstate";

const Store = new PullStateStore({
  books: [],
  filter: '',
  booksCount: 0,
  currentPage: 1,
  sortBy: 'title',
  directionBy: 'asc',
  sortOptions: [
    {value: 'title', label: 'Titulo'},
    {value: 'author', label: 'Autor'}
  ],
  directionOptions: [
    {value: 'asc', label: 'Crescente'},
    {value: 'desc', label: 'Decrescente'}
  ],
  params: {
    search: '', 
    orderBy: 'title',
    direction: 'asc',
    page: 1
  }
});

export default Store;
