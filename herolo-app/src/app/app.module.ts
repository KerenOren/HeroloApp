import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { ActionModalComponent } from './action-modal/action-modal.component';
import { MovieComponent } from './movie/movie.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EditComponent } from './movie/edit/edit.component';
import { AddNewComponent } from './movie/add-new/add-new.component';
import { reducer } from './state/reducers/movies.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule, MatIconModule, MatDialogModule, MatButtonModule} from '@angular/material';
import { UppercaseStringsPipe } from './pipes/uppercase-strings.pipe';



@NgModule({
  declarations: [
    AppComponent,
    MoviesContainerComponent,
    ActionModalComponent,
    MovieComponent,
    EditComponent,
    AddNewComponent,
    UppercaseStringsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      movies: reducer
    }),
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [ActionModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
