import { Component, OnInit } from '@angular/core';
import { DasboardService } from './dasboard.servcie';
import {Dash} from './dash';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DasboardService]
})
export class DashboardComponent implements OnInit {
  errorMessage: string;
  posts: Dash[];
  welcome = 'Welcome Dashboard';
  // We don't call the get method in the constructor
    constructor(private dashboardService: DasboardService) {}

    // Fetching the records in the onInit lifecycle method makes the application easier to debug
    ngOnInit() { this.getDashs(); }

    getDashs() {
        this.dashboardService.getDashs()
            .subscribe(
                posts => this.posts = posts,
                error => this.errorMessage = <any>error
            );
    }
}
