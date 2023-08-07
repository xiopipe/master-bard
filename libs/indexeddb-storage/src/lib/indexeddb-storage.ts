import Dexie, { Table } from 'dexie';

interface user {
  id: string,
  name: string;
  hola: string
}

export class storageDexie extends Dexie {

  user!: Table<user>;

  constructor() {
    super('masterBardDatabase', { allowEmptyDB: true });
    this.version(1).stores({
      user: '++id, name'
    });
  }
}

export const db = new storageDexie();
