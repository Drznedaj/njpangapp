import { Component, OnInit } from '@angular/core';
import { Recept } from '../recept';
import { RECEPTI} from '../test_recepti';
import { PROIZVODI1 } from '../test_proizvodi';

@Component({
  selector: 'app-recept',
  templateUrl: './recept.component.html',
  styleUrls: ['./recept.component.css']
})
export class ReceptComponent implements OnInit {

  recepti = RECEPTI;
  proizvodi = PROIZVODI1;
  selektovanRecept: Recept;
  constructor() { }

  ngOnInit() {
  }

  onSelect(recept: Recept): void {
    this.selektovanRecept = recept;
  }

}
