import { Component, OnInit } from '@angular/core';
import { IActivity } from '../shared/activity.model';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activities: IActivity[];
  totalActivities: number 
  totalDistance: number 
  firstDate: Date 


  constructor(private _activityService: ActivityService) { }

  ngOnInit(): void {
    this.activities = this._activityService.getActivities();
    this.totalActivities = this._activityService.gettotalActivities(this.activities);
    this.totalDistance = this._activityService.gettotalDistance(this.activities);
    this.firstDate = this._activityService.getfirstDate(this.activities);
  }

}
