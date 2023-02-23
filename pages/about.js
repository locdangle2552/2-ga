import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>
       about
      </h1>

      <Link href={"/"}>
      go home link
      </Link>

     <div>
        <a href={"/"}>
  go home with a
        </a>
     </div>
    </div>
  )
}
