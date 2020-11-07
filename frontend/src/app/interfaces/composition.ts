export enum ECompositionStructureType {
  preVerse = 'Pre-Verse',
  verse = 'Verse',
  preChorus = 'Pre-Chorus',
  chorus = 'Chorus',
  bridge = 'Bridge',
  rise = 'Rise',
}

export interface IComposition {
  title: string;
  type?: string;
  baseTempo?: number;
  tunning?: string;
  structure?: ICompositionStructure;
}

export interface ICompositionStructure {
  name: string;
  type: ECompositionStructureType;
  chords?: string[];
  lyric?: string;
  note?: string;
  order: number;
}
