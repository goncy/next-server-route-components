'use server'

export async function Greet({name}: {name: string}) {
  return (
    <div>Hello {name}</div>
  )
}