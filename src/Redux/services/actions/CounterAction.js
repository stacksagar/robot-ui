import { increment_count, decrement_count } from '../types';

export const increment = () => {
 return {
  type: increment_count
 }
}
export const  decrement = () => {
 return {
  type: decrement_count
 }
}