import { Component, OnInit } from '@angular/core';
import { SubredditService } from './core/services/subreddit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mls-app';

  constructor() {}

  ngOnInit() {}
}
