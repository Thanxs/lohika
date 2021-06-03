import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoverLetterComponent } from './components/cover-letter/cover-letter.component';
import { CvComponent } from './components/cv/cv.component';

const routes: Routes = [
  {
    path: '',
    component: CoverLetterComponent,
    data: { animation: 'isLeft' }
  },
  {
    path: 'cv',
    component: CvComponent,
    data: { animation: 'isRight' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
