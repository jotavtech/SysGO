"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TrialModal from "@/components/TrialModal";

export default function Hero() {
  const [openTrial, setOpenTrial] = useState(false);
  const handleSubmitTrial = (data) => {
    // Placeholder de ação: aqui você pode enviar para uma API/Email/CRM
    console.log("Solicitação de teste:", data);
    alert("Solicitação enviada! Entraremos em contato em breve.");
    setOpenTrial(false);
  };

  return (
    <section id="inicio" className="relative w-full overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-screen grid-bg-black" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex flex-col items-center text-center gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#104E49]/20 bg-white px-4 py-1 text-xs font-medium text-[#104E49] shadow-sm">
            <span className="material-symbols-outlined text-[#104E49] text-base leading-none" aria-hidden>bolt</span>
            SOLUÇÕES EM NUVEM
          </span>

          <h1 className="max-w-3xl text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-[#104E49]">
            Seu negócio mais ágil, com sistemas
            <br />
            que simplificam sua rotina.
          </h1>

          <p className="max-w-2xl text-base sm:text-lg text-zinc-600">
            Sistemas intuitivos para ordem de serviço, sites, painéis personalizados e mais. Tudo que sua empresa precisa para
            funcionar com mais controle, organização e tranquilidade.
          </p>

          <div className="mt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={() => setOpenTrial(true)}
              className="inline-flex h-11 items-center rounded-full bg-[#104E49] px-6 text-sm font-semibold text-white shadow-sm hover:bg-[#0d3f3b]"
            >
              Teste grátis por 7 dias
            </button>
            <Link href="/fale-conosco" className="inline-flex h-11 items-center rounded-full border border-zinc-200 bg-white px-6 text-sm font-medium text-zinc-800 shadow-sm hover:bg-zinc-50">
              Entrar em contato
            </Link>
          </div>
        </div>

        <div className="mt-20">
          <p className="text-xs uppercase tracking-wide text-zinc-500 text-center mb-4">Mais de 50 empresas já confiam na SysGO</p>
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8 opacity-90">
            {[
              "/assets/images/logo.webp",
              "/assets/images/logo-white.webp",
              "/assets/images/sysgo.webp",
              "/assets/images/logo-bkp.webp",
              "/assets/images/testimonial-author-1.webp",
              "/assets/images/testimonial-author-2.webp",
            ].map((src, i) => (
              <Image key={i} src={src} alt="logo" width={150} height={40} className="h-10 w-auto object-contain grayscale" />
            ))}
          </div>
        </div>
      </div>
      <TrialModal open={openTrial} onClose={() => setOpenTrial(false)} onSubmit={handleSubmitTrial} />
    </section>
  );
}
