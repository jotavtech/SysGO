import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-zinc-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Left block: logo and address */}
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <Image src="/assets/images/logo.webp" alt="SysGO" width={40} height={40} className="rounded" />
              <div className="leading-tight">
                <p className="font-semibold text-emerald-800">SysGO</p>
                <p className="text-xs text-zinc-500">Soluções que simplificam</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-zinc-600">Avenida Anhanguera 5389 Sala 2005, Set Central, Goiânia GO</p>

            <hr className="my-6 border-zinc-200" />
            <p className="text-xs text-zinc-500">©2025 Powered by SYSGO LTDA | CNPJ: 55.997.256/0001-07</p>
            <p className="text-xs text-zinc-500">Todos os direitos reservados.</p>
          </div>

          {/* Right block: nav links and seals/socials */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6 items-start">
            <nav className="col-span-2 md:col-span-1">
              <ul className="space-y-2 text-sm text-zinc-700">
                <li><Link href="#inicio" className="hover:text-[#104E49]">Início</Link></li>
                <li><Link href="#servicos" className="hover:text-[#104E49]">Serviços</Link></li>
                <li><Link href="#sistemas" className="hover:text-[#104E49]">Sistemas</Link></li>
                <li><Link href="#depoimentos" className="hover:text-[#104E49]">Depoimentos</Link></li>
                <li><Link href="#contato" className="hover:text-[#104E49]">Contato</Link></li>
              </ul>
            </nav>

            <div className="col-span-2 md:col-span-2 flex items-center gap-4 md:justify-end">
              <Image src="/assets/images/sysgo.webp" alt="Selo" width={64} height={32} />
              <div className="flex items-center gap-4">
                <a href="#" aria-label="YouTube" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-[#104E49] hover:text-[#0d3f3b]">
                  <span className="material-symbols-outlined">play_circle</span>
                </a>
                <a href="#" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-[#104E49] hover:text-[#0d3f3b]">
                  <span className="material-symbols-outlined">photo_camera</span>
                </a>
                <a href="#" aria-label="WhatsApp" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-[#104E49] hover:text-[#0d3f3b]">
                  <span className="material-symbols-outlined">chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
