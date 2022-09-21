import {ArrayDataSource} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';


/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */

 interface Node  {
   id: string;
   name: string;
   children?: Node[];
  }



var TREE_DATA: Node[] = 
[
  {
    id: 'journals',
    name: 'Journals'
  }
];

/**
 * @title Tree with nested nodes
 */
@Component({
  selector: 'cdk-tree-nested-example',
  templateUrl: 'cdk-tree-nested-example.html',
  styleUrls: ['cdk-tree-nested-example.css'],
})
export class CdkTreeNestedExample {
  treeControl = new NestedTreeControl<Node>(this.getChildren );
  dataSource = new ArrayDataSource(TREE_DATA);

  hasChild = (_: number, node: Node) => !!node.children && node.children.length > 0;

  click_node(): void
  {
    alert('alert')
  }

  getChildren(node: Node)
  {
      alert ('get children ' + node.name)
    return node.children
  }

}


/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */