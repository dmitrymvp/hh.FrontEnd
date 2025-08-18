import { http, HttpResponse } from 'msw';
import { vacanciesResponse } from './response';

export const handlers = [
  http.get('https://api.hh.ru/vacancies', () => {
    return HttpResponse.json(vacanciesResponse);
  }),
];
