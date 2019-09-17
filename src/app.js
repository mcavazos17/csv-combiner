import inquirer from 'inquirer';
import { parseCSV } from './parseCSV';

const main = async () => {
    let currentArray = [];

    const inputs = await inquirer.prompt([{
        type: 'input',
        name: 'files',
        message: "List all csv files"
    }]);

    if (inputs.files === '') {
        throw new Error('main -> inputs -> No inputs were found');
    }

    const paths = inputs.files.split(' ');

    try {
        for (let val of paths) {
            let result = await parseCSV(val);

            result.map(res => {
                if (res.category)
                    currentArray.push(res);
            });
        }

        console.table(currentArray);
    } catch (err) {
        throw new Error('main -> ', err);
    }
}

main();

// ../fixtures/clothing.csv ../fixtures/accessories.csv ../fixtures/household_cleaners.csv ../fixtures/convert.csv ../fixtures/clothing-big.csv