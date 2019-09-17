import Table from 'easy-table';

export const logResult = (result) => {
    let table = new Table();

    result.forEach(function (product) {
        table.cell('email_hash', product.email_hash)
        table.cell('category', product.category)
        table.cell('filename', product.filename)
        table.newRow()
    })

    console.log(table.toString());
}