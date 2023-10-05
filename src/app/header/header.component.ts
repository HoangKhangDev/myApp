import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title = 'Shopping  Cart';
  item_count = 0;
  @Input() 'CountProduct': Number;
}
