import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from '../../shared/post.service';
import { switchMap } from 'rxjs/operators';
import { Post } from '../../shared/components/interfaces';
import { Validators } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
})
export class EditPageComponent implements OnInit {
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private postServece: PostService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.postServece.getById(params['id']);
        })
      )
      .subscribe((post: Post) => {
        console.log('post', post)
        this.form = new FormGroup({
          title: new FormControl(post.title,Validators.required),
          text: new FormControl(post.text,Validators.required),
        });
      });
  }
  submit(){

  }
}
