const sequence = ["|", "/", "-", "\\"];
let i = 0;
for (const el of sequence) {
  i += 200;
  setTimeout(() => {
    process.stdout.write(`\r${el}   `);
  }, i);
}
