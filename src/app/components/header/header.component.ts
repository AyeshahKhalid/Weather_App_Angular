import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { StateUtils } from '../../state-utils';
import _ from 'underscore';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  constructor() {

  }
}
