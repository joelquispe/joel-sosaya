import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GenresInterface, MoviesInterface } from '@app/core/interfaces';
import { GenresService } from '@app/core/services/genres/genres.service';
import { MoviesService } from '@app/core/services/movies/movies.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  $isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  genresQueryParams: string[] = [];
  movies: MoviesInterface[] = [];
  genres: GenresInterface[] = [];
  filterMovies: MoviesInterface[] = [];
  inputSearch: string = '';
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly moviesService: MoviesService,
    private readonly genresService: GenresService
  ) {
    this.init();
  }
  async init() {
    await this.findAllMovies();
    await this.findAllGenres();
    this.$isLoading.next(false);
    this.route.queryParams.subscribe((params) => {
      if (params['genres'] != undefined) {
        this.genresQueryParams = JSON.parse(params['genres']);
        this.filterMovies = this.movies.filter((m) =>
          this.genresQueryParams.includes(m.genre)
        );
      } else {
        this.filterMovies = this.movies;
      }
    });
  }
  onSearch(input: string) {
    const inputClean = input.toLowerCase().trim();

    this.filterMovies = this.movies.filter(
      (movie) =>
        movie.title.toLowerCase().trim().includes(inputClean) ||
        movie.description.toLowerCase().trim().includes(inputClean) ||
        movie.genre.toLowerCase().trim().includes(inputClean)
    );
    if (this.genresQueryParams.length > 0) {
      this.onFilterMoviesByQueryParams();
    }
  }
  async findAllMovies() {
    try {
      const response = await this.moviesService.findAll();
      const data: MoviesInterface[] = response.data as MoviesInterface[];
      this.movies = data;
    } catch (err) {}
  }

  async findAllGenres() {
    try {
      const response = await this.genresService.findAll();
      const data = response.data as GenresInterface[];
      this.genres = data;
    } catch (err) {}
  }

  onFilterMoviesByQueryParams() {
    if (this.genresQueryParams != undefined) {
      this.filterMovies = this.filterMovies.filter((item) =>
        this.genresQueryParams.includes(item.genre)
      );
    }
  }

  onRemoveGenre(name: string) {
    this.genresQueryParams = this.genresQueryParams.filter(
      (item) => item.toLocaleLowerCase() != name.toLocaleLowerCase()
    );

    const newQueryParams: Params = {};
    if (this.genresQueryParams.length > 0) {
      newQueryParams['genres'] = JSON.stringify(this.genresQueryParams);
    }
    this.router.navigate(['.'], {
      queryParams: newQueryParams,
    });
  }

  onSelectGenre(name: string) {
    if (!this.genresQueryParams.includes(name)) {
      this.genresQueryParams.push(name);
      const newQueryParams: Params = {
        genres: JSON.stringify(this.genresQueryParams),
      };
      this.router.navigate(['.'], {
        queryParams: newQueryParams,
      });
    }
  }
  trackByMovieId(index:number,movie:any){
    return movie.id;
  }
}
