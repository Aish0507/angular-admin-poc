import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  dashboardF: FormGroup | any

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.initForm()

  }
  initForm() {
    this.dashboardF = new FormGroup({
      'rightDoor_1': new FormGroup({
        'airPressure': new FormControl(null),
        'doorLeaf': new FormControl(null),
        'interLock': new FormControl(null),
      }),
      'rightDoor_2': new FormGroup({
        'airPressure': new FormControl(null),
        'doorLeaf': new FormControl(null),
        'interLock': new FormControl(null),
      }),
      'leftDoor_1': new FormGroup({
        'airPressure': new FormControl(null),
        'doorLeaf': new FormControl(null),
        'interLock': new FormControl(null),
      }),
      'leftDoor_2': new FormGroup({
        'airPressure': new FormControl(null),
        'doorLeaf': new FormControl(null),
        'interLock': new FormControl(null),
      }),
    });
  }
  ngAfterViewInit(): void {
  }
  openDoor(groupName: string) {
    switch (groupName) {
      case 'rightDoor_1':
        this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
          console.log(data)
          console.log(this.dashboardF.value?.rightDoor_1)
        })
        break;
      case 'leftDoor_2':
        this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
          console.log(data)
          console.log(this.dashboardF.value?.leftDoor_2)
        })
        break;
      case 'rightDoor_2':
        this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
          console.log(data)
          console.log(this.dashboardF.value?.rightDoor_2)
        })
        break;
    }
  }
}
