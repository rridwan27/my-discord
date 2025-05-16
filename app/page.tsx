import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1 className="text-center underline text-5xl">Protected Route</h1>
      <div className="flex flex-col gap-5">
        <UserButton afterSignOutUrl="/" />
        <ModeToggle />
      </div>
    </div>
  );
}
