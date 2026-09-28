function sumAll(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

// Проверка:
console.log(sumAll(2, 5, 6, 7));                     // Выведет: 20
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));  // Выведет: 55