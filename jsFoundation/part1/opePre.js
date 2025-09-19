//Yeh ek mathematical expression hai jo operator precedence (BODMAS rule) ko follow karta hai.
/*

BODMAS rule ke hisaab se, pehle parentheses ke andar wale operations kiye jaate hain, phir multiplication aur division (left to right), aur finally addition aur subtraction (left to right).

Is expression mein:
1. Pehle parentheses ke andar wale addition (3 + 2) ko solve kiya jaayega, jo 5 hoga.
2. Phir is result ko 2 se multiply kiya jaayega, jo 10 hoga.
3. Finally, 1 ko subtract kiya jaayega, jo final result 9 dega.

*/
let score = ((2 * (3 + 2)) - 1);
console.log(score); // output will be 9

// Operator Precedence in JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

/*

Precedence Level	Operator	Type	Associativity
21	()	Grouping	n/a
20	new (with argument list)	Constructor	left to right
19	.	Member	left to right
19	[]	Member	left to right
19	()	Call	left to right
18	new (without argument list)	Constructor	right to left
17	++	Postfix Increment	left to right
17	--	Postfix Decrement	left to right
16	++	Prefix Increment	right to left
16	--	Prefix Decrement	right to left
16	+	Unary Plus	right to left
16	-	Unary Negation	right to left
16	~	Bitwise NOT	right to left
16	!	Logical NOT	right to left
15	**	Exponentiation	right to left
14	*	Multiplication	left to right
14	/	Division	left to right
14	%	Remainder	left to right
13	+	Addition	left to right
13	-	Subtraction	left to right
12	<<	Bitwise Left Shift	left to right
12	>>	Bitwise Right Shift	left to right
12	>>>	Bitwise Unsigned Right Shift	left to right
11	<	Less than	left to right
11	<=	Less than or equal	to	left to right
11	>	Greater than	left to right
11	>=	Greater than or equal	to	left to right
11	in	Property in object	left to right
11	instanceof	Instance of left to right
10	==	Equality	left to right
10	!=	Inequality	left to right
10	===	Strict Equality	left to right
10	!==	Strict Inequality	left to right
9	&	Bitwise AND	left to right
8	^	Bit wise XOR	left to right
7	|	Bitwise OR	left to right
6	&&	Logical AND	left to right

*/

// 5	||	Logical OR	left to right
// 4	??	Nullish coalescing operator	left to right
// 3	? :	Conditional (ternary)	operator	right to left
// 2	=	Assignment	right to left
// 2	+=	Addition assignment	right to left
// 2	-=	Subtraction assignment	right to left
// 2	*=	Multiplication assignment	right to left
// 2	/=	Division assignment	right to left
// 2	%=	Remainder assignment	right to left
// 2	<<=	Bitwise Left Shift assignment	right to left
// 2	>>=	Bitwise Right Shift assignment	right to left
// 2	>>>=	Bitwise Unsigned Right Shift assignment	right to left
// 2	&=	Bitwise AND assignment	right to left
// 2	^=	Bit wise XOR assignment	right to left
// 2	|=	Bitwise OR assignment	right to left
// 1	yield	Yield (generator function)	right to left
// 1	await	Await (async function)	right to left
// 0	,	Comma	operator	left to right


// Example 1: Arithmetic Operators
let a = true, b = false, c = true;
console.log(a && b || c); // Output: true
// a && b = false, then false || c = true
