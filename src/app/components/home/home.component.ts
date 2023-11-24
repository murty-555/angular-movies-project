import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  trendingMovies: any = [];
  theatreMovies: any = [];
  popularMovies: any = [];

  constructor(private _http: HttpClient, private _router: Router) {}

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }

  getTrendingMovies() {
    let url = 'http://localhost:4100/assets/data/trending-movies.json';
    this._http.get(url).subscribe((res) => (this.trendingMovies = res));
  }

  getTheatreMovies() {
    let url = 'http://localhost:4100/assets/data/theatre-movies.json';
    this._http.get(url).subscribe((res) => (this.theatreMovies = res));
  }

  getPopularMovies() {
    let url = 'http://localhost:4100/assets/data/popular-movies.json';
    this._http.get(url).subscribe((res) => (this.popularMovies = res));
    console.log(this.popularMovies);
  }

  goToMovie(type: string, id: number) {
    this._router.navigate(['movie', type, id]);
  }
}
