// GLOBAL IMPORT
import {Injectable, Inject} from '@angular/core';
import {Http, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from "rxjs/Subject";
import 'rxjs/Rx';
Injectable()
export class AuthService{

	// for change the navbar state between online and offline
	private authenticate = new Subject<boolean>();
	authenticateState$ = this.authenticate.asObservable();
	public isAuthenticate: boolean;

	constructor(@Inject(Http) private http: Http){
		if (localStorage.getItem('token')) {
			this.isAuthenticate = true;
		}
	}

	signup(data): Observable<any> {
		let headers = new Headers();

		headers.append('Content-Type', 'application/json');
		return this.http.post('/api/auth/signup', JSON.stringify(data),
			{headers: headers})
		.map(res => res);
	}

	signin(username: string, password: string): Observable<any> {
		let headers = new Headers();

		headers.append('Content-Type', 'application/json');
		return this.http.post('/api/auth/login', JSON.stringify({ username: username, password: password }),{headers: headers})
            .map((response: Response) => {
				// login successful if there's a jwt token in the response
				let user = response.json();
				
				if (user) {

					// store user details and jwt token in local storage to keep user logged in between page refreshes

					delete user["local"]["password"];
					delete user["local"]["username"];
					this.isAuthenticate = true;
					console.log(this.isAuthenticate);
					this.saveToken(JSON.stringify(user));
				}
			});
	}

	// delete the token in localStorage and change the navbar state
	logout(): void {
      	localStorage.removeItem('token');
      	this.authenticate.next(false);
		this.isAuthenticate = false;
    }

    // save the token in localStorage and change the navbar state
	saveToken(token: string): void {
		localStorage.setItem('token', token);
		this.authenticate.next(true);
	}


}
