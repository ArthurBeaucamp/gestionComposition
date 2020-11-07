import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IComposition } from '../../interfaces/composition';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompositionResourceService {
  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  // TODO Move the path http://localhost:3000 in config folder

  public getAllCompositions(): Observable<IComposition[]> {
    return this.httpClient.get<IComposition[]>('http://localhost:3000/api/composition');
  }
}
