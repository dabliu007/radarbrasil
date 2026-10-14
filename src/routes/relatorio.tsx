import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { useTargetName } from "@/lib/use-target-name";
import manBeach1 from "@/assets/man-beach-1.jpg.asset.json";
import manBeach2 from "@/assets/man-beach-2.jpg.asset.json";
import manBeach3 from "@/assets/man-beach-3.jpg.asset.json";
import womanFlirt1 from "@/assets/woman-flirt-1.jpg";
import womanFlirt2 from "@/assets/woman-flirt-2.jpg";
import womanFlirt3 from "@/assets/woman-flirt-3.jpg";

const provaH1 = "/prova-h-1.jpg";
const provaH2 = "/prova-h-2.jpg";
const provaH3 = "/prova-h-3.jpg";
const provaH4 = "/prova-h-4.jpg";
const provaH5 = "/prova-h-5.jpg";
const provaH6 = "/prova-h-6.jpg";
const contatoHExtra1 = "/prova-m-1.jpg";
const contatoHExtra2 = "/prova-m-2.jpg";
const contatoHExtra3 = "/prova-m-3.jpg";
const contatoHExtra4 = "/prova-m-4.jpg";

import phoneChat from "@/assets/phone-chat.jpg.asset.json";
const audioContato1 = "/audio-contato-1.mp3";
const audioContato2 = "/audio-contato-2.mp3";
const audioContato3 = "/audio-contato-3.mp3";
const audioContatoH1 = "/audio-contato-h-1.mp3";
const audioContatoH2 = "/audio-contato-h-2.mp3";
const audioContatoH3 = "/audio-contato-h-3.mp3";

const searchSchema = z.object({
  phone: z.coerce.string().optional().default(""),
  sex: z.enum(["M", "F"]).optional().default("M"),
  paid: z.coerce.number().optional().default(0),
  uf: z.coerce.string().optional().default(""),
  city: z.coerce.string().optional().default(""),
});

export const Route = createFileRoute("/relatorio")({
  head: () => ({
    meta: [
      { title: "Relatório de Atividades — ZapRadar Brasil" },
      {
        name: "description",
        content:
          "Pré-visualização do relatório de atividades do dispositivo acompanhado: aplicativos, contatos e localização.",
      },
      { property: "og:title", content: "Relatório de Atividades — ZapRadar Brasil" },
      {
        property: "og:description",
        content:
          "Aplicativos, tempo de uso e localização do dispositivo acompanhado.",
      },
      { property: "og:url", content: "https://zapradar.top/relatorio" },
      { name: "robots", content: "noindex,follow" },
    ],
    links: [{ rel: "canonical", href: "https://zapradar.top/relatorio" }],
  }),
  validateSearch: (s) => searchSchema.parse(s),
  component: RelatorioPage,
});

function AudioPlayer({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);

  const fmt = (t: number) => {
    if (!Number.isFinite(t)) return "0:00";
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) {
      void el.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="flex items-center gap-2.5">
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => {
          const el = e.currentTarget;
          setCurrent(el.currentTime);
          setProgress(el.duration ? (el.currentTime / el.duration) * 100 : 0);
        }}
        onEnded={() => {
          setPlaying(false);
          setProgress(0);
          setCurrent(0);
        }}
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pausar áudio" : "Reproduzir áudio"}
        className="flex-shrink-0 w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center hover:bg-emerald-400 transition-colors"
      >
        {playing ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
      <div className="flex-1 min-w-0">
        <div className="h-1.5 rounded-full bg-zinc-700 overflow-hidden">
          <div className="h-full bg-emerald-500 transition-[width] duration-150" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <span className="flex-shrink-0 text-[9px] text-zinc-400 font-['Geist_Mono',monospace] tabular-nums">
        {fmt(current)} / {fmt(duration)}
      </span>
    </div>
  );
}

