import { parseCSV } from '../src/functions/parseCSV';

describe('CSV Combiner', () => {
    let testObject = [];

    beforeEach(() => {
        testObject = [
            { email_hash: 'inwdiqeqiun2', category: 'Cats', filename: 'test.csv' },
            { email_hash: 'aodawodn2j431', category: 'Dogs', filename: 'test.csv' },
        ]
    });

    it('parses csv into an object', async () => {
        expect(await parseCSV('test/test.csv')).toEqual(expect.arrayContaining(testObject));
    })
});