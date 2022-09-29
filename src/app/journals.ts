import { ArrayDataSource } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { Issue } from './issues';
import { SearchService } from './getContent.service';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */

export interface Journal {
  id: string | null;
  title: string | null;
  doi?: string | null;
  pissn?: string | null;
  eissn?: string | null;
  issues?: Issue[];
}

/**
 * @title Tree with nested nodes
 */
@Component({
  selector: 'journals',
  templateUrl: 'journals.html',
  providers: [SearchService],
  styleUrls: ['journals.css'],
})
export class Journals {
  private Journals: Journal[] = [];

  treeControl = new NestedTreeControl<Journal>(this.getChildren);
  dataSource: any;

  constructor(private searchService: SearchService) {
    searchService.getJournals().subscribe((items) => this.setJournals(items));
  }

  setJournals(items: Journal[]) {
    items.forEach( (z) => this.Journals.push(z) );
    this.dataSource = new ArrayDataSource(this.Journals);
    console.log(this.Journals);
  }

  click_node(): void {
    console.log('##alert');
    console.log(this.Journals);
  }

  getChildren(node: Journal) {
    //console.log('##get children ' + node.title);
    return null;
  }
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
