import { createFileRoute } from "@tanstack/react-router";
import { LegalShell } from "./termos";

export const Route = createFileRoute("/rastreamento")({
  head: () => ({
    meta: [
      { title: "Rastreamento de Pedido · ZapRadar Brasil" },
      {
        name: "description",
        content:
          "Saiba como acompanhar o status do seu acesso e do seu pedido no ZapRadar Brasil, com prazos e canais de suporte.",
      },
      { property: "og:title", content: "Rastreamento de Pedido · ZapRadar Brasil" },
      {
        property: "og:description",
        content: "Como localizar o seu pedido no ZapRadar Brasil.",
      },
      { property: "og:url", content: "https://zapradar.top/rastreamento" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://zapradar.top/rastreamento" }],
  }),
  component: RastreamentoPage,
});

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-lg font-extrabold text-slate-900 mt-6 mb-2">{children}</h2>;
}

function RastreamentoPage() {
  return (
    <LegalShell title="Rastreamento de Pedido" updated="Atualizado em 06 de julho de 2026">
      <p>
        Aqui você entende como acompanhar o status do seu acesso ao aplicativo
        vinculado e, quando aplicável, a entrega de itens físicos do{" "}
        <strong>ZapRadar Brasil</strong>.
      </p>

      <H2>1. Acesso ao aplicativo (produto digital)</H2>
      <p>
        Assim que o pagamento é confirmado, o acesso ao painel de acompanhamento é
        liberado <strong>na hora</strong> e enviado para o e-mail informado na
        compra. Se não encontrar, verifique a caixa de spam e o lixo eletrônico
        antes de nos acionar.
      </p>

      <H2>2. Entrega de itens físicos (Kit Especialista)</H2>
      <ul>
        <li>
          <strong>Postagem:</strong> em até 2 dias úteis após a confirmação do
          pagamento.
        </li>
        <li>
          <strong>Código de rastreio:</strong> enviado por e-mail assim que o
          pedido é postado.
        </li>
        <li>
          <strong>Prazo de entrega:</strong> de 5 a 12 dias úteis, conforme a
          região e a transportadora.
        </li>
      </ul>

      <H2>3. Como acompanhar</H2>
      <p>
        Use o código de rastreio recebido por e-mail no site da transportadora
        indicada. Se preferir, envie o número do pedido para o nosso atendimento
        e verificamos o status para você.
      </p>

      <H2>4. Sigilo na entrega</H2>
      <p>
        Todos os envios são feitos em <strong>embalagem neutra e discreta</strong>,
        sem menção ao conteúdo ou à finalidade do produto, preservando a sua
        privacidade.
      </p>

      <H2>5. Contato</H2>
      <p>
        Precisa de ajuda com o seu pedido? Fale com o nosso atendimento pelo
        e-mail{" "}
        <strong>
          <a href="mailto:sac@zapradar.top" className="text-yellow-700 hover:underline">
            sac@zapradar.top
          </a>
        </strong>{" "}
        ou pelo telefone/WhatsApp <strong>(11) 96507-2638</strong>.
      </p>
    </LegalShell>
  );
}
