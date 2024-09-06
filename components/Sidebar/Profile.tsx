import { LogOut } from "lucide-react";
import Image from "next/image";

export function Profile() {
  return (
    <div className="grid items-center grid-cols-profile gap-3">
      <Image
        width={1000}
        height={1000}
        src="https://github.com/Hoyasumii.png"
        alt="Profile Picture"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="truncate text-sm font-semibold text-zinc-700">
          Alan Reis
        </span>
        <span className="truncate text-sm text-zinc-500 text-wrap">
          alanreisanjo@gmail.com
        </span>
      </div>
      <button type="button" className="ml-auto p-2 hover:bg-zinc-50 rounded-md">
        <LogOut className="w-5 h-6 text-zinc-500" />
      </button>
    </div>
  );
}
