import { action, makeObservable, observable } from "mobx";

import { RootStore } from "./RootStore";

class Movie {
  id: number;
  title: string;
  rate: number;

  constructor(id: number, title: string, rate: number) {
    this.id = id;
    this.title = title;
    this.rate = rate;
  }
}

export class MovieStore {
  rootStore: RootStore;

  @observable
  movies: Movie[] = [];

  constructor(root: RootStore) {
    makeObservable(this);

    this.rootStore = root;

    this.movies = [
      new Movie(1, "반지의 제왕", 5),
      new Movie(2, "해리 포터", 4),
      new Movie(3, "창궐", 1)
    ];
  }

  @action
  createMovie(title: string, rate: number) {
    this.movies = [
      ...this.movies,
      new Movie(this.movies[this.movies.length - 1].id + 1, title, rate)
    ];
  }

  @action
  deleteMovie(id: number) {
    this.movies = this.movies.filter(_ => _.id !== id);
  }

  @action
  changeRate(id: number, rate: number) {
    const idx = this.movies.findIndex(_ => _.id === id);
    const movie = this.movies[idx];

    this.movies = [
      ...this.movies.slice(0, idx),
      new Movie(movie.id, movie.title, rate),
      ...this.movies.slice(idx + 1, this.movies.length)
    ];
  }
}
