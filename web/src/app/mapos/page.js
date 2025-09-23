import MapOS from "@/components/MapOS";

export const metadata = {
  title: "Map-OS — SysGO",
  description:
    "Map-OS é o sistema de ordem de serviço simples e intuitivo da SysGO. Organize sua operação com clareza, controle e tempo.",
};

export default function MapOSPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 w-full max-w-[100vw]">
      <main>
        <MapOS />
      </main>
    </div>
  );
}
