import { prisma } from "@/shared/lib/db";

export default async function Home() {
  const games = await prisma.game.findMany()

  return (
    <div>
      {games.map((game) => (
        <div key={game.id}>{game.name}</div>
      ))}
    </div>
  )
}
