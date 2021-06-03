import { NgModule } from '@angular/core';
import { ButtonComponent } from './button.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    RouterModule
  ],
  exports: [ButtonComponent]
})
export class ButtonModule {}
