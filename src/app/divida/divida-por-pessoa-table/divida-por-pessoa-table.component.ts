import { Component } from '@angular/core';
import { DividaStateService } from 'src/app/core/divida-state.service';

@Component({
  selector: 'app-divida-por-pessoa-table',
  templateUrl: './divida-por-pessoa-table.component.html',
  styleUrls: ['./divida-por-pessoa-table.component.scss'],
})
export class DividaPorPessoaTableComponent {
  displayedColumns: string[] = [
    'nome',
    'posicaoFuncao',
    'tempoDeClube',
    'valorAReceber',
  ];

  divida$ = this.dividaStateService.dividas$;

  constructor(private dividaStateService: DividaStateService) {}
}
