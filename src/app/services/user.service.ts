import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiUrl = environment.baseUrl + '/api/auth/';

    constructor (
        private http: HttpClient
    ) {

    }

    isManager(): Promise<void | boolean> {
        return this.http.get(this.apiUrl + "isManager")
                   .toPromise()
                   .then(response => response as boolean)
                   .catch(this.handleError);
    }

    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg);
    }
}