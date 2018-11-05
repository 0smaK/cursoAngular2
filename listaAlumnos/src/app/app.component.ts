import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumno } from './alumno.model';

const BASE_URL = 'http://abraham.etsisi.upm.es/api-test/fichas/v1/alumnos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

	private alumnos: Alumno[] = [];
	private numAlumnos: number = 0;

	constructor(private http: HttpClient) { 
		this.getAlumnos();
	}

	private getAlumnos() {
		this.http.get(BASE_URL).subscribe(
			data => {
				this.numAlumnos = data[0].NUMREG;
				for(let i=1; i<this.numAlumnos; i++) 
					this.alumnos.push(data[i]);
			},
			error => console.error(error)
		);
	}
}