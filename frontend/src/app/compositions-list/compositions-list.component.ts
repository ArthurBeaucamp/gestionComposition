import { Component, OnInit } from '@angular/core';
import { IComposition } from '../interfaces/composition';
import { CompositionResourceService } from '../services/resources/compositionResource.service';

@Component({
  selector: 'compositions-list',
  templateUrl: './compositions-list.component.html',
  styleUrls: ['./compositions-list.component.scss']
})
export class CompositionsListComponent implements OnInit {
  public compositions: IComposition[] = [];

  constructor(
    private readonly compositionResourceService: CompositionResourceService,
  ) { }

  ngOnInit(): void {
    this.compositionResourceService.getAllCompositions().subscribe({
      next: (compositions: IComposition[]) => {
        this.compositions = compositions;
      },
      error: (error: Error) => {
        console.error(error.message);
      }
    });
  }
}
