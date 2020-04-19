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
  readonly fileExtensions = ['png', 'jpg', 'jpeg', 'tiff', 'gif'];

  constructor(private subredditService: SubredditService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.subredditService.getSubredditPosts('malelivingspace').subscribe(
      (result) => {
        this.posts = result.filter((child) => {
          return (
            child.url != null &&
            this.fileExtensions.indexOf(child.url.split('.').reverse()[0]) > -1
          );
        });
      },
      (error) => console.log(error)
    );
  }

  openOnReddit(post: PostModel) {
    window.open('https://reddit.com' + post?.permalink, '_blank');
  }
}
