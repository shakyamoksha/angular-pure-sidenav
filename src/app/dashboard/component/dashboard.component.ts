import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  @ViewChild('sidebar') sidebar: ElementRef;
  openState: boolean;

  ngOnInit(): void {
    console.log('trigger');
  }

  dropdownTrigger($event: MouseEvent) {
    const arrowParent = $event.target[`parentElement`].parentElement;
    arrowParent.classList.toggle('showMenu');
  }

  triggerSidebar() {
    this.openState = !this.openState;

    sessionStorage.setItem('state', String(this.openState));

    console.log(this.openState);

    this.sidebar.nativeElement.classList.toggle('close');
  }


}
