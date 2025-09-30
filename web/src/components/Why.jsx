import Link from "next/link";

const features = [
  {
    icon: "support_agent",
    title: "Suporte direto e sempre disponível",
    desc: "com quem resolve",
  },
  {
    icon: "construction",
    title: "Sistemas criados com base",
    desc: "nas dores reais do dia a dia",
  },
  {
    icon: "savings",
    title: "Soluções que cabem no bolso",
    desc: "e crescem com sua empresa",
  },
  {
    icon: "handshake",
    title: "Atendimento humanizado",
    desc: "e próximo",
  },
  {
    icon: "hub",
    title: "Integrações simples",
    desc: "sem dor de cabeça",
  },
];

export default function Why() {
  return (
    <section className="relative w-full bg-[#104E49] text-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-10">Por que escolher a SysGO?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur p-5">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-white/90">{f.icon}</span>
                <div>
                  <p className="font-semibold leading-tight">{f.title}</p>
                  <p className="text-white/80 text-sm">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/mapos" className="inline-flex h-11 items-center rounded-full bg-white/95 px-6 text-sm font-semibold text-[#104E49] shadow-sm hover:bg-white">
            Começar agora
          </Link>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -top-6 h-6 bg-white rounded-b-[24px]" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-6 h-6 bg-white rounded-t-[24px]" />
    </section>
  );
}
