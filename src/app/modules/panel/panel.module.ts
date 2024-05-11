import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { BrandComponent } from './pages/brand/brand.component';
import { CategoryComponent } from './pages/category/category.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { ProductComponent } from './pages/product/product.component';
import { SharedModule } from '../../shared/shared.module';
import { OrderComponent } from './pages/order/order.component';

@NgModule({
  declarations: [
    BrandComponent,
    CategoryComponent,
    DashboardComponent,
    UserComponent,
    ProductComponent,
    OrderComponent,
  ],
  imports: [CommonModule, PanelRoutingModule, SharedModule],
})
export class PanelModule {}
