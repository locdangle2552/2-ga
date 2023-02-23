import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>
        Go to `pages/_app.js` and `pages/_document.js` to see how you can add
        Google Tag Manager to your app
      </h1>
      <Link href={"/about"}>
      go to about
      </Link>
    </div>
  )
}
