import { Component, OnInit } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';
import { TreeModule } from 'angular-tree-component';


declare var $:any;
@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        $.getScript('../../assets/js/sidebar-moving-tab.js');
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
