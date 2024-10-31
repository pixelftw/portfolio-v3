"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Particles from "@/components/ui/particles";

export function Hero() {
  return (
    <section className="font-bold py-8 lg:py-24 text-center flex items-center justify-center flex-col gap-6">
      <Avatar className="w-20 h-20">
        <AvatarImage
          src="https://github.com/shadcn.png"
          width={80}
          height={80}
          loading="eager"
        />
        <AvatarFallback>Vikas</AvatarFallback>
      </Avatar>
      <h2 className="text-3xl uppercase">Hi, My self Vikas</h2>
      <h1 className="text-6xl uppercase"> Frontend Engineer</h1>
      <h2 className="text-3xl flex items-center gap-3 uppercase">
        Who loves building things with NEXT.JS
      </h2>
      <Particles
        className="absolute inset-0"
        quantity={600}
        ease={80}
        color={"#fafaf"}
      />
    </section>
  );
}
