# Command Pattern (Action, Transaction)

## General Pattern Info

### Intent

Encapsulate a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.

### Consequences

1. Decouples the invoker from the one that actually performs the work (receiver, who receives this invocation through Command objects).
2. You can assemble multiple commands.
3. Easy to add new Commands - Open to Extension

## Implementation Details

1. Button : Invoker Class
2. Command : Command Interface (and Undoable Classes)
3. ContrastCommand, UndoCommand, TextCommand: Concrete Commands
4. Videoditor: Receiver
5. VideoCommands: just used for code-reuse
6. History : To support Undo
7. Main : mimics user interaction
