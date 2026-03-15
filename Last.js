const ROWS = 5;
let count = 1;

for(let i = 1; i <= ROWS; i++) {
    let currentRow = "";
    for(let j = 1; j <= i; j++) {
        currentRow += count++ + " ";
    }
    console.log(currentRow);
}
