import { readFileSync } from 'fs';
import { parse } from 'papaparse';

export const parseCSV = async (path) => {
    const filename = path.split('\\').pop().split('/').pop();

    try {
        const parsedArr = parse(readFileSync(path, 'utf8'), { header: true });

        const result = parsedArr.data.map(res => ({ ...res, filename }));

        return result;
    } catch (err) {
        throw new Error('parseCSV -> ', err);
    }
};