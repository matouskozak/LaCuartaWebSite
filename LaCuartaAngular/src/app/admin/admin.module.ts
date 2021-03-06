import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { AdminComponent } from "./admin.component";
import { AuthGuard } from "./auth.guard";
import { ProductTableComponent} from "./product-table/productTable.component";
import { ProductEditorComponent} from "./product-editor/productEditor.component";
import { OrderTableComponent} from "./order-table/orderTable.component";
import {UploadFormComponent} from "./upload-form/upload-form.component";
import {UploadDetailsComponent} from "./upload-details/upload-details.component";
import {UploadListComponent} from "./upload-list/upload-list.component";
import {ReservationTableComponent} from "./reservation-table/reservationTable.component";
import {UserTableComponent} from "./user-table/userTable.component";

let routing = RouterModule.forChild([
  { path: "auth", component: AuthComponent },
  { path: "main", component: AdminComponent, canActivate: [AuthGuard],
    children: [
      { path: "products/:mode/:id", component: ProductEditorComponent },
      { path: "products/:mode", component: ProductEditorComponent },
      { path: "products", component: ProductTableComponent },
      { path: "orders", component: OrderTableComponent },
      { path: "reservations", component: ReservationTableComponent },
      { path: "users", component: UserTableComponent },
      { path: "uploads", component: UploadListComponent },
      { path: "**", redirectTo: "products" } ]
  },
  { path: "**", redirectTo: "auth" }
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing],
  providers: [AuthGuard],
  declarations: [
    AuthComponent, AdminComponent,
    ProductTableComponent, ProductEditorComponent,
    OrderTableComponent,
    UploadFormComponent, UploadDetailsComponent, UploadListComponent,
    ReservationTableComponent, UserTableComponent
  ]
})

export class AdminModule { }
