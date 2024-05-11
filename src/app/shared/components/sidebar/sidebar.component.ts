import { Component } from '@angular/core';
import { panelMenuItem } from '../../../data/constants/constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  panelMenuItems = panelMenuItem;
}
