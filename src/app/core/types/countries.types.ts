interface MainEntity {
  code: String;
  name: String;
}

export interface Country extends MainEntity {
  native: String;
  phone: String;
  continent: MainEntity;
  currency: String;
  languages: MainEntity[];
  emoji: String;
  states: MainEntity[];
}
