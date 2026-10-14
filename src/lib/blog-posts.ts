import blogMarina from "@/assets/blog-marina.jpg.asset.json";
import blogHomem from "@/assets/blog-homem.jpg.asset.json";
import blogSilencio from "@/assets/blog-silencio.jpg.asset.json";
import blogDignidade from "@/assets/blog-dignidade.jpg.asset.json";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  readTime: string;
  category: string;
  author: string;
  cover: string; // emoji
  heroImage?: string; // optional hero image URL
  content: string; // markdown-ish: ## h2, ### h3, > quote, blank line = paragraph break
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "como-funciona-controle-parental",
    title: "Como Funciona o Controle Parental (Guia Completo 2026)",
    description:
      "Entenda o que é controle parental, quais recursos ele oferece e como configurar para acompanhar o uso do celular do seu filho com responsabilidade e respeito.",
    date: "2026-08-05",
    readTime: "9 min",
    category: "Segurança Digital",
    author: "Equipe ZapRadar Brasil",
    cover: "🛡️",
    heroImage: blogHomem.url,
    content: `O controle parental deixou de ser um recurso de "vigilância" e virou uma ferramenta de proteção. Em 2026, acompanhar o que seu filho faz no celular é parte do cuidado digital — tão importante quanto ensinar a atravessar a rua.

Neste guia você vai entender **o que é controle parental**, como ele funciona de verdade e por que ele é a base de uma criação digital saudável.

## O que é controle parental

Controle parental é o conjunto de recursos que permitem a você, pai ou mãe, acompanhar e orientar o uso do celular do seu filho: aplicativos instalados, tempo de tela, contatos e localização.

Não é sobre invadir privacidade. É sobre **estar presente** no ambiente digital onde seu filho passa boa parte do dia.

## Como funciona na prática

### 1. Vincule o dispositivo
Com a autorização do responsável legal, o dispositivo do seu filho é vinculado a um painel que só você acessa.

### 2. Acompanhe atividades
O painel mostra aplicativos usados, tempo de uso, contatos novos e localização em tempo real.

### 3. Estabeleça limites
Defina horários de uso, bloqueie conteúdos impróprios e receba alertas sobre comportamentos de risco.

![Pais acompanhando o uso do celular](${blogHomem.url})

## Por que o controle parental é importante

- Crianças e adolescentes estão expostos a contatos desconhecidos diariamente
- O tempo de tela excessivo afeta sono e desenvolvimento
- Conteúdo impróprio chega sem ser procurado

## Converse, não apenas monitore

O controle parental funciona melhor quando vem acompanhado de diálogo. Explique ao seu filho por que você acompanha e quais são os combinados.

A ferramenta é o apoio. A confiança é o objetivo.`,
  },
  {
    slug: "como-proteger-filhos-no-whatsapp",
    title: "Como Proteger Seus Filhos no WhatsApp",
    description:
      "O WhatsApp é a porta de entrada para contatos desconhecidos. Veja como configurar privacidade, reconhecer sinais de risco e conversar com seu filho.",
    date: "2026-07-28",
    readTime: "7 min",
    category: "Segurança Digital",
    author: "Equipe ZapRadar Brasil",
    cover: "💬",
    content: `O WhatsApp é o aplicativo mais usado por crianças e adolescentes no Brasil. E é também onde boa parte dos contatos desconhecidos acontece.

## Configure a privacidade junto com seu filho

### 1. Quem pode ver a foto e o status
Ajuste para "Meus contatos" apenas.

### 2. Quem pode adicionar em grupos
Restrinja para contatos ou ninguém.

### 3. Desative a confirmação de leitura se necessário
Isso reduz a pressão por respostas imediatas.

## Sinais de que algo não está certo

- Seu filho esconde a tela quando você se aproxima
- Fica ansioso sem o celular
- Recebe mensagens de números desconhecidos em horários estranhos
- Muda o comportamento de forma repentina

## Como agir

Não confronte de forma agressiva. Converse. Explique os riscos reais e combine regras claras de uso.

A proteção começa pela conversa — e a ferramenta acompanha o processo.`,
  },
  {
    slug: "sinais-de-que-seu-filho-esta-em-risco-online",
    title: "Sinais de que Seu Filho Está em Risco Online",
    description:
      "Mudanças de comportamento, isolamento e uso excessivo do celular podem indicar contato com estranhos ou exposição a conteúdo impróprio. Aprenda a identificar.",
    date: "2026-07-15",
    readTime: "6 min",
    category: "Segurança Digital",
    author: "Equipe ZapRadar Brasil",
    cover: "⚠️",
    heroImage: blogSilencio.url,
    content: `A maioria dos pais percebe que algo está errado antes de ter qualquer "prova". O problema é que a dúvida costuma ser ignorada por falta de informação.

## Os sinais mais comuns

### 1. Isolamento repentino
Seu filho passa mais tempo no quarto, recusa atividades em família e fica irritado quando é interrompido.

### 2. Uso do celular em horários estranhos
Mensagens tarde da noite, apagar histórico com frequência, mudar de tela quando alguém se aproxima.

### 3. Mudança de humor
Ansiedade, irritabilidade ou tristeza sem explicação aparente.

### 4. Novos contatos desconhecidos
Números que você não reconhece, perfis novos em redes sociais, conversas que ele se recusa a mostrar.

## O que fazer

1. Respire. Não reaja no impulso.
2. Converse em um momento calmo.
3. Escute sem julgar.
4. Acompanhe de perto, com ferramentas de controle parental.

O objetivo não é punir. É proteger — e proteger começa por perceber.`,
  },
  {
    slug: "tempo-de-tela-saudavel-por-idade",
    title: "Tempo de Tela Saudável por Idade",
    description:
      "Quanto tempo seu filho deve passar no celular? Veja as recomendações por faixa etária e como colocar limites sem gerar conflito.",
    date: "2026-07-02",
    readTime: "5 min",
    category: "Família",
    author: "Equipe ZapRadar Brasil",
    cover: "⏱️",
    content: `O tempo de tela é uma das maiores preocupações dos pais modernos. E a resposta não é "proibir tudo" — é estabelecer limites saudáveis por idade.

## Recomendações por faixa etária

### Até 2 anos
Evitar telas, exceto videochamadas com familiares.

### 2 a 5 anos
No máximo 1 hora por dia, sempre com conteúdo educativo e supervisão.

### 6 a 10 anos
Até 2 horas por dia, com regras claras e acompanhamento.

### 11 a 17 anos
Defina limites junto com o adolescente, equilibrando estudo, lazer e descanso.

## Como aplicar sem briga

- Combine os horários antes, não no calor do momento
- Use ferramentas de controle para limitar automaticamente
- Dê o exemplo: reduza também o seu próprio tempo de tela
- Priorize sono e atividades físicas

Limite não é castigo. É estrutura.`,
  },
  {
    slug: "apps-que-adolescentes-mais-usam",
    title: "Os Apps que Adolescentes Mais Usam (e os Riscos)",
    description:
      "Conheça os aplicativos mais populares entre adolescentes, o que fazem e quais riscos escondem — e como acompanhar com responsabilidade.",
    date: "2026-06-20",
    readTime: "8 min",
    category: "Tecnologia",
    author: "Equipe ZapRadar Brasil",
    cover: "📱",
    content: `Os adolescentes trocam de aplicativo mais rápido do que os pais conseguem acompanhar. Conhecer o que eles usam é o primeiro passo para proteger.

## Os mais populares

### Mensageiros
WhatsApp, Telegram e Discord — este último muito usado em comunidades de jogos, onde o contato com desconhecidos é comum.

### Redes sociais
Instagram, TikTok e Snapchat — o Snapchat apaga mensagens automaticamente, o que dificulta o acompanhamento.

### Jogos e streaming
Roblox, Fortnite e Twitch — ambientes com chat aberto e contato com estranhos.

## Os riscos mais comuns

- Contato com desconhecidos fingindo ser da mesma idade
- Conteúdo impróprio sugerido pelos algoritmos
- Pressão por popularidade e comparação

## Como acompanhar

Não é sobre proibir. É sobre conhecer. Converse sobre o que ele usa, e use ferramentas que mostram os aplicativos instalados e o tempo de uso.`,
  },
  {
    slug: "como-falar-sobre-seguranca-digital",
    title: "Como Falar Sobre Segurança Digital com Seu Filho",
    description:
      "A conversa é a ferramenta mais poderosa de proteção. Veja como abordar segurança online sem parecer uma palestra.",
    date: "2026-06-08",
    readTime: "6 min",
    category: "Família",
    author: "Equipe ZapRadar Brasil",
    cover: "🗣️",
    content: `Nenhuma ferramenta substitui uma boa conversa. O problema é que a maioria dos pais não sabe como começar.

## Comece cedo e mantenha o canal aberto

Não espere o problema aparecer. Fale sobre segurança digital desde o primeiro celular, de forma natural e contínua.

## O que dizer

### Seja direto sobre os riscos
Explique que existem pessoas que se passam por outras para ganhar confiança.

### Combine regras juntos
Quando o adolescente participa das regras, ele tende a respeitar mais.

### Não ameace com punição
Ameaças fazem o filho esconder. Acolhimento faz ele pedir ajuda.

## O que evitar

- Transformar a conversa em interrogatório
- Invadir a privacidade sem aviso prévio
- Julgar o filho na frente de outros

A confiança é construída em pequenos gestos diários.`,
  },
  {
    slug: "grooming-online-o-que-e-e-como-prevenir",
    title: "Grooming Online: O Que É e Como Prevenir",
    description:
      "O aliciamento de menores pela internet é um risco real e crescente. Entenda como acontece, os sinais e como proteger seu filho.",
    date: "2026-05-25",
    readTime: "8 min",
    category: "Segurança Digital",
    author: "Equipe ZapRadar Brasil",
    cover: "🚨",
    heroImage: blogDignidade.url,
    content: `Grooming é o nome dado ao processo de aliciamento de menores pela internet. É um dos riscos mais sérios — e mais silenciosos — do ambiente digital.

## Como acontece

O aliciador se aproxima aos poucos, ganhando confiança:

1. Se apresenta como alguém da mesma idade
2. Demonstra interesse e atenção excessiva
3. Pede segredo nas conversas
4. Avança para pedidos de fotos ou encontros

## Sinais de alerta

- Conversas com desconhecidos que o filho insiste em esconder
- Presentes ou recargas recebidas de estranhos
- Uso do celular escondido, em horários incomuns
- Mudança brusca de comportamento

## Como prevenir

- Converse abertamente sobre o tema
- Acompanhe os contatos e conversas com ferramentas de controle parental
- Ensine a nunca enviar fotos íntimas ou dados pessoais
- Mantenha um canal de confiança para que ele peça ajuda

A prevenção começa antes do primeiro contato.`,
  },
  {
    slug: "cyberbullying-como-identificar",
    title: "Cyberbullying: Como Identificar e Agir",
    description:
      "O bullying migrou para o digital e se tornou mais invisível. Saiba reconhecer os sinais e como apoiar seu filho.",
    date: "2026-05-10",
    readTime: "6 min",
    category: "Segurança Digital",
    author: "Equipe ZapRadar Brasil",
    cover: "💔",
    content: `O cyberbullying é diferente do bullying tradicional: ele não para quando o filho chega em casa. O celular leva a agressão para dentro do quarto.

## Sinais de que seu filho pode ser vítima

- Tristeza ou ansiedade ao usar o celular
- Isolamento e queda no rendimento escolar
- Evitar a escola ou atividades sociais
- Mudanças de humor sem explicação

## Como agir

1. Escute sem minimizar
2. Guarde evidências (prints, mensagens)
3. Procure a escola e, se necessário, as autoridades
4. Ofereça apoio emocional e acompanhamento

## Prevenção

Acompanhar o que acontece no celular do seu filho permite identificar o problema cedo — antes que ele se torne grave.

Você não está invadindo. Você está protegendo.`,
  },
  {
    slug: "localizacao-em-tempo-real-para-pais",
    title: "Localização em Tempo Real para Pais: Guia",
    description:
      "Saber onde seu filho está traz paz de espírito. Veja como a localização em tempo real funciona e como usar com responsabilidade.",
    date: "2026-04-28",
    readTime: "5 min",
    category: "Tecnologia",
    author: "Equipe ZapRadar Brasil",
    cover: "📍",
    content: `A localização em tempo real é um dos recursos de controle parental que mais traz tranquilidade aos pais — e que mais precisa de bom senso.

## Como funciona

Com o consentimento do responsável, o dispositivo do filho compartilha a localização em um painel. Você vê onde ele está e por onde passou.

## Quando é útil

- Na volta da escola ou de atividades
- Em viagens e passeios
- Em situações de emergência

## Como usar com responsabilidade

- Combine com seu filho quando e por que você acompanha
- Não use a localização para controlar cada passo
- Priorize a segurança em vez da vigilância

A localização é uma rede de segurança, não uma coleira.`,
  },
  {
    slug: "conteudo-impropio-como-bloquear",
    title: "Conteúdo Impróprio: Como Bloquear no Celular",
    description:
      "O algoritmo entrega conteúdo impróprio sem ser procurado. Aprenda a configurar bloqueios e filtros para proteger seu filho.",
    date: "2026-04-12",
    readTime: "7 min",
    category: "Segurança Digital",
    author: "Equipe ZapRadar Brasil",
    cover: "🔞",
    content: `Conteúdo impróprio não precisa ser procurado para aparecer. Os algoritmos de vídeo e redes sociais empurram cada vez mais esse tipo de material.

## Onde bloquear

### 1. Nível do sistema
Ative restrições de conteúdo no próprio celular (Android e iOS têm controle parental nativo).

### 2. Nível dos aplicativos
Configure o modo restrito do YouTube, TikTok e Instagram.

### 3. Nível da rede
Use ferramentas de controle parental que filtram o conteúdo no navegador e nos aplicativos.

## Por que acompanhar

Bloquear não basta. O algoritmo encontra caminhos novos a cada semana. Acompanhar o que seu filho consome — e conversar sobre isso — é a camada mais importante de proteção.

Bloqueio é uma barreira. Conversa é uma vacina.`,
  },
  {
    slug: "primeiro-celular-do-filho-guia",
    title: "Primeiro Celular do Filho: Guia Completo",
    description:
      "Entregar o primeiro celular é um marco. Veja como preparar o aparelho, estabelecer regras e acompanhar de perto nos primeiros meses.",
    date: "2026-03-30",
    readTime: "7 min",
    category: "Família",
    author: "Equipe ZapRadar Brasil",
    cover: "🎁",
    heroImage: blogMarina.url,
    content: `O primeiro celular é um rito de passagem. Mas entregar um aparelho sem preparação é como entregar as chaves de casa sem explicar as regras.

## Antes de entregar

### 1. Configure o controle parental
Ative antes de o aparelho ir para a mão do seu filho. Depois fica mais difícil.

### 2. Combine as regras por escrito
Horários de uso, aplicativos permitidos e consequências claras.

### 3. Explique os riscos
Contatos desconhecidos, conteúdo impróprio e golpes são reais. Fale sobre eles de forma adequada à idade.

## Nos primeiros meses

Acompanhe de perto. Os primeiros meses definem os hábitos. Ajuste as regras conforme a maturidade do seu filho.

O primeiro celular é uma responsabilidade compartilhada.`,
  },
  {
    slug: "saude-mental-e-telas-adolescentes",
    title: "Saúde Mental e Telas: o que os Pais Precisam Saber",
    description:
      "O uso excessivo de telas afeta o sono, a autoestima e a saúde mental dos adolescentes. Veja os sinais e como agir.",
    date: "2026-03-12",
    readTime: "6 min",
    category: "Família",
    author: "Equipe ZapRadar Brasil",
    cover: "🧠",
    content: `A relação entre telas e saúde mental dos adolescentes é um dos temas mais estudados — e mais preocupantes — da atualidade.

## O que as telas causam

### 1. Prejuízo ao sono
A luz da tela atrasa o sono, e a ansiedade das redes mantém o cérebro em alerta.

### 2. Comparação e autoestima
A exposição constante a vidas "perfeitas" gera insegurança e ansiedade.

### 3. Isolamento
Quanto mais tempo online, menos tempo de interação real.

## Sinais de alerta

- Irritabilidade quando fica sem o celular
- Queda no rendimento escolar
- Falta de interesse em atividades que antes gostava
- Sono desregulado

## Como agir

- Estabeleça horários sem tela (especialmente à noite)
- Incentive atividades offline
- Acompanhe o que ele consome
- Busque ajuda profissional se necessário

Cuidar da saúde mental é também cuidar do tempo de tela.`,
  },
];

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
