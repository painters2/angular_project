import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

interface ISetting {
  Currency:string|null,
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  addSettingForm = this.formBuilder.group({
    Currency : null,
  });
  settings: Array<ISetting> = [];

  constructor(
    private formBuilder: FormBuilder,
  ) {
 
    
  }
  onSubmit(): void {
    this.settings.push({
     Currency: this.addSettingForm.value.Currency || "",
    })
    console.warn('Your order has been submitted', this.addSettingForm.value);
    this.addSettingForm.reset();
    

    
  }

}
