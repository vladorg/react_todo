import en from './languages/en';
import ua from './languages/ua';
import ru from './languages/ru';

export default class {

  constructor() {
    let lang = localStorage.getItem('siteLang');
    let siteLang;

    if (!lang) {
      localStorage.setItem('siteLang', 'en');
      lang = 'en';
    }

    if (lang == 'ua') {
      siteLang = new ua();
    } else if (lang == 'ru') {
      siteLang = new ru();
    } else {
      siteLang = new en();
    }

    return siteLang;
  }

}