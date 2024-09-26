// src/app/movie-rating/movie-rating.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Movie {
  title: string;
  genre: string;
  director: string;
  cast: string;
  releaseDate: string;
  duration: number;
  rating: number;
  review: string;
}

@Component({
  selector: 'app-movie-rating',
  templateUrl: './movie-rating.component.html',
  styleUrls: ['./movie-rating.component.css'],
})
export class MovieRatingComponent implements OnInit {
  movieForm: FormGroup;
  movies: Movie[] = [];

  constructor(private fb: FormBuilder) {
    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      genre: ['', Validators.required],
      director: ['', Validators.required],
      cast: ['', Validators.required],
      releaseDate: ['', Validators.required],
      duration: [null, Validators.required],
      rating: [null, [Validators.required, Validators.min(1), Validators.max(5)]],
      review: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadMovies();
  }

  onSubmit(): void {
    if (this.movieForm.valid) {
      const movie: Movie = this.movieForm.value;
      this.movies.push(movie);
      sessionStorage.setItem('movies', JSON.stringify(this.movies));
      this.movieForm.reset();
    }
  }

  loadMovies(): void {
    const storedMovies = sessionStorage.getItem('movies');
    this.movies = storedMovies ? JSON.parse(storedMovies) : [];
  }
}
