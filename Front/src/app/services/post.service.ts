import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { Observable } from 'rxjs';
import { RatingAction } from '../model/RatingAction';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiserverUrl='http://localhost:8083/post';
  constructor(private http: HttpClient) { }

  public addDep(post :Post): Observable<Post>{
    return this.http.post<Post>(`${this.apiserverUrl}/addpost`,post);
}
public getpost(postId:number ): Observable<Post>{
  return this.http.get<Post>(`${this.apiserverUrl}/retrieve/${postId}`);
}
public getPosts(): Observable<Post[]>{
  return this.http.get<Post[]>(`${this.apiserverUrl}/retrieve`)
}
public deletePost(postId:number ): Observable<void>{
  return this.http.delete<void>(`${this.apiserverUrl}/deletepost/${postId}`);
}
ratePost(postId: number, action: RatingAction): Observable<any> {
  return this.http.post(`${this.apiserverUrl}/${postId}/rate`, action);
}
}
