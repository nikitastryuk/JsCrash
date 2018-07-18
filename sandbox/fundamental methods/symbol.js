var sym = Symbol("foo");
var sym3 = Symbol("foo");
console.log(Symbol("foo") === Symbol("foo"));
typeof sym;     //
/*  "symbol" 
Symbol.hasInstance
Метод, определяющий, распознает ли конструктор некоторый объект как свой экземпляр. Используется оператором instanceof.
Symbol.isConcatSpreadable
Булево значение, показывающее, должен ли объект быть сведен к плоскому представлению (англ. flatten) в виде массива его элементов функцией Array.prototype.concat().
Symbol.unscopables
Массив строковых имен свойств. Позволяет скрыть свойства от инструкции with (прежде всего для обратной совместимости).
Symbol.species
Метод, определяющий конструктор для порождённых объектов.
Symbol.toPrimitive
Метод, преобразующий объект в примитив (примитивное значение).
Symbol.toStringTag
Строковое значение, используемое в качестве описания объекта по умолчанию. Используется функцией Object.prototype.toString() */