import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '../button/button.module';

import { CvComponent } from './cv.component';

@NgModule({
  declarations: [CvComponent],
  imports: [CommonModule, RouterModule, ButtonModule],
  exports: [CvComponent]
})
export class CvModule {}
