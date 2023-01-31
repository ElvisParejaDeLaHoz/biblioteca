import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
// @ts-ignore
import * as booksOffline from "./books.json";

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  URL_SERVER = "https://librarypca.fly.dev/";
  HTTP_HEADERS = { headers: new HttpHeaders({"Content-Type": "application/json"}) };

  constructor( private http: HttpClient) { }

  getAuthors() {
    return fetch(`${this.URL_SERVER}authors`).then(
      response => response.json()
    );
  }

  getBooksOffline() {
    return booksOffline;
  }

  getBooksAuthor(author_id:any) {
    return fetch(`${this.URL_SERVER}books_authors?author_id=${author_id}`).then(
      books => books.json()
    )
  }

  getBooks(){
    return fetch(`${this.URL_SERVER}books`).then(
      allBooks => allBooks.json()
    );
  }

  getMyFavoriteBooks(user_id: any){
    return this.http.get(`${this.URL_SERVER}my_favorite_books?user_id=${user_id}`)
  }

  getCheckLikeBook(user_id: any, book_id: any){
    return this.http.get(`${this.URL_SERVER}check_favorite?user_id=${user_id}&book_id=${book_id}`)
  }

  likeBook(user_id: any, book_id: any){
    let params = {
      "favorite_book": {
        "user_id": user_id,
        "book_id": book_id
      }
    }
    return this.http.post(`${this.URL_SERVER}favorite_books`,params, this.HTTP_HEADERS)
  }

  disLike(user_id: any, book_id: any){
    let params = {
      "favorite_book": {
        "user_id": user_id,
        "book_id": book_id
      }
    }
    return this.http.post(`${this.URL_SERVER}dislike`, params, this.HTTP_HEADERS)
  }

  getTopBooks(){
    return fetch(`${this.URL_SERVER}top_books`).then(
      allBooks => allBooks.json()
    );
  }
}
