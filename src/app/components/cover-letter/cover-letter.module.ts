import { NgModule } from '@angular/core';
import { CoverLetterComponent } from './cover-letter.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [CoverLetterComponent],
  imports: [RouterModule, ButtonModule],
  exports: [CoverLetterComponent]
})
export class CoverLetterModule {}
