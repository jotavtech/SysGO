import Image from "next/image";
import Link from "next/link";

const items = [
  {
    name: "Guilherme Fernandes",
    company: "Smart Telecom",
    avatar: "/assets/images/testimonial-author-1.webp",
    quote:
      "Atendimento e serviço prestados excelentes, muito rápido e atencioso aos detalhes.",
  },
  {
    name: "Wilmar Martins",
    company: "Controller Elevadores",
    avatar: "/assets/images/testimonial-author-2.webp",
    quote:
      "Nossos projetos se tornaram realidade, sempre dentro dos prazos estipulados, superou todas as nossas expectativas.",
  },
  {
    name: "Genes Cruz",
    company: "GR Store Cell",
    avatar: "/assets/images/testimonial-author-3.webp",
    quote:
      "Atendimento e prestação do serviço excelente, site sempre rápido e eficaz. Sucesso sempre!",
  },
  {
    name: "Bernardo Moreira",
    company: "Barão Informática",
    avatar: "/assets/images/testimonial-author-4.webp",
    quote:
      "Ótimo atendimento! Fiquei despreocupado quando fiquei na mão com a antiga plataforma. Suporte eficiente e ágil!",
  },
];

function TestimonialCard({ item }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <Image src={item.avatar} alt={item.name} width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
        <div>
          <p className="font-semibold text-zinc-900 leading-tight">{item.name}</p>
          <p className="text-xs text-zinc-500">{item.company}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-zinc-700 leading-relaxed">“{item.quote}”</p>
      <div className="mt-4">
        <span className="inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50/70 px-3 py-1 text-[11px] font-semibold text-emerald-700">
          Instância MAP-OS
        </span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative w-full py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-emerald-800">
            Faça como os nossos clientes e destrave o próximo nível da sua empresa
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {items.map((item, idx) => (
            <TestimonialCard key={idx} item={item} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="#teste" className="inline-flex h-11 items-center rounded-full bg-emerald-700 px-6 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800">
            Testar agora por 7 dias grátis
          </Link>
        </div>
      </div>
    </section>
  );
}
