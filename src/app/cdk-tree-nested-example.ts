import { ArrayDataSource } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */

interface Node {
  id: string | null;
  name: string | null;
  type: string;
  childrenCount: number;
  children?: Node[];
}

/**
 * @title Tree with nested nodes
 */
@Component({
  selector: 'cdk-tree-nested-example',
  templateUrl: 'cdk-tree-nested-example.html',
  styleUrls: ['cdk-tree-nested-example.css'],
})
export class CdkTreeNestedExample {
  private Journals: Node[] = [];

  treeControl = new NestedTreeControl<Node>(this.getChildren);
  dataSource = new ArrayDataSource(this.Journals);

  constructor() {
      this.Journals.push( {
        id: 'journal1',
        name: 'Journal1',
        type: 'root',
        childrenCount: 0,
        children: [{ id: null, name: 'fake', type: 'fake', childrenCount: 0 }],
      });
  }

  hasChild = (_: number, node: Node) =>
    !!node.children && node.children.length > 0;

  click_node(): void {
    console.log('##alert');
    /*TREE_DATA[0].children = [
      { id: 'a', name: 'b', type: 'journal', childrenCount: 0 },
    ];*/
    //this.treeControl = new NestedTreeControl<Node>(this.getChildren);
    this.dataSource = new ArrayDataSource(this.Journals);
    console.log(this.Journals);
  }

  getChildren(node: Node) {
    console.log('##get children ' + node.name);
    return node.children;
  }
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
