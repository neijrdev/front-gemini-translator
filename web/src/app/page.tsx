import Link from "next/link";

export default function Home() {
  return (
      <div className="flex min-h-screen flex-1 items-center justify-center flex-col">
        <p >Index</p>
        <Link className="text-blue-700" href="/home">Home</Link>
      </div>
  );
}
