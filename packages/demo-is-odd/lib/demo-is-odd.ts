import {isEven} from "demo-is-even";

export function isOdd(n:number): boolean {
  console.log("Calling demo is add function");
  return !isEven(n);
}