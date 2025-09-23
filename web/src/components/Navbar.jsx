"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-zinc-100">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 grid grid-cols-[auto_1fr_auto] items-center gap-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/images/logo.webp"
              alt="SysGO"
              width={56}
              height={56}
              priority
              className="rounded-sm"
            />
          </Link>
        </div>

        <ul className="hidden md:flex justify-center items-center gap-7 text-sm text-zinc-700">
          <li><Link href="#inicio" className="hover:text-emerald-700 transition">Início</Link></li>
          <li><Link href="#servicos" className="hover:text-emerald-700 transition">Serviços</Link></li>
          <li><Link href="#sistemas" className="hover:text-emerald-700 transition">Sistemas</Link></li>
          <li><Link href="#depoimentos" className="hover:text-emerald-700 transition">Depoimentos</Link></li>
          <li><Link href="#contato" className="hover:text-emerald-700 transition">Contato</Link></li>
        </ul>

        <div className="hidden sm:flex items-center gap-2 sm:gap-3 justify-self-start">
          <Link
            href="#entrar"
            className="h-9 inline-flex items-center rounded-full border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-800 shadow-sm hover:bg-zinc-50"
          >
            Entrar
          </Link>
          <Link
            href="#comecar"
            className="inline-flex h-9 items-center rounded-full bg-emerald-700 px-4 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800"
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
            <Link href="#inicio" className="py-2 text-sm text-zinc-800">Início</Link>
            <Link href="#servicos" className="py-2 text-sm text-zinc-800">Serviços</Link>
            <Link href="#sistemas" className="py-2 text-sm text-zinc-800">Sistemas</Link>
            <Link href="#depoimentos" className="py-2 text-sm text-zinc-800">Depoimentos</Link>
            <Link href="#contato" className="py-2 text-sm text-zinc-800">Contato</Link>
            <div className="flex items-center gap-2 pt-2">
              <Link href="#entrar" className="inline-flex h-9 items-center rounded-full border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-800 shadow-sm">Entrar</Link>
              <Link href="#comecar" className="inline-flex h-9 items-center rounded-full bg-emerald-700 px-4 text-sm font-semibold text-white shadow-sm">Começar agora</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
