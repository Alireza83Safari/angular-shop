import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './pages/category/category.component';
import { BrandComponent } from './pages/brand/brand.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductComponent } from './pages/product/product.component';
import { UserComponent } from './pages/user/user.component';
import { OrderComponent } from './pages/order/order.component';
import { RoleComponent } from './pages/role/role.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product', component: ProductComponent },
  { path: 'brand', component: BrandComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'user', component: UserComponent },
  { path: 'order', component: OrderComponent },
  { path: 'role', component: RoleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelRoutingModule {}
