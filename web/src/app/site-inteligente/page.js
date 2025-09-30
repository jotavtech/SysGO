import SmartSiteClean from "@/components/SmartSiteClean";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Site Inteligente | SysGO",
  description: "Sistema sob medida, do jeito que sua empresa precisa.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 w-full max-w-[100vw]">
      <main>
        <SmartSiteClean />
        <Footer />
      </main>
    </div>
  );
}
