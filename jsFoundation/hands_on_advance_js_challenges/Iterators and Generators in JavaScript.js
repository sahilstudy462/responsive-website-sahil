//Task 1: Creating a Simple Generator
//Create a generator function numberGenerator() that yields numbers from 1 to 3.

//function* ka matlab generator function. Normal function ki tarah nahi chalti — jab tak .next() nahi call karoge, code execute nahi hota.
//Isko call karne par yeh generator object (iterator) return karta hai, function ka execution abhi suspended (rukā) state mein hota hai.
function* numberGenerator() {
  yield 1; // first call to .next() will return { value: 1, done: false }
  yield 2;  // second call to .next() will return { value: 2, done: false }
  yield 3; // third call to .next() will return { value: 3, done: false }
}


//gen ek generator object hai. Abhi tak function ka body run nahi hua. Internal state: suspended (start).
//Jab hum gen.next() call karte hain, toh function ka execution start hota hai aur pehla yield statement tak jaata hai.
//Yeh yield 1 execute karta hai, aur { value: 1, done: false } return karta hai. Function ka execution wapas suspend ho jaata hai.
const gen = numberGenerator();


//jab pehli baar gen.next() call hota hai, execution function body se start hota hai aur first yield tak chal kar pause ho jata hai.
//yield 1; pe pause karta hai aur caller ko { value: 1, done: false } return karta hai.
//done: false matlab generator abhi complete nahi hua. Execution pointer ab yield 1 ke baad waale line pe suspended hai.
console.log(gen.next()); // { value: 1, done: false }

//Ab generator resume hota hai from the point after yield 1. Fir yield 2 tak chalta aur pause hota.
//Is call ka return { value: 2, done: false }. Pointer phir yield 2 ke baad suspended.
console.log(gen.next()); // { value: 2, done: false }


//Resume hota, yield 3 tak chalta aur pause.
//Returns { value: 3, done: false }. Pointer ab yield 3 ke baad suspended.
console.log(gen.next()); // { value: 3, done: false }

//Resume hota after yield 3. Function body ab khatam ho jata hai (koi aur yield nahi). Jab function end hota hai aur koi explicit return nahi hota to .next() return karta hai { value: undefined, done: true }.
//done: true matlab generator finished — ab koi aur values nahi aayengi.
console.log(gen.next()); // { value: undefined, done: true }

/*

Quick visual of states

After const gen = numberGenerator(); → state: suspended (start)
1st .next() → returns {value:1, done:false} → pointer after yield 1
2nd .next() → returns {value:2, done:false} → pointer after yield 2
3rd .next() → returns {value:3, done:false} → pointer after yield 3
4th .next() → returns {value:undefined, done:true} → function finished

*/


//Task 2: Create a Custom Iterator
//Create a custom iterator called rangeIterator(start, end) that returns an object that iterates over numbers from start to end.
//Each call to .next() should return the next number in the range until it reaches end.

//Yeh function do arguments leta hai: start (range ka shuru) aur end (range ka end).
//Yeh ek object return karta hai jisme next() method hota hai.
function rangeIterator(start, end) {
  let current = start; // current variable ko start se initialize karte hain.
  //Yeh variable closure ke through next() ke andar bhi accessible rahega (matlab repeated calls ke beech value yaad rahegi).

  //Function ek object return karta hai jisme next naam ka method hai. Is object ko iterator bola jaata hai. kyunki usme next() method hai jo {value, done} format return karta hai.
  return {

    //next() method define karte hain jo iterator protocol follow karta hai.
    next: function() {

      //Agar current abhi bhi end se chhota ya barabar hai to:
      //{ value: current++, done: false } return hota hai.
      //value me current number aata hai.
      //current++ post-increment hai: pehle current ka old value value me jayega, phir current 1 se badh jayega.
      //done: false matlab iteration abhi khatam nahi hua.
      if (current <= end) {
        return { value: current++, done: false };
      } 
      
      //Agar current > end ho gaya to iteration complete hai. done: true return hota hai. value yahan undefined hai (koi aur value nahi).
      else {
        return { value: undefined, done: true };
      }
    }
  };
}

//Iterator create karte hain range 1 se 3 ke liye.
//Har call to .next() should return the next number in the range until it reaches end.  
const it = rangeIterator(1, 3);
console.log(it.next()); // { value: 1, done: false }
console.log(it.next()); // { value: 2, done: false }
console.log(it.next()); // { value: 3, done: false }
console.log(it.next()); // { value: undefined, done: true }

//Each call to .next() should return the next number in the range until it reaches end.
//Create a generator function fibonacciGenerator() that yields numbers from the Fibonacci sequence indefinitely (1, 1, 2, 3, 5, 8, etc.).
//Use the next() method to get the next Fibonacci number.

//function* likhne ka matlab hai ye generator function hai. Ye ek ek value "yield" karke deta hai jab aap .next() call karte ho.
function* fibonacciGenerator() {

  //Pehle do Fibonacci numbers set kar diye: 1, 1
  let a = 1, b = 1;
  yield a; //Pehla number return karega (1).
  yield b; //Dusra number return karega (1).

  //Ab infinite loop mein chalta rahega, har baar next Fibonacci number calculate karke yield karega.
  while (true) {
    let next = a + b; //Next Fibonacci number calculate karte hain (pichle do numbers ka sum).
    yield next; //Next number yield karte hain (return karte hain).
    a = b; //a ko b se update karte hain (pichla number ab current number ban jaata hai).
    b = next; //b ko next se update karte hain (current number ab next number ban jaata hai).
  }
}
 
//Generator object create karte hain.
//Ab jab bhi hum genq.next() call karenge, ye Fibonacci sequence ka agla number dega.
const genq = fibonacciGenerator();

console.log(genq.next().value); // 1
console.log(genq.next().value); // 1
console.log(genq.next().value); // 2
console.log(genq.next().value); // 3
console.log(genq.next().value); // 5
console.log(genq.next().value); // 8
console.log(genq.next().value); // 13