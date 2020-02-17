import { Monster } from 'src/app/modules/monster/model/monster';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'monster-card',
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.scss']
})
export class MonsterCardComponent implements OnInit {
  @Input() monster: Monster;
  ICON_PATH: 'src/assets/icons';
  ROLE_PATH: 'src/assets/icons/roles';
  ELEMENT_COLOR_PATH: 'src/assets/icons/elements/color';
  ELEMENT_GRAY_PATH: 'src/assets/icons/elements/gray';
  CONVERSION_MAP: any = {
    '-2': '--',
    '-1': '-',
    '0': '',
    '1': '+',
    '2': '++',
};
  ELEMENT_MAP: any = {
    Fire: {
      name: 'fire',
      img: `${this.ELEMENT_COLOR_PATH}/fire.png`,
      grayImg: `${this.ELEMENT_GRAY_PATH}/fire.png`,
      advantages: [0, -1, -1, 1, 1, 0],
    },
    Water: {
        name: 'water',
        img: `${this.ELEMENT_COLOR_PATH}/water.png`,
        grayImg: `${this.ELEMENT_GRAY_PATH}/water.png`,
        advantages: [1, 0, 0, -1, -1, 1],
    },
    Rock: {
        name: 'rock',
        img: `${this.ELEMENT_COLOR_PATH}/rock.png`,
        grayImg: `${this.ELEMENT_GRAY_PATH}/rock.png`,
        advantages: [1, 0, 0, -1, 1, -1],
    },
    Leaf: {
        name: 'leaf',
        img: `${this.ELEMENT_COLOR_PATH}/leaf.png`,
        grayImg: `${this.ELEMENT_GRAY_PATH}/leaf.png`,
        advantages: [-1, 1, 1, 0, 0, -1],
    },
    Electric: {
        name: 'elec',
        img: `${this.ELEMENT_COLOR_PATH}/elec.png`,
        grayImg: `${this.ELEMENT_GRAY_PATH}/elec.png`,
        advantages: [-1, 1, -1, 0, 0, 1],
    },
    Skull: {
        name: 'skull',
        img: `${this.ELEMENT_COLOR_PATH}/skull.png`,
        grayImg: `${this.ELEMENT_GRAY_PATH}/skull.png`,
        advantages: [0, -1, 1, 1, -1, 0],
    }
  };

  constructor() {}

  getEffectivenessArray(monster: Monster) {
    const arrs = [].concat(monster.elementLks.map((el: string) => this.ELEMENT_MAP[el].advantages));
    const totals = [0, 0, 0, 0, 0, 0];
    arrs.forEach(arr => {arr.forEach((num: number, i: number) => {totals[i] += num; }); });
    const values = totals.map(num => {
        if (num !== 0) {
            return num * -1;
        } else {
            return num;
        }
    });
    const out: string[] = [];
    values.forEach((num: number, i: number) => out.push(this.CONVERSION_MAP[num]));
    return out;
}

  ngOnInit() {
  }

}
