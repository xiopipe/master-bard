import { ResponseCampaignDTO, ResponseUserDTO } from '@master-bard/api/dtos';
import Dexie, { Table } from 'dexie';

export class storageDexie extends Dexie {
	user!: Table<ResponseUserDTO>;
	campaign!: Table<ResponseCampaignDTO>;

	constructor() {
		super('masterBardDatabase', { allowEmptyDB: true });
		this.version(1).stores({
			user: '++id, name',
			campaign: '++id, name',
		});
	}
}

export const db = new storageDexie();
