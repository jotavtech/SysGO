import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-zinc-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Top row: logo, nav, seals */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image src="/assets/images/logo.webp" alt="SysGO" width={40} height={40} className="rounded" />
            <div className="leading-tight">
              <p className="font-semibold text-emerald-800">SysGO</p>
              <p className="text-xs text-zinc-500">Soluções que simplificam</p>
            </div>
          </div>

          {/* Nav inline */}
          <nav className="text-sm text-emerald-900/80">
            <ul className="flex flex-wrap items-center gap-6">
              <li><Link href="#inicio" className="hover:text-[#104E49]">Início</Link></li>
              <li><Link href="#servicos" className="hover:text-[#104E49]">Serviços</Link></li>
              <li><Link href="#sistemas" className="hover:text-[#104E49]">Sistemas</Link></li>
              <li><Link href="#depoimentos" className="hover:text-[#104E49]">Depoimentos</Link></li>
              <li><Link href="/site-inteligente" className="hover:text-[#104E49]">Quem somos</Link></li>
              <li><Link href="#contato" className="hover:text-[#104E49]">Contato</Link></li>
            </ul>
          </nav>

          {/* Seals */}
          <div className="flex items-center gap-3 md:gap-4">
            <Image src="/assets/images/sysgo.webp" alt="Selo 1" width={64} height={32} />
            <Image src="/assets/images/sysgo.webp" alt="Selo 2" width={64} height={32} />
          </div>
        </div>

        {/* Address */}
        <p className="mt-6 text-sm text-zinc-600">SysGO — Soluções que simplificam</p>
        <p className="text-sm text-zinc-600">Avenida Anhanguera 5389 Sala 2005, Set Central, Goiânia GO</p>

        <hr className="my-6 border-zinc-200" />

        {/* Bottom row: copyright and socials */}
        <div className="flex flex-col-reverse gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs text-zinc-500">©2025 Powered by SYSGO LTDA | CNPJ: 55.997.256/0001-07</p>
            <p className="text-xs text-zinc-500">Todos os direitos reservados.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="YouTube" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-[#104E49] hover:text-[#0d3f3b]"><span className="material-symbols-outlined">play_circle</span></a>
            <a href="#" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-[#104E49] hover:text-[#0d3f3b]"><span className="material-symbols-outlined">photo_camera</span></a>
            <a href="#" aria-label="WhatsApp" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-[#104E49] hover:text-[#0d3f3b]"><span className="material-symbols-outlined">chat</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
