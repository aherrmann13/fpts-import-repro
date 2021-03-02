import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'


const either = pipe(
    E.right("some val"),
    E.map(x => x + " with more")
)

pipe(
    either,
    E.fold(() => console.error("should not be hit"), r => console.log(`success! value is [${r}]`))
)