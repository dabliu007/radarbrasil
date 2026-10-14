import { createFileRoute } from "@tanstack/react-router";
import { AcompanharPage } from "@/routes/acompanhar";

const SITE_URL = "https://zapradar.top";

const TITLE = "Zap Radar Brasil: Identifique Risco em 5 Minutos (ZapRadar)";

const DESCRIPTION =
  "Zap Radar Brasil: identifique risco em 5 minutos informando apenas o número do WhatsApp. Veja conversas apagadas, fotos ocultas, áudios e localização em tempo real, 100% sigiloso.";

const KEYWORDS = [
  "ZapRadar Brasil",
  "ZapRadar",
  "ZapRadar",
  "ZapRadar",
  "identificar risco",
  "como identificar risco",
  "identificar risco pelo whatsapp",
  "identificar risco do filho",
  "identificar risco da filha",
  "sincronizar whatsapp",
  "como sincronizar whatsapp",
  "sincronizar whatsapp do filho",
  "sincronizar celular",
  "acessar whatsapp",
  "como acessar whatsapp",
  "app para acessar whatsapp",
  "acessar o whatsapp do filho",
  "acessar o whatsapp da filha",
  "acessar celular",
  "como acessar celular do filho",
  "como acessar celular da filha",
  "acessar celular do filho",
  "acessar celular da filha",
  "acessar whatsapp",
  "como acessar whatsapp",
  "acessar whatsapp do filho",
  "acessar whatsapp da filha",
  "acessar redes sociais",
  "acessar instagram",
  "acessar facebook",
  "ver conversas apagadas do whatsapp",
].join(", ");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: KEYWORDS },
      { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1" },
      { name: "language", content: "pt-BR" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "ZapRadar Brasil · ZapRadar" },
      { property: "og:image", content: `${SITE_URL}/og-image.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "ZapRadar Brasil - Proteja seu filho" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: `${SITE_URL}/og-image.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "ZapRadar Brasil",
          alternateName: ["ZapRadar Brasil", "ZapRadar", "ZapRadar", "ZapRadar"],
          url: `${SITE_URL}/`,
          inLanguage: "pt-BR",
          description: DESCRIPTION,
          potentialAction: {
            "@type": "SearchAction",
            target: `${SITE_URL}/acompanhar?phone={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "ZapRadar Brasil",
          alternateName: ["ZapRadar Brasil", "ZapRadar"],
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Android, iOS, Web",
          url: `${SITE_URL}/`,
          description: DESCRIPTION,
          offers: {
            "@type": "Offer",
            price: "137.00",
            priceCurrency: "BRL",
            availability: "https://schema.org/InStock",
            url: `${SITE_URL}/checkout`,
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "2431",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Como acessar o celular do filho?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No ZapRadar Brasil você informa o número do WhatsApp do seu filho e recebe o sincronismo com conversas apagadas, fotos ocultas, áudios e localização em tempo real em poucos minutos, sem que ele receba qualquer notificação.",
              },
            },
            {
              "@type": "Question",
              name: "Como acessar o celular da filha?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Basta digitar o número do WhatsApp da sua filha no ZapRadar Brasil. O sistema faz a verificação e libera o painel com mensagens apagadas, mídias escondidas e histórico de localização, com sigilo total.",
              },
            },
            {
              "@type": "Question",
              name: "O que é o ZapRadar / ZapRadar Brasil?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Zap Radar é o nome da plataforma que sincroniza o WhatsApp do filho(a) e mostra conversas, fotos, áudios e localização em um painel único.",
              },
            },
            {
              "@type": "Question",
              name: "A pessoa é notificada que o celular foi vinculado?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Não. O processo do ZapRadar Brasil é 100% sigiloso: nenhuma notificação, mensagem ou aviso aparece no aparelho do dispositivo durante ou depois da verificação.",
              },
            },
            {
              "@type": "Question",
              name: "Quanto tempo leva para acessar o WhatsApp?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Em média 5 minutos. Após a verificação do número, o painel é liberado com o histórico recuperado de conversas, fotos, áudios e localização.",
              },
            },
            {
              "@type": "Question",
              name: "Dá para ver conversas já apagadas?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sim. O ZapRadar Brasil recupera mensagens apagadas, fotos e vídeos que somem uma única vez e áudios enviados nas últimas semanas.",
              },
            },
            {
              "@type": "Question",
              name: "Como sincronizar o WhatsApp de outra pessoa?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Com o ZapRadar Brasil você sincroniza o WhatsApp a partir do número do filho(a): o sistema sincroniza as conversas, fotos, áudios e status em um painel sincronizado que você acompanha em tempo real, sem instalar nada no celular do dispositivo.",
              },
            },
            {
              "@type": "Question",
              name: "Como acessar o WhatsApp sem pegar o celular?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Não é preciso pegar o aparelho. Basta informar o número do WhatsApp no ZapRadar Brasil (ZapRadar) e o painel é liberado com o histórico de mensagens, mídias e localização, de forma remota e 100% sigilosa.",
              },
            },
            {
              "@type": "Question",
              name: "Como acessar o WhatsApp do filho ou da filha?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "O termo popular 'acessar WhatsApp' se refere ao sincronismo feito pelo ZapRadar Brasil: você acessa as conversas do filho(a) informando apenas o número, sem acesso e sem que a pessoa receba qualquer aviso no aparelho.",
              },
            },
            {
              "@type": "Question",
              name: "Dá para acessar ou acompanhar redes sociais como Instagram e Facebook?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sim. Além do WhatsApp, o ZapRadar Brasil reúne informações públicas e atividade de redes sociais como Instagram e Facebook Messenger ligadas ao número acompanhado, em um único relatório.",
              },
            },
            {
              "@type": "Question",
              name: "Como acessar o celular do filho ou da filha?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Acessar o celular no ZapRadar Brasil significa sincronizar o conteúdo do WhatsApp e das redes sociais a partir do número. Em poucos minutos você recebe conversas apagadas, fotos ocultas, áudios e localização, de forma transparente.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: AcompanharPage,
});
