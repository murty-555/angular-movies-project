import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  type  = '';
  id = '';
  url = '';
  movies: any;
  movie: any;
  constructor(private _activatedRoute: ActivatedRoute, private _http: HttpClient){}
  ngOnInit(): void{
    this.type = this._activatedRoute.snapshot.params['type'];
    this.id = this._activatedRoute.snapshot.params['id'];
    if(this.type === 'trending'){
      this.url = 'http://localhost:4100/assets/data/trending-movies.json'
    }
    if(this.type === 'theatre'){
      this.url = 'http://localhost:4100/assets/data/theatre-movies.json'
    }
    if(this.type === 'popular'){
      this.url = 'http://localhost:4100/assets/data/popular-movies.json'
    }
    this.getMovie();
  }

  getMovie(){
    this._http.get(this.url).subscribe(res => {
      this.movies = res;
      let index = this.movies.findIndex((movie: {id: string}) => movie.id == this.id);
      if(index > -1){
        this.movie = this.movies[index]
      }
    });
  }

}
