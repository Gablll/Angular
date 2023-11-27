import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ListService } from 'src/app/servicos/list.service';
import { Contato } from 'src/app/Contato';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})

export class DataFormComponent {
  formulario!: FormGroup;
  contato!: Contato;

  constructor(private listService: ListService, private formbuilder: FormBuilder){ }

  ngOnInit(): void {
    this.formulario = this.formbuilder.group({
      nome:[null],
      email:[null]
    });
  }
  onSubmit() {
    console.log(this.formulario.value);
    this.contato = this.formulario.value;
    console.log(this.contato);
    this.listService.setContato(this.contato).subscribe();
  }

}
