import { Store as PullStateStore } from "pullstate";

const Store = new PullStateStore({
  books: [],
});

export default Store;
