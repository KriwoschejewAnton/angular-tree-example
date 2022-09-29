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
  dataSource = new ArrayDataSource(this.Journals);

  constructor(private searchService: SearchService) {
    console.log('######');
    searchService.getJournals().subscribe(
      //(journals) => {      this.Journals = journals;}
      (items) => this.setJournals(items)
    );
    
    /*
    this.Journals.push(
        {
          id: 'journal_ID1',
          title: 'Some Journal 1',
          doi: 'Journal_DOI1',
          issues: [{ id: null, doi: 'fake', volume: 'fake', issue: 'fake' }]
        },

        {
          id: 'journal_ID2',
          title: 'Some Journal 2',
          doi: 'Journal_DOI2',
          pissn: 'ISSN2',
          issues: [{ id: null, doi: 'fake', volume: 'fake', issue: 'fake' }]
        }
    );
    */
  }

  setJournals(items: Journal[]) {
    alert(' ### ' + items[1].title);
    this.Journals = items;
  }

  click_node(): void {
    console.log('##alert');
    console.log(this.Journals);
  }

  getChildren(node: Journal) {
    console.log('##get children ' + node.title);
    return null;
  }
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
