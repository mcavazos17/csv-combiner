import { readFile } from 'fs';
import { parse } from 'papaparse';

export const parseCSV = async (path) => {
    const filename = path.split('\\').pop().split('/').pop();

    const result = new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, res) => {
            if (err) {
                reject(err)
            }

            let parsedArr = parse(res, { header: true });

            resolve(parsedArr.data.map(res => ({ ...res, filename })));
        });
    })

    try {
        return result;
    } catch (err) {
        throw new Error('parseCSV -> ', err);
    }
};