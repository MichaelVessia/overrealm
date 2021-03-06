import { Term, Image } from './../data/data';
import { ElemType, TERM_CODES, IMAGE_CODES, Css } from './../../types/dataTypes';

export const getAdvantages = (elem: ElemType): number[] => {
    if (elem === 'Death') {return [0, -1, 1, 1, -1, 0]; }
    if (elem === 'Electric') { return [-1, 1, -1, 0, 0, 1]; }
    if (elem === 'Fire') { return [0, -1, -1, 1, 1, 0]; }
    if (elem === 'Water') { return [1, 0, 0, -1, -1, 1]; }
    if (elem === 'Leaf') { return [-1, 1, 1, 0, 0, -1]; }
    if (elem === 'Rock') { return [1, 0, 0, -1, 1, -1]; }
};

export const getAbilityText = (text: string, termCss: Css, imageCss: Css): string => {
    let innerHtml = text;
    TERM_CODES.forEach((term: Term) => {
      while (innerHtml.includes(term.key)) {
          const html = `<br><span class="${termCss}">(${term.value})</span>`;
          innerHtml = innerHtml.replace(term.key, html);
      }
    });
    IMAGE_CODES.forEach((image: Image) => {
      while (innerHtml.includes(image.key)) {
          const html = `<img src="${image.path}" class="${imageCss}">`;
          innerHtml = innerHtml.replace(image.key, html);
      }
    });
    return innerHtml;
  };
