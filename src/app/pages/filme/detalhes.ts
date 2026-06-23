import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Container } from '../../shared/components/container/container';
import { Filme } from '../../core/model/filme';
import { Sessao } from '../../core/model/sessao';
import { Observable, of } from 'rxjs';
import { FilmeService } from '../../core/services/filme-service';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule, Container],
  templateUrl: './detalhes.html',
  styleUrl: './detalhes.css'
})
export class DetalhesComponent implements OnInit {

  private filmeService = FilmeService;

  filme: Observable<Filme> = of();
  sessoes: Observable<any[]> = of([]);

  

    this.filme = this.filmeService.findById(1);
    this.sessoes = this.filmeService.findSessoesByFilmeId(1);

   
  }

