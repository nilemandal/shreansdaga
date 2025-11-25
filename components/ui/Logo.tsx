import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-4 shrink-0", className)}>
      <Image
        src="/assets/SD_foundation_approved-01_PNG-1.png"
        alt="Shreansdaga Foundation Logo"
        width={135}
        height={60}
        priority
        className="h-auto w-[135px] sm:w-[162px] lg:w-[180px] shrink-0"
      />
      <span className="sr-only">Shreansdaga Foundation</span>
    </Link>
  );
}
