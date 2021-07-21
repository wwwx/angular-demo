import { Component, OnInit } from '@angular/core';

interface MenuItem {
    id: number;
    name: string;
    pid: number;
    children?: MenuItem[];
}

@Component({
    selector: 'app-tree-menu',
    templateUrl: './tree-menu.component.html',
    styleUrls: ['./tree-menu.component.css']
})
export class TreeMenuComponent implements OnInit {

    menu: MenuItem[] = [
        { id: 2, name: 'dept2', pid: 1 },
        { id: 3, name: 'dept3', pid: 1 },
        { id: 4, name: 'dept4', pid: 3 },
        { id: 5, name: 'dept5', pid: 4 },
        { id: 1, name: 'dept1', pid: 0 },
        { id: 6, name: 'dept1', pid: 0 },
    ];

    code!: string;

    ngOnInit(): void {
        this.reset();
    }

    reset(): void {
        this.code = JSON.stringify(this.menu, null, 2);
    }

    transform(): void {
        const menu: MenuItem[] = JSON.parse(JSON.stringify((this.menu)));
        const roots: MenuItem[] = [];
        menu.forEach(item => {
            const parent = menu.find(o => o.id === item.pid);
            if (parent) {
                if (!parent.children) {
                    parent.children = [];
                }
                parent.children.push(item);
            } else {
                roots.push(item);
            }
        });
        this.code = JSON.stringify(roots, null, 2);
    }


}
