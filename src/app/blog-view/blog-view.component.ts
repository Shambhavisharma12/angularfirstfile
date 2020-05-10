import { Component, OnInit, OnDestroy } from '@angular/core';
//importing router
import{ActivatedRoute,Router} from "@angular/router";
import { BlogService } from '../blog.service';
import {BlogHttpService} from "../blog-http.service"


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit ,OnDestroy {
  //empty object
  public currentBlog

  //declareba dummy blog variable
  
  constructor(private _route: ActivatedRoute, private router: Router, public blogservice:BlogService, public blogHttpService:BlogHttpService) {
     console.log("blog-view constructor is called");

   }

  ngOnInit(): void {
    console.log("blo-view ngonit called")
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId)
    //calling a function to get a blog
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
         data =>{
           console.log(data)
           this.currentBlog=data["data"]
         },
         error =>{
           console.log("some error occured")
           console.log(error.errorMessage)
         }
    ); 
   // console.log(this.currentBlog)
    }

   ngOnDestroy(): void {
    console.log(" blog-view destroy called")
      
      }


 
    
    } 




