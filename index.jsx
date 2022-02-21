// Intellisense works on this line
const a = <div className='' />

const b = <style dangerouslySetInnerHTML={{ __html: `#x > * {}` }} />

// Intellisense doesn't work on this line (delete `const b = ...` and it'll start working)
const c = <div className='flex' />
