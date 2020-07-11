import inquirer from 'inquirer';
import { logResult, parseCSV } from './functions/index';

const main = async () => {
    let currentArray = [];

    console.log('hello');

    console.log('2nd commit');

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
        console.log('loading...');

        for (let val of paths) {
            let result = await parseCSV(val);

            result.map(res => {
                if (res.category)
                    currentArray.push(res);
            });
        }

        logResult(currentArray);
    } catch (err) {
        throw new Error('main -> ', err);
    }
}

main();