import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';
import { PostModel } from '../models/post.model';

export interface SortOptionsInterface {
  sortBy: string;
  time: string;
  after: string;
}

@Injectable({
  providedIn: 'root',
})
export class SubredditService {
  private readonly url = 'https://www.reddit.com/r/';

  constructor(private http: HttpClient) {}

  public getSubredditPosts(
    name: string,
    options?: SortOptionsInterface
  ): Observable<PostModel[]> {
    return this.http
      .get(`${this.url}${name}.json`)
      .pipe(
        map((result: any) =>
          result?.data?.children.map((child) => child.data as PostModel)
        )
      )
      .pipe(tap((result) => console.log({ result })));
  }
}
