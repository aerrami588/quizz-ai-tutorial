import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-1">
      <main className="flex items-center text-center justify-center">
        <h1 className="text-6xl font-bold">welcome to the quizz app👋</h1>
    </main>
      <footer className="footer pb-9 px-6 relative mb-0">
        <Button>Start</Button>
      </footer>
    </div>
  )
}
