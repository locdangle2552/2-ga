import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>
      GA2
      </h1>
      <Link href={"/about"}>
      go to about
      </Link>
    </div>
  )
}
