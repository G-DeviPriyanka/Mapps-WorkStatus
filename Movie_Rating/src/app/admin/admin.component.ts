import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Movie {
  title: string;
  rating: number;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  movieForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      rating: [null, [Validators.required, Validators.min(1), Validators.max(5)]],
    });
  }

  onSubmit(): void {
    if (this.movieForm.valid) {
      const newMovie: Movie = this.movieForm.value;
      const storedMovies = sessionStorage.getItem('movies');
      const movies = storedMovies ? JSON.parse(storedMovies) : [];
      movies.push(newMovie);
      sessionStorage.setItem('movies', JSON.stringify(movies));
      this.movieForm.reset();
      alert('Movie added successfully!');
    }
  }
}
