import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../shared/components/admin-layout/services/auth.service';
import { PostService } from '../../shared/post.service';
import { Post } from '../../shared/components/interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  posts: Post[]=[];
  pSub: Subscription;
  constructor(private postsService: PostService) {}

  ngOnInit(): void {
    this.pSub = this.postsService.getAll().subscribe((posts) => {
      this.posts=posts
    });
  }
  ngOnDestroy() {
    this.pSub.unsubscribe();
  }

  remove(id:string){

  }
}
