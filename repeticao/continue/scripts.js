for (let i = 10; i > 0; i -= 1) {
  if (i % 2 == 0) {
    console.log(`O numero ${i} caiu no continue por ser par.`);
    continue;
  }
  console.log(i)
}