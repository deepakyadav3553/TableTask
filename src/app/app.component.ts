import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  eventData: any = [];
  userData: any = [];
  eventTableData: any = [];
  userTableData: any = []
  constructor(private dataService: DataService) {

  }
  ngOnInit(): void {
    this.dataService.getRecords().subscribe((res: any) => {
      let myObject = res['2022']['-NP1BKnOWLwRHzSQsH6t'].eventParticipants;
      this.eventData = Object.values(myObject);
      this.dataService.getUsers().subscribe((res) => {
        this.userData = res;
        this.setData()
      })
    })
  }

  setData() {
    console.log(this.userData);
    console.log(this.eventData);
    this.userData.filter((res: any) => {
      // console.log(res.id);
      this.eventData.map((eventRes: any) => {
        if (res.id == eventRes.indKey) {
          if (eventRes.status == "invited") {
            console.log(eventRes);
            this.eventTableData.push(eventRes);
            this.userTableData.push(res);
          }
        }
      })
    })
    // console.log(this.userTableData);
    // console.log(this.eventTableData);
  }
}
