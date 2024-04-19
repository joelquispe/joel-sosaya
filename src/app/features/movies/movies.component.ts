import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesInterface } from '@app/core/interfaces';
import { MoviesService } from '@app/core/services/movies/movies.service';
import { ApiService } from '@core/services/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  genres: string[] = [];
  movies: MoviesInterface[] = [];
  filterMovies: MoviesInterface[] = [];
  inputSearch:string = "";
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly moviesService: MoviesService
  ) {
    this.findAllMovies();
    this.route.queryParams.subscribe((params) => {
      console.log(JSON.parse(params['genres'])[0]);
    });
  }

  async findAllMovies() {
    try {
      const response = await this.moviesService.findAll();
      const data: MoviesInterface[] = response.data as MoviesInterface[];
      console.log(data)
      this.movies = data;
    } catch (err) {}
  }

  onRemoveGenre(name: string) {
    this.genres = this.genres.filter((genre) => genre != name);
  }

  onSelectGenre(name: string) {
    this.router.navigate(['/'], {
      queryParams: { genres: JSON.stringify(this.genres) },
      queryParamsHandling: 'merge',
    });
  }
}
