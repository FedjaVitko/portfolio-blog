With Babel now supporting async/await out of the box, and ES2016 (or ES7) just around the corner, more and more people are realizing how awesome this pattern is for writing
asynchronous code, using synchronous code structure.

This is a good thing, and ought to improve quality a whole lot.

However, what a lot of people may have miseed is that the entire foundation for async/await
is **promises**. In fact **every async function you write will return a promise, and every single thing you awat will ordinarily be a promise.**

Why am I emphasizing this? Because the majority of javascript written today is written using the callback pattern; a lot of people just never got on the promise bandwagon, and they're missing an important part of the async/await puzzle.

## What even is a promise?

I'll keep this brief, since it's been covered extensively elsewhere.

A promise is a special kind of javascript object which contains another object. I could have a promise for the integer 17, or the string "hello world", or some arbitrary object, or anything else you could normally store in a javascript variable.

How do I access the data in a promise? I use `.then()`:

```javascript
function getFirstUser() {
    return getUsers().then(function(users) {
        return users[0].name;
    });
}
```

How do I catch the errors from a promise chain? I use `.catch()`

```javascript
function getFirstUser() {
    return getUsers().then(function(users) {
        return users[0].name;
    }).catch(function(err) {
        return {
            name: 'default user'
        };
    });
}
```

Even though promises will usually be for 'future' data, once I actually have a promise for something, I really don't need to care whether the data will be there in future, or it's already been retrieved. I just call `then()` in either case. As such, promises force consistent asynchronicity (and avoid releasing zalgo). It's like saying, 'this is going to be an async function, whether or not the return value is available now or later'.

## Cool... so how does async/await tie in?

Well, consider the above code. `getUsers()` returns a promise. Any promise we have, using ES2016, we can _await_. That's literally all _await_ means: it functions in exactly the same way as calling `.then()` on a promise (but without requiring any callback function). So the above code becomes:

```javascript
async function getFirstUser() {
    let users = await getUsers();
    return users[0].name;
}
```

I can await any promise I want, whether it's already been resolved or not, whether I created it or not, await will simply pause the execution of my method until the value from the promise is available.

So... what about catching errors?

Simple, now we're writing synchronous style code, we can go back to using try/catch:

```javascript
async function getFirstUser() {
    try {
        let users = await getUsers();
        return users[0].name;
    } catch (err) {
        return {
            name: 'default user'
        };
    }
}
```

Alright cool. So there's a way of writing it with promises, and a way of writing it with async/await. Why do I need to care about promises again?

## Pitfall 1: not awaiting

If I absentmindedly call

```javascript
let user = getFirstUser();
```

Even though my code doesn't await, it's not goin to automatically error out!

In fact, I'm under no strict obligation to await anything. If I don't, 'user' will refer to a promise object (rather than the resolved value), and I won't be able to do much with it. Since javascript has no strict typing, this isn't going to be obvious to me until I try to do something with my 'user' variable (which is a promise rather than a user) and probably get a null pointer down the line when I least expect it, in some unrelated code.

So it's important to remember: async functions don't magically wait for themselves, or you'll get a promise instead of the value you expect. <mark>You must await, or you'll get a promise instead of the value you expect.</mark>

That said, this can be a good thing if you actually want a promise. It gives us more control to do cool stuff like __memoizing promises__.