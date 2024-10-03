function esPrimo(num) {
  for (let i = 1; i <= num; i++) {
    let actual_es_primo = true;

    for (let e = 1; e <= i; e++) {
      if (e !== 1 && e !== i && i % e === 0) {
        actual_es_primo = false;
      }
    }
    if (actual_es_primo) console.log(i);
  }
}

esPrimo(15);
