import { ArrayDataSource } from '@angular/cdk/collections';
import { Component, Input } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { Journal } from './journals';

export interface Issue {
  id: string | null;
  doi: string | null;
  volume: string;
  issue: string;
}

@Component({
  selector: 'issues',
  templateUrl: 'issues.html',
  styleUrls: ['issues.css'],
})
export class Issues {
  private Issues: Issue[] = [];

  @Input()
  parent: Journal;

  treeControl = new NestedTreeControl<Issue>(this.getChildren);
  dataSource = new ArrayDataSource(this.Issues);

  constructor() {
    console.log('issue constructor');
    this.Issues.push({
      id: 'issue_ID1',
      doi: 'Some Issue 1',
      volume: 'Issue Volume',
      issue: 'Issue Number',
    });
  }

  click_node(): void {
    console.log('##alert');
    console.log(this.Issues);
  }

  getChildren(node: Issue) {
    console.log('##get children ' + node.doi);
    return null;
  }
}
