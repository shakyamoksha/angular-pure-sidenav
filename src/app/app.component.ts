import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('sidebar') sidebar: ElementRef;
  openState: boolean;

  dropdownTrigger($event: MouseEvent) {
    const arrowParent = $event.target[`parentElement`].parentElement;
    arrowParent.classList.toggle('showMenu');
  }

  triggerSidebar() {
    this.openState = !this.openState;
    this.sidebar.nativeElement.classList.toggle('close');
  }

}
