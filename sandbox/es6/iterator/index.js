let range = {
    from: 1,
    to: 5
}

// сделаем объект range итерируемым
range[Symbol.iterator] = function () {

    let current = this.from;
    let last = this.to;

    // метод должен вернуть объект с методом next()
    return {
        next() {
            if (current <= last) {
                return {
                    done: false,
                    value: current++
                };
            } else {
                return {
                    done: true
                };
            }
        }

    }
};

for (let num of range) {
    console.log(num);
}

let str = "Test string";
var iterator = str[Symbol.iterator]();
while(true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value); // Выведет все буквы по очереди
  }