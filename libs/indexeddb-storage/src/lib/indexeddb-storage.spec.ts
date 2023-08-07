import { indexeddbStorage } from './indexeddb-storage';

describe('indexeddbStorage', () => {
	it('should work', () => {
		expect(indexeddbStorage()).toEqual('indexeddb-storage');
	});
});
