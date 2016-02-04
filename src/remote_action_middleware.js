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


export default socket => store => next => action => {

  // we only want to emit some events back to the server, and not all of them
  // this will avoid infinite loops and other such unsavoury scenarios.
  // e.g. if we send SET_STATE back to the server, it will do nothing with it
  // yet trigger the listener, causing a new SET_STATE.
  // You can see where that is heading, and it's no good.
  if (action.meta && action.meta.remote) {
    socket.emit('action', action)
  }
  return next(action);
}
