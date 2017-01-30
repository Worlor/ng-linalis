import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

import 'rxjs/add/operator/switchMap';
import {ProductService} from "../service/product.service";
import {Product} from "../shared/model/product";
import {Location} from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
