import { MovieStore } from "./MovieStore";

export class RootStore {
  movieStore: MovieStore;

  constructor() {
    this.movieStore = new MovieStore(this);
  }
}
