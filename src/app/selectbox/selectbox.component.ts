import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-selectbox',
  templateUrl: './selectbox.component.html',
  styleUrls: ['./selectbox.component.scss']
})
export class SelectboxComponent {
  @Input() inputLabel: string = '';
  @Input() options: string[] = [];
  isFocused: boolean = false;
  selectedValue: string = '';

  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    this.isFocused = false;
  }

  onChange(event: any) {
    this.selectedValue = event.target.value;
  }
}
