import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main
      className="h-screen w-screen bg-cover flex flex-row justify-center items-center"
      style={{
        backgroundImage: `url('/background.png')`,
      }}
    >
      <div className="text-white text-center">
        <h1 className="text-6xl font-extrabold mb-16">Welkom op onze website!</h1>
        <Link href="https://forms.gle/9XSwjnJMzXoQCvY26">
          <p className="text-2xl underline hover:animate-spin w-fit mx-auto">Doneer hier!</p>
        </Link>
      </div>
    </main>
  )
}
