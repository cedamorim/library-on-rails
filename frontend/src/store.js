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
    {value: 'asc', label: 'Ascendente'},
    {value: 'desc', label: 'Decrescente'}
  ]
});

export default Store;
