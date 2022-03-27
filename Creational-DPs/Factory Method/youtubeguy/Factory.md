# Factory

It feels like all that happened between `withoutFactory` to `withFactory` is that the conditional block was moved to Factory class. And honestly, I am not don't see the benefit of it immediately. For example:

1. Both approach dynamically chooses the enemy ship based on the user input
2. If there are more enemy ships to be added in the future, we'll have to write almost the same code, just in different file.
