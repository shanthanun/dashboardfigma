import { Component,Input  } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent {
  @Input() inputLabel: string = '';
  @Input() options: string[] = [];
}
