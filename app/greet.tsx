'use server'

const SUPER_SECRET_DONT_SHARE_OR_YOU_WILL_BE_FIRED = "triangle"

console.log(SUPER_SECRET_DONT_SHARE_OR_YOU_WILL_BE_FIRED)

export async function Greet({name}: {name: string}) {
  return (
    <div>Hello {name}</div>
  )
}