import {useRedirect } from "@/hooks"

export default function Home() {
    useRedirect({
        instant: true,
        where: "under_development"
    })

  return (
    <div>Home</div>
  )
}
