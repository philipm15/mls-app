import { Component, OnInit } from '@angular/core';
import { SubredditService } from 'src/app/core/services/subreddit.service';
import { PostModel } from 'src/app/core/models/post.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  posts: PostModel[] = [];

  constructor(private subredditService: SubredditService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.subredditService.getSubredditPosts('malelivingspace').subscribe(
      (result) => {
        this.posts = result;
        console.log(result);
      },
      (error) => console.log(error)
    );
  }
}
