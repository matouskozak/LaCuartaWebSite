import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Product } from "../../model/product.model";
import { ProductRepository } from "../../model/product.repository";
import {FileUpload} from "../../model/file-upload.model";

@Component({
  templateUrl: "productEditor.component.html"
})

export class ProductEditorComponent {
  editing: boolean = false;
  product: Product = new Product();

  constructor(
    private repository: ProductRepository,
    private router: Router,
    activeRoute: ActivatedRoute) {
    this.editing = activeRoute.snapshot.params["mode"] == "edit";
    if (this.editing) {
      Object.assign(this.product,
        repository.getProduct(activeRoute.snapshot.params["id"]));
    }
  }
  save(form: NgForm) {
    console.log("Before save:", this.product)
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl("/admin/main/products");
  }

  addImageToProduct(imageUrl: string) {
    this.product.url = imageUrl;
  }
}
