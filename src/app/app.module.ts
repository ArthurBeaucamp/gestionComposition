import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompositionComponent } from './composition/composition.component';
import { CompositionLyricsComponent } from './composition/components/composition-lyrics/composition-lyrics.component';
import { CompositionStructureComponent } from './composition/components/composition-structure/composition-structure.component';
import { CompositionChordsComponent } from './composition/components/composition-chords/composition-chords.component';
import { CompositionLyricsVerseComponent } from './composition/components/composition-lyrics/components/composition-lyrics-verse/composition-lyrics-verse.component';
import { CompositionLyricsChorusComponent } from './composition/components/composition-lyrics/components/composition-lyrics-chorus/composition-lyrics-chorus.component';

@NgModule({
  declarations: [
    AppComponent,
    CompositionComponent,
    CompositionLyricsComponent,
    CompositionStructureComponent,
    CompositionChordsComponent,
    CompositionLyricsVerseComponent,
    CompositionLyricsChorusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
