"use client";

import { useEffect } from "react";

export default function TrialModal({ open, onClose, onSubmit }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    onSubmit?.(data);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative z-10 w-full max-w-lg mx-4 rounded-xl bg-white shadow-xl">
        <div className="px-6 py-4 border-b border-zinc-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-zinc-900">Solicitar Teste</h3>
          <button
            aria-label="Fechar"
            className="p-2 rounded-md hover:bg-zinc-100"
            onClick={onClose}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-5">
          <p className="text-sm text-zinc-600 mb-4">Preencha os dados para testar o sistema Map-OS</p>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-800 mb-1">Nome Completo *</label>
              <input name="fullName" required type="text" className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#104E49]" placeholder="Seu nome" />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-800 mb-1">Nome da Empresa *</label>
              <input name="company" required type="text" className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#104E49]" placeholder="Sua empresa" />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-800 mb-1">E-mail *</label>
              <input name="email" required type="email" className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#104E49]" placeholder="voce@empresa.com" />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-800 mb-1">Celular (WhatsApp) *</label>
              <input name="phone" required type="tel" className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#104E49]" placeholder="(00) 00000-0000" />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-800 mb-1">Subdomínio do Sistema *</label>
              <div className="flex gap-2">
                <input name="subdomain" required type="text" className="w-1/2 rounded-md border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#104E49]" placeholder="nomedaempresa" />
                <select name="domain" required className="w-1/2 rounded-md border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#104E49]">
                  <option value="">Selecione uma opção</option>
                  <option value="sysgo.com.br">sysgo.com.br</option>
                  <option value="mapos.online">mapos.online</option>
                  <option value="mapos.store">mapos.store</option>
                  <option value="mapos.cloud">mapos.cloud</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-3">
            <button type="button" className="h-10 rounded-md border border-zinc-300 px-4 text-sm font-medium text-zinc-800 hover:bg-zinc-50" onClick={onClose}>Cancelar</button>
            <button type="submit" className="h-10 rounded-md bg-[#104E49] px-4 text-sm font-semibold text-white hover:bg-[#0d3f3b]">Solicitar Teste</button>
          </div>
        </form>
      </div>
    </div>
  );
}
