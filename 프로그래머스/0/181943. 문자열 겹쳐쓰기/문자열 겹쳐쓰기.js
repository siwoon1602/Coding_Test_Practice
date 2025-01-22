function solution(my_string, overwrite_string, s) {
  let myArray = my_string.split("");
  let overWriteArray = overwrite_string.split("");

  myArray.splice(s, overWriteArray.length, ...overWriteArray);

  return myArray.join("");
}