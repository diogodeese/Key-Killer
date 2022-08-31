import { getItem } from 'local-data-storage';

export const keys: string[] = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

let timerStorage = getItem('timer');
let value;

if (timerStorage) {
  value = timerStorage?.value;
} else {
  value = 0.5;
}

export const timer: number = value;
