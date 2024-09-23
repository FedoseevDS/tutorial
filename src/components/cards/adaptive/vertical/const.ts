type TableBody = {
  description: string;
  method: string;
  number?: string;
  result: string | number;
}[];

export const tableHeader: TableBody = [
  {
    description: 'описание',
    method: 'метод',
    number: '№',
    result: 'результат',
  },
];

const clientHeight = document.documentElement.clientHeight;
const clientWidth = document.documentElement.clientWidth;
const innerHeight = window.innerHeight;
const innerWidth = window.innerWidth;
const scrollHeight = document.documentElement.scrollHeight;
const offsetHeight = document.documentElement.offsetHeight;

export const tableBody: TableBody = [
  {
    description: '',
    method: 'document.documentElement.clientHeight',
    result: clientHeight,
  },
  {
    description: '',
    method: 'document.documentElement.clientWidth',
    result: clientWidth,
  },
  {
    description: '',
    method: 'window.innerHeight',
    result: innerHeight,
  },
  {
    description: '',
    method: 'window.innerWidth',
    result: innerWidth,
  },
  {
    description: '',
    method: 'document.documentElement.scrollHeight',
    result: scrollHeight,
  },
  {
    description: '',
    method: 'document.documentElement.offsetHeight',
    result: offsetHeight,
  },
];
