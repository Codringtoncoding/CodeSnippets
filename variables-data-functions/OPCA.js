// If both operands have different types, they are not strictly equal
// If both operands are null, they are strictly equal
// If both operands are undefined, they are strictly equal
// If one or both operands are NaN, they are not strictly equal
// If both operands are true or both false, they are strictly equal
// If both operands are numbers and have the same value, they are strictly equal
// If both operands are strings and have the same value, they are strictly equal
// If both operands have reference to the same object or function, they are strictly equal
// In all other cases operands are not strictly equal

1 === "1" // false, IEA rule 1
0 === 0 // true, IEA rule 6
undefined === undefined // true, IEA rule 3
undefined === null // false, IEA rule 1
NaN === NaN // false, IEA rule 4

var firstObject = {},
  secondObject = firstObject;
secondObject['name'] = 'Neo';
secondObject === firstObject // true, IEA rule 8

[] === [] //false, IEA rule 9
//The [] literal creates a new array reference. Both operands being the same type (object), however have reference to different objects. The IEA rule 9 says that the identity evaluates to false.

// /Another step before learning equality is understanding the object to primitive conversion. JavaScript use it when comparing an object with a primitive value. The object to primitive conversion algorithm (OPCA):

// If the method valueOf() exists it is called. If valueOf() returns a primitive, the object is converted to this value
// In other case if the method toString() exists it is called. If toString() returns a primitive, the object is converted to this value
// In other case JavaScript throws an error: TypeError: Cannot convert object to primitive value
// Most of the native objects when calling the valueOf() method returns the object itself. So the toString() method is used more often.
// A note about the Date objects: when converting to a primitive, the object is converted instantly to a string using toString() method. This way the rule 1 is skipped for Date. The plain JavaScript object, {} or new Object(), usually is converted to "[object Object]".
// An array is converted to by joining it’s elements with "," separator. For example [1, 3, "four"] is converted to "1,3,four".

// The equality evaluation algorithm (EEA) ==:

// If the operands have the same type, test them for strict equality using IEA. If they are not strictly equal, they aren’t equal, otherwise they are equal
// If the operands have different types:
// If one operand is null and another undefined, they are equal
// If one operand is number and another is a string, convert the string to number. Compute the comparison again
// If one operand is boolean, transform true to 1 and false to 0. Compute the comparison again
// If one operand is an object and another is a number or string, convert the object to a primitive using OPCA. Compute the comparison again
// In all other cases operands are not equal

1 == true // true
// //1 == true (Transform true to 1 using EEA rule 2.3)
// 1 == 1 (Operands have the same type, numbers. Transform the equality to identity using EEA rule 1)
// 1 === 1 (Both operands are numbers and have the same value. Based on IEA rule 6, it’s an equality)
// true

'' == 0 // true
// '' == 0 (One operand is string and another is number, based on EEA rule 2.2 the '' is transformed to a number)
// 0 == 0 (Operands are the same type, transform the equality to identity using EEA rule 1)
// 0 === 0 (Operands are the same type and have the same value, so based on IEA rule 6 it’s an identity)
// true

null == 0 // false
// null == 0 (null is a primitive of type null and 0 is number. Apply the EEA rule 3)
// false

null == undefined // true
// null == undefined (Based on EEA rule 2.1 the operands are equal)
// true

NaN == NaN // false

// NaN == NaN (Both operands are numbers. Transform the equality to identity using EEA rule 1)
// NaN === NaN (Based on rule IEA rule 4 the operands are not strictly equal)
// false

[''] == '' // true

// [''] == '' ([''] is an array and '' a string. Apply the EEA rule 2.4 and transform the array to a primitive using OPCA rule 2)
// '' == '' (Both operands are strings, so transform the equality to identity)
// '' === '' (Both operands are the same type and have the same value. Using the IEA rule 7 it’s an identity)
// true

{} == true // false

// {} == true (Using the EEA rule 2.3, transform the true operand to 1)
// {} == 1 (First operand is an object, so it’s necessary to transform it to a primitive using OPCA)
// "[object Object]" == 1 (Because first operand is a string and second a number, we need to transform the "[object Object]" to a number using the EEA rule 2.2)
// NaN == 1 (Both operands are numbers, so transform the equality to identity using EEA rule 1)
// NaN === 1 (Based on IEA rule 4, which says that nothing is equal with a NaN, the result is false)
// false
