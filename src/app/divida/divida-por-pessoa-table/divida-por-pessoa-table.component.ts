import { Component, Input } from '@angular/core';
import { Divida } from 'src/app/core/divida.interface';

@Component({
  selector: 'app-divida-por-pessoa-table',
  templateUrl: './divida-por-pessoa-table.component.html',
  styleUrls: ['./divida-por-pessoa-table.component.scss'],
})
export class DividaPorPessoaTableComponent {
  @Input() divida: Divida[] = [];

  displayedColumns: string[] = [
    'nome',
    'posicaoFuncao',
    'tempoDeClube',
    'valorAReceber',
  ];
}
