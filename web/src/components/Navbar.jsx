"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full fixed inset-x-0 top-0 z-30 bg-white border-b border-zinc-100">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 grid grid-cols-[auto_1fr_auto] items-center gap-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/images/logo.webp"
              alt="SysGO"
              width={64}
              height={64}
              priority
              className="rounded-sm"
            />
          </Link>
        </div>

        <ul className="hidden md:flex justify-center items-center gap-7 text-sm text-zinc-700">
          <li><Link href="/" className="transition hover:text-[#104E49]">Início</Link></li>
          <li><Link href="/hospedagens" className="transition hover:text-[#104E49]">Serviços</Link></li>
          <li><Link href="/mapos" className="transition hover:text-[#104E49]">Sistemas</Link></li>
          <li><Link href="/site-inteligente" className="transition hover:text-[#104E49]">Site Inteligente</Link></li>
          <li><Link href="/#depoimentos" className="transition hover:text-[#104E49]">Depoimentos</Link></li>
          <li><Link href="/#contato" className="transition hover:text-[#104E49]">Contato</Link></li>
        </ul>

        <div className="hidden sm:flex items-center gap-2 sm:gap-3 justify-self-start">
          <Link
            href="#entrar"
            className="h-9 inline-flex items-center rounded-full border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-800 shadow-sm hover:bg-zinc-50"
          >
            Entrar
          </Link>
          <Link
            href="/mapos"
            className="inline-flex h-9 items-center rounded-full bg-[#104E49] px-4 text-sm font-semibold text-white shadow-sm hover:bg-[#0d3f3b]"
          >
            Começar agora
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          aria-label="Abrir menu"
          className="md:hidden justify-self-end inline-flex items-center rounded-md p-2 text-zinc-700 hover:bg-zinc-100"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </nav>
      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-zinc-100 bg-white/95 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
            <Link href="/" className="py-2 text-sm text-zinc-800">Início</Link>
            <Link href="/hospedagens" className="py-2 text-sm text-zinc-800">Serviços</Link>
            <Link href="/mapos" className="py-2 text-sm text-zinc-800">Sistemas</Link>
            <Link href="/site-inteligente" className="py-2 text-sm text-zinc-800">Site Inteligente</Link>
            <Link href="/#depoimentos" className="py-2 text-sm text-zinc-800">Depoimentos</Link>
            <Link href="/#contato" className="py-2 text-sm text-zinc-800">Contato</Link>
          </div>
          <div className="flex items-center gap-2 pt-2">
            <Link href="/entrar" className="inline-flex h-9 items-center rounded-full border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-800 shadow-sm">Entrar</Link>
            <Link href="/mapos" className="inline-flex h-9 items-center rounded-full bg-[#104E49] px-4 text-sm font-semibold text-white shadow-sm hover:bg-[#0d3f3b]">Começar agora</Link>
          </div>
        </div>
      )}
    </header>
  );
}

