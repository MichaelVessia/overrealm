import { Monster } from 'src/app/modules/monster/model/monster';
import { MatSelectChange } from '@angular/material/select';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'monster-form',
  templateUrl: './monster-form.component.html',
  styleUrls: ['./monster-form.component.scss']
})
export class MonsterFormComponent implements OnInit {
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  monster: Monster;
  prevElements: string[];
  elementList: string[] = ['Water', 'Fire', 'Leaf', 'Rock', 'Electric', 'Skull'];
  roleList: string[] = ['Warrior', 'Assassin', 'Technical', 'Tank', 'Support', 'Tricky'];

  constructor() {
    this.populateMonster();
  }

  ngOnInit() {

  }

  populateMonster() {
    this.monster = new Monster();
    this.monster.monsterId = 1;
    this.monster.monsterName = 'Cleansitoad';
    this.monster.elementLks = ['Water'];
    this.monster.abilityName = 'Clear Mind';
    this.monster.abilityText = 'When this monster enters the battlefield, '
    + 'you may shuffle your discard pile into your deck. Then, look at the top three cards of your deck. '
    + 'You may put any number back on top or on the bottom in any order.';
    this.monster.hp = 12;
    this.monster.roleLk = 'Technical';
    this.prevElements = this.monster.elementLks;
    console.log(this.monster);
  }

  elementChanged(event: MatSelectChange) {

  }

}
