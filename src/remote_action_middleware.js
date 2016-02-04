/* This is basically the equivalent of calling:
 * export default function(store) {
 *   return function(next) {
 *     return function(action) {
 *       stuff()
 *     }
 *   }
 * }
 * This is called currying. This is a way to store some parameters inside
 * the function so we don't have to supply all the arguments every time the
 * function is called. I'm still a bit confused about this all.
 */


export default store => next => action => {
  console.log('in middleware', action);
  return next(action);
}
