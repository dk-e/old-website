import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <title>404 · zurly</title>

      <div className="mx-4 mt-8 flex items-center justify-center h-screen">
        <div className="w-full max-w-prose text-center">
          <h1 className="mb-8 text-4xl font-bold">404</h1>
          <div className="whitespace-pre-wrap text-left font-serif text-sm leading-6">
          </div>
          <div className="mt-8">
            <Link href="/">
              <span className="text-blue-500 hover:underline">Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
