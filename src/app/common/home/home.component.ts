import {Component, OnInit} from '@angular/core';
import {switchMap} from "rxjs/operators";
import {ParamMap} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bot_name = 'BioBot';

  constructor() {
  }

  ngOnInit() {

  }

}