function RelatorioPage() {
  const { phone, sex, paid, uf: ufParam, city: cityParam } = Route.useSearch();
  const navigate = useNavigate();
  const locked = !paid;
  const [showLicenseModal, setShowLicenseModal] = useState(false);

  const displayPhone = phone || "(00) 0 0000-0000";
  const [reportId, setReportId] = useState<number | null>(null);
  const [uf, setUf] = useState<string>(ufParam || "");
  const [city, setCity] = useState<string>(cityParam || "");
  useEffect(() => {
    setReportId(Math.floor(Math.random() * 90000 + 10000));
    if (typeof window !== "undefined") {
      if (!ufParam) setUf(sessionStorage.getItem("zr.partner.uf") || "");
      if (!cityParam) setCity(sessionStorage.getItem("zr.partner.city") || "");
    }
  }, [ufParam, cityParam]);
  const targetName = useTargetName();
  const doDispositivo = targetName ? `de ${targetName}` : "do dispositivo";
  const oDispositivo = targetName ?? "o dispositivo";
  const dispositivoLabel = targetName ?? "Dispositivo";

  const contatoIsWoman = sex === "M";
  const contatoImgs = contatoIsWoman
    ? [womanFlirt1, womanFlirt2, womanFlirt3]
    : [manBeach1.url, manBeach2.url, manBeach3.url];

  const mensagensQuentes = [
    { from: "Contato", text: `Oi! Você é muito simpática. Me passa seu insta?`, time: "23:47", tipo: "recebida" },
    { from: "Dispositivo", text: `Hmm, quem é você? Como achou meu número?`, time: "23:49", tipo: "enviada" },
    { from: "Contato", text: `Um amigo me passou. Bora jogar junto online?`, time: "00:12", tipo: "recebida" },
    { from: "Dispositivo", text: "Não te conheço. Vou perguntar pra minha mãe.", time: "00:14", tipo: "enviada" },
    { from: "Contato", text: `Relaxa, não precisa contar pra ninguém. Fica entre a gente.`, time: "00:15", tipo: "recebida" },
    { from: "Dispositivo", text: `Não. Vou apagar essa conversa.`, time: "00:16", tipo: "enviada" },
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-zinc-100 font-['Inter',sans-serif] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(128,128,128,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(128,128,128,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/[0.06] blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-lg mx-auto px-4 py-8 space-y-5">
        <h1 className="sr-only">Relatório de atividades do dispositivo acompanhado</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-zinc-900 border border-emerald-500/40 rounded-xl flex items-center justify-center">
              <span className="text-emerald-400 text-lg">📂</span>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-400/80 font-['Geist_Mono',monospace]">
                Relatório #ZR-{reportId ?? "—"}
              </div>
              <div className="text-sm font-bold">
                {dispositivoLabel}: <span className="font-['Geist_Mono',monospace] text-emerald-300">{displayPhone}</span>
              </div>
            </div>
          </div>
          <span className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded-md font-bold ${locked ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 animate-pulse" : "bg-yellow-500/15 text-yellow-300 border border-yellow-500/30"}`}>
            {locked ? "🔒 BLOQUEADO" : "✅ LIBERADO"}
          </span>
        </div>

        <div className="bg-gradient-to-br from-emerald-600/25 to-emerald-900/10 border-2 border-emerald-500/50 rounded-2xl p-5 shadow-[0_0_40px_-10px_rgba(16,185,129,0.6)]">
          <div className="flex items-center gap-2.5 mb-4 pb-4 border-b border-emerald-500/30">
            <span className="text-3xl animate-pulse">🛡️</span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase leading-none tracking-tight text-emerald-400 drop-shadow-[0_0_14px_rgba(16,185,129,0.5)]">
              Atividades encontradas
            </h2>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🔍</span>
            <div className="space-y-2">
              <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-300 font-['Geist_Mono',monospace] font-bold">
                Resultado do acompanhamento
              </div>
              <p className="text-[15px] text-zinc-100 leading-snug font-semibold">
                Encontramos <span className="text-emerald-400 font-extrabold">indícios que merecem atenção</span> neste dispositivo.
              </p>
              <p className={`text-[13px] text-zinc-300 leading-snug ${locked ? "blur-[5px] select-none" : ""}`}>
                Mensagens de <span className="text-emerald-300 font-bold">contatos desconhecidos</span>, acesso a conteúdo impróprio e uso excessivo em horários de descanso na última semana.
              </p>
              {locked && (
                <p className="text-[12px] text-emerald-300/90 leading-snug font-bold uppercase tracking-wider">
                  🔒 Detalhes ocultos — desbloqueie para ver
                </p>
              )}
              <p className="text-[13px] text-emerald-200 leading-snug italic">
                Identificar cedo permite agir antes que vire um problema maior.
              </p>
            </div>
          </div>
        </div>

        <Section title="O que foi encontrado">
          <SummaryRow label="📱 Aplicativos instalados" value="47" locked={locked} highlight />
          <SummaryRow label="⏱️ Tempo de tela diário (média)" value="6h42m" locked={locked} highlight />
          <SummaryRow label="👤 Contatos desconhecidos (30 dias)" value="8" locked={locked} highlight />
          <SummaryRow label="🔞 Conteúdo impróprio acessado" value="12" locked={locked} highlight />
          <SummaryRow label="🎮 Aplicativos de jogos" value="9" locked={locked} highlight />
          <SummaryRow label="🌙 Uso entre 23h e 5h" value="318 min" locked={locked} highlight />
          <SummaryRow label="📍 Última localização registrada" value="hoje, 02:47" locked={locked} />
        </Section>

        <Section title="💬 Conversas com contatos desconhecidos">
          <p className="text-[12px] text-zinc-400 -mt-1 mb-2">
            {locked
              ? `Detectamos conversas com ${oDispositivo} que não estão na lista de contatos. Acesso liberado após desbloqueio.`
              : `Conversas com contatos que ${oDispositivo} não conhece. Veja uma amostra:`}
          </p>
          <div className="space-y-2 relative">
            {(locked ? mensagensQuentes.slice(0, 3) : mensagensQuentes).map((m, i) => (
              <div
                key={i}
                className={`rounded-2xl p-3 border ${
                  m.tipo === "enviada"
                    ? "bg-emerald-900/20 border-emerald-700/30 ml-8"
                    : "bg-zinc-900 border-zinc-800 mr-8"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[11px] font-bold ${m.tipo === "enviada" ? "text-emerald-300" : "text-emerald-300"}`}>
                    {locked ? "████████" : m.from}
                  </span>
                  <span className="text-[10px] text-zinc-500 font-['Geist_Mono',monospace]">
                    {locked ? "██:██" : m.time}
                  </span>
                </div>
                <p className="text-[13px] text-zinc-100">
                  {m.text}
                </p>
              </div>
            ))}
            {locked && (
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080808] via-[#080808]/80 to-transparent pointer-events-none" />
            )}
          </div>
          {locked && (
            <div className="text-center pt-2 space-y-1">
              <p className="text-[13px] text-emerald-300 font-bold">
                + 14 conversas com desconhecidos bloqueadas
              </p>
            </div>
          )}
        </Section>

        <Section title="🖼️ Conteúdo detectado">
          <p className="text-[12px] text-zinc-400 -mt-1 mb-2">
            {locked
              ? "Conteúdo impróprio acessado pelo dispositivo. Acesso bloqueado."
              : "Conteúdo sinalizado pelo sistema de proteção."}
          </p>
          <div className="grid grid-cols-3 gap-2">
            {[contatoImgs[0], contatoImgs[1], contatoImgs[2], contatoImgs[0], contatoImgs[1], contatoImgs[2]].map((src, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl bg-zinc-900 border border-zinc-800 relative overflow-hidden"
              >
                <img
                  src={src}
                  alt=""
                  className={`w-full h-full object-cover ${locked ? "blur-[14px] scale-110 select-none" : ""}`}
                  draggable={false}
                />
                {locked && (
                  <>
                    <div className="absolute inset-0 bg-zinc-950/40" />
                    <span className="absolute inset-0 flex items-center justify-center text-emerald-300 text-xl">🔒</span>
                    <span className="absolute bottom-1 right-1 text-[8px] font-bold text-emerald-300 bg-zinc-950/80 px-1 py-0.5 rounded font-['Geist_Mono',monospace]">+18</span>
                  </>
                )}
              </div>
            ))}
          </div>
          <p className="text-[11px] text-zinc-500 text-center pt-1">
            {locked
              ? "⚠️ Conteúdo censurado pelo sistema até o desbloqueio"
              : "⚠️ Conteúdo sensível — recomendamos acompanhar junto."}
          </p>
        </Section>

        <Section title="💳 Gastos acompanhados">
          <p className="text-[12px] text-zinc-400 -mt-1 mb-3">
            Resumo dos gastos feitos pelo dispositivo nos últimos 30 dias.
          </p>
          <div className="rounded-2xl border border-amber-500/40 bg-gradient-to-br from-zinc-950 to-amber-950/10 overflow-hidden shadow-[0_0_30px_rgba(245,158,11,0.12)]">
            <div className="flex items-center justify-between px-3 py-2 border-b border-amber-500/30 bg-zinc-950/70">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-[10px] font-['Geist_Mono',monospace] uppercase tracking-wider text-amber-200">
                  🏦 Gastos · Últimos 30 dias
                </span>
              </div>
              <span className="text-[9px] text-zinc-500 font-['Geist_Mono',monospace]">RESUMO</span>
            </div>
            <div className="p-3 bg-zinc-950/60">
              <div className={`space-y-1.5 ${locked ? "blur-[5px] select-none" : ""}`}>
                {[
                  { d: "██/██", desc: "JOGO · ██████ (pacote de moedas)", v: "-87,00", tag: "JOGO" },
                  { d: "██/██", desc: "APP · ASSINATURA ██████", v: "-29,90", tag: "APP" },
                  { d: "██/██", desc: "DELIVERY · ██████ (2 itens)", v: "-54,90", tag: "LANCHE" },
                  { d: "██/██", desc: "STREAMING · ██████", v: "-39,90", tag: "VIDEO" },
                  { d: "██/██", desc: "JOGO · ██████ (skin)", v: "-120,00", tag: "JOGO" },
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-2 text-[10px] font-mono border-b border-zinc-800/60 pb-1.5">
                    <span className="text-zinc-500 w-10 shrink-0">{t.d}</span>
                    <span className="flex-1 text-zinc-200 truncate">{t.desc}</span>
                    <span className="text-[8px] px-1.5 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/40 text-emerald-200 uppercase tracking-wider shrink-0">
                      {t.tag}
                    </span>
                    <span className="text-emerald-300 font-bold w-16 text-right shrink-0">{t.v}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between mt-3 pt-2 border-t border-amber-500/30">
                <span className="text-[10px] text-zinc-400 font-mono uppercase">Total acompanhado no mês</span>
                <span className="text-[15px] font-black text-emerald-300">R$ {locked ? "█.███,██" : "331,70"}</span>
              </div>
            </div>
            {locked && (
              <div className="px-3 py-2 bg-emerald-950/40 border-t border-emerald-500/30 text-[11px] text-emerald-200 text-center">
                🔒 Estabelecimentos e valores revelados no desbloqueio
              </div>
            )}
          </div>
        </Section>

        <Section title="🌐 Atividade nas redes sociais">
          <p className="text-[12px] text-zinc-400 -mt-1 mb-3">
            Perfis seguidos e tempo de uso por aplicativo.
          </p>
          <div className="bg-gradient-to-br from-emerald-950/30 to-zinc-950 border border-emerald-500/30 rounded-2xl p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-300 font-bold font-['Geist_Mono',monospace]">🎙️ Áudios recebidos</span>
              <span className="text-[9px] bg-emerald-500/20 text-emerald-200 border border-emerald-500/30 rounded px-2 py-0.5 font-bold">3 áudios</span>
            </div>
            <p className="text-[11px] text-emerald-200/90 mb-3 leading-snug">
              Áudios recebidos de contatos fora da lista — o conteúdo pode indicar abordagem de desconhecidos.
            </p>
            <div className="space-y-2.5">
              {(contatoIsWoman
                ? [
                    { src: audioContato1, hora: "12:47", label: "Contato desconhecido" },
                    { src: audioContato2, hora: "22:14", label: "Contato desconhecido" },
                    { src: audioContato3, hora: "01:32", label: "Contato desconhecido" },
                  ]
                : [
                    { src: audioContatoH1, hora: "12:47", label: "Contato desconhecido" },
                    { src: audioContatoH2, hora: "22:14", label: "Contato desconhecido" },
                    { src: audioContatoH3, hora: "01:32", label: "Contato desconhecido" },
                  ]
              ).map((a, i) => (
                <div key={i} className="bg-zinc-900/80 border border-emerald-500/20 rounded-xl p-2.5">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] text-emerald-300 font-bold">🎙️ Áudio {i + 1} · {a.label}</span>
                    <span className="text-[9px] text-zinc-500 font-['Geist_Mono',monospace]">{a.hora}</span>
                  </div>
                  <AudioPlayer src={a.src} />
                </div>
              ))}
            </div>
            <p className="text-[10px] text-emerald-300/80 text-center pt-3 font-bold border-t border-emerald-500/20 mt-3">
              ⚠️ Áudios de contatos não identificados — verifique junto com seu filho.
            </p>
          </div>
        </Section>

        <Section title="🧠 Insights de comportamento">
          <p className="text-[12px] text-zinc-400 -mt-1 mb-2">
            Padrões de uso e pontos de atenção identificados.
          </p>
          <div className="bg-gradient-to-b from-emerald-950/40 to-zinc-950 border border-emerald-900/50 rounded-xl p-4 space-y-3 text-[13px] text-zinc-200 leading-relaxed">
            <p>
              📱 <span className="font-bold text-emerald-300">Pico de uso durante a madrugada</span> — 42% do tempo de tela acontece entre <b>23h e 5h</b>, prejudicando o sono.
            </p>
            <p>
              🎮 <span className="font-bold text-emerald-300">Tempo elevado em jogos</span> — média de <b>3h20m por dia</b> em aplicativos de jogos.
            </p>
            <p>
              👤 <span className="font-bold text-amber-300">ALERTA:</span> novos contatos adicionados recentemente, com <span className="font-bold text-emerald-300">origem não identificada</span>.
            </p>
            <p>
              🔞 <span className="font-bold text-emerald-300">Tentativas de acesso a conteúdo impróprio</span> registradas — bloqueadas pelo sistema.
            </p>
          </div>
          {locked && (
            <p className="text-center text-[11px] text-emerald-300/80 font-bold pt-2 uppercase tracking-wider">
              🔒 Detalhes completos com nomes e horários — desbloqueie agora
            </p>
          )}
        </Section>

        <Section title="📍 Histórico de localização">
          <p className="text-[12px] text-zinc-400 -mt-1 mb-2">
            Locais onde {oDispositivo} esteve nos últimos dias.
          </p>
          <div className={`bg-zinc-950 border border-zinc-800 rounded-xl p-4 ${locked ? "blur-[6px] select-none" : ""}`}>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span>🏫</span>
                <div>
                  <div className="font-semibold text-zinc-100">Escola — período da tarde</div>
                  <div className="text-[11px] text-zinc-500 font-['Geist_Mono',monospace]">22/06 · 13:00 — 17:40</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span>🏠</span>
                <div>
                  <div className="font-semibold text-zinc-100">Em casa</div>
                  <div className="text-[11px] text-zinc-500 font-['Geist_Mono',monospace]">21/06 · 18:10 — 23:55</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span>⚽</span>
                <div>
                  <div className="font-semibold text-zinc-100">Quadra esportiva</div>
                  <div className="text-[11px] text-zinc-500 font-['Geist_Mono',monospace]">20/06 · 16:00 — 18:30</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <div>
                  <div className="font-semibold text-zinc-100">Deslocamento não informado</div>
                  <div className="text-[11px] text-zinc-500 font-['Geist_Mono',monospace]">18/06 · 20:00 — 21:15</div>
                </div>
              </li>
            </ul>
          </div>
          {locked && (
            <p className="text-center text-[11px] text-emerald-300/80 font-bold pt-2 uppercase tracking-wider">
              🔒 Endereços e horários bloqueados
            </p>
          )}
        </Section>

        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4 space-y-2">
          <p className="text-[13px] text-zinc-300 leading-snug italic">
            "Acompanhar não é vigiar. É estar presente. <span className="text-emerald-300 font-semibold">Os dados acima são um resumo</span> do que o dispositivo registrou."
          </p>
          <p className="text-[12px] text-zinc-500">— Equipe de acompanhamento ZapRadar Brasil</p>
        </div>

        {locked && (
          <div className="bg-gradient-to-br from-emerald-950/40 to-zinc-900/80 backdrop-blur-xl border-2 border-emerald-500/40 rounded-3xl p-5 shadow-[0_20px_60px_rgba(16,185,129,0.18)] relative overflow-hidden space-y-3">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
            <div className="flex items-center gap-2">
              <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-emerald-300 font-['Geist_Mono',monospace] font-bold bg-emerald-500/15 border border-emerald-500/40 rounded-full px-3 py-1">
                🎁 Bônus incluso · grátis
              </span>
              <span className="text-[10px] uppercase tracking-wider bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 rounded-md px-2 py-0.5 font-bold font-['Geist_Mono',monospace]">
                30 dias
              </span>
            </div>

            <h2 className="text-[20px] font-extrabold leading-tight text-zinc-100">
              Acompanhamento <span className="text-emerald-400">completo e em tempo real</span> por 30 dias
            </h2>

            <p className="text-[13px] text-zinc-300 leading-snug">
              Direto do <span className="font-semibold text-zinc-100">seu próprio celular</span>, você acompanha <span className="text-emerald-300 font-semibold">a atividade do dispositivo</span> com responsabilidade.
            </p>

            <div className="bg-zinc-950/60 border border-zinc-800 rounded-xl p-3 space-y-1.5">
              <p className="text-[12px] text-zinc-200 font-semibold mb-1">O que o acompanhamento libera:</p>
              <p className="text-[12px] text-zinc-300">✅ Aplicativos instalados e tempo de uso</p>
              <p className="text-[12px] text-zinc-300">✅ Contatos e conversas de desconhecidos</p>
              <p className="text-[12px] text-zinc-300">✅ Localização em tempo real e histórico</p>
            </div>

            <p className="text-[11px] text-emerald-300/90 font-['Geist_Mono',monospace] uppercase tracking-wider">
              Ativado automaticamente após o desbloqueio do relatório
            </p>
          </div>
        )}

        {locked && (
          <div className="bg-gradient-to-br from-emerald-950/40 to-zinc-900/80 backdrop-blur-xl border-2 border-emerald-500/50 rounded-3xl p-6 shadow-[0_20px_60px_rgba(16,185,129,0.25)] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

            <div className="text-center space-y-3">
              <div className="inline-block text-[10px] uppercase tracking-[0.2em] text-emerald-300 font-['Geist_Mono',monospace] font-bold bg-emerald-500/15 border border-emerald-500/40 rounded-full px-3 py-1">
                💬 Acompanhamento pronto
              </div>

              <h2 className="text-2xl font-extrabold leading-tight">
                O dispositivo {doDispositivo} está <span className="text-emerald-400">sincronizado</span> agora
              </h2>

              <p className="text-[13px] text-zinc-300 leading-snug">
                Ative sua <span className="text-emerald-300 font-semibold">Licença Zap Radar</span> e acesse o painel completo de acompanhamento {doDispositivo}.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowLicenseModal(true)}
              className="mt-5 flex w-full min-h-14 items-center justify-center text-center bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-extrabold rounded-2xl transition-all active:scale-[0.98] shadow-[0_0_40px_-8px_rgba(16,185,129,0.8)] uppercase tracking-wide px-4 py-3 text-[14px] leading-tight sm:text-[16px]"
            >
              📱 Acessar Painel de Acompanhamento
            </button>

            <p className="text-center text-[11px] text-zinc-500 mt-3 flex items-center justify-center gap-1.5">
              <span>🔒</span> Dados protegidos · acompanhamento em tempo real
            </p>
          </div>
        )}

        {paid ? (
          <div className="bg-emerald-600/15 border border-emerald-500/40 rounded-2xl p-4 text-center text-emerald-200 text-sm font-semibold">
            ✅ Pagamento confirmado — todas as informações foram liberadas.
          </div>
        ) : null}

        <Link
          to="/"
          className="block w-full text-center text-[11px] font-['Geist_Mono',monospace] uppercase tracking-[0.2em] text-zinc-600 hover:text-zinc-400 transition-colors py-4"
        >
          ← voltar
        </Link>
      </div>

      {showLicenseModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm grid place-items-center px-4 animate-in fade-in duration-200"
          onClick={() => setShowLicenseModal(false)}
        >
          <div
            className="w-full max-w-sm bg-zinc-950 border border-emerald-500/40 rounded-3xl p-6 shadow-[0_0_60px_-10px_rgba(16,185,129,0.5)] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowLicenseModal(false)}
              className="absolute top-3 right-4 text-zinc-500 hover:text-zinc-100 text-xl"
              aria-label="Fechar"
            >
              ✕
            </button>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/15 border border-emerald-500/40 grid place-items-center text-3xl mb-3">
                🛡️
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-300 font-bold font-['Geist_Mono',monospace]">
                Licença Zap Radar necessária
              </div>
              <h2 className="mt-2 text-2xl font-extrabold leading-tight text-zinc-100">
                Ative a <span className="text-emerald-400">Licença Zap Radar</span> e acompanhe o dispositivo por 365 dias
              </h2>
              <p className="mt-3 text-[13.5px] text-zinc-300 leading-snug">
                O acompanhamento já está ativo. Para <strong>ver o painel completo de atividades</strong>,
                é necessário ativar a <strong>Licença Zap Radar</strong> — que libera o acesso completo por <strong>365 dias</strong>.
              </p>
            </div>

            <ul className="mt-4 space-y-1.5 text-[13px] text-zinc-200">
              <li className="flex gap-2"><span className="text-emerald-400 font-bold">✓</span> <span>Acesso completo ao painel por <strong>365 dias</strong></span></li>
              <li className="flex gap-2"><span className="text-emerald-400 font-bold">✓</span> <span>Atividades, aplicativos e tempo de uso</span></li>
              <li className="flex gap-2"><span className="text-emerald-400 font-bold">✓</span> <span>Localização em tempo real e histórico</span></li>
              <li className="flex gap-2"><span className="text-emerald-400 font-bold">✓</span> <span>Alertas de contatos desconhecidos e conteúdo impróprio</span></li>
            </ul>

            <button
              onClick={() => {
                setShowLicenseModal(false);
                navigate({ to: "/atividades", search: { phone, sex } });
              }}
              className="mt-5 w-full h-14 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-extrabold rounded-2xl transition-all active:scale-[0.98] shadow-[0_0_40px_-8px_rgba(16,185,129,0.8)] text-[15px] uppercase tracking-wide"
            >
              🔓 ATIVAR LICENÇA ZAP RADAR
            </button>
            <p className="text-center text-[11px] text-zinc-500 mt-2">
              🔒 PIX R$ 47,00 · ativação em segundos · válido por 365 dias
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-2">
      <h3 className="text-[11px] uppercase tracking-[0.2em] text-emerald-400/80 font-['Geist_Mono',monospace]">
        {title}
      </h3>
      {children}
    </section>
  );
}

function SummaryRow({
  label,
  value,
  locked,
  highlight,
}: {
  label: string;
  value: string;
  locked: boolean;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between bg-zinc-950 border rounded-xl px-4 py-2.5 ${
        highlight ? "border-emerald-500/30" : "border-zinc-800"
      }`}
    >
      <span className="text-[13px] text-zinc-300">{label}</span>
      <span
        className={`text-sm font-extrabold font-['Geist_Mono',monospace] ${
          highlight ? "text-emerald-300" : "text-yellow-300"
        } ${locked ? "blur-[7px] select-none" : ""}`}
      >
        {locked ? "███" : value}
      </span>
    </div>
  );
}
