/**
 * Dados dos Estudos de Caso dos Projetos Reais do Workspace
 */
const PROJECTS_DATA = {
  decorlines: {
    category: 'E-commerce Full Stack',
    title: 'Decorlines — Loja Virtual & Catálogo Sob Medida',
    subtitle: 'Plataforma moderna em Next.js e Supabase para comercialização de cortinas, persianas e itens de decoração.',
    challenge: 'Estruturar uma experiência de compra fluida para produtos personalizáveis (medidas, tecidos e acabamentos) mantendo alta velocidade de carregamento e gestão centralizada de estoque e pedidos.',
    solution: 'Arquitetura Full Stack em Next.js (App Router) integrada ao Supabase para autenticação, banco de dados relacional em tempo real e catálogo estruturado com filtros rápidos.',
    deliverables: [
      'Catálogo dinâmico com filtragem por categorias, coleções e medidas',
      'Modelagem de banco de dados e políticas de segurança no Supabase',
      'Interface editorial alinhada ao manual de marca da Decorlines',
      'Fluxo de carrinho e orçamento otimizado para dispositivos móveis'
    ],
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: '',   // Cole aqui a URL do site online (ex: https://decorlines.vercel.app)
    githubUrl: 'https://github.com/Lf-PierreC/Decorlines'  // Cole aqui a URL do repositório (ex: https://github.com/Lf-PierreC/decorlines)
  },
  lidprime: {
    category: 'Funil Interativo & CRO',
    title: 'Projeto Lidprime — Quiz Qualificador & Otimização de Conversão',
    subtitle: 'Engenharia de conversão (CRO) aliada a um funil de quiz interativo para captura e qualificação de leads.',
    challenge: 'Aumentar a taxa de conversão de tráfego pago reduzindo o atrito de formulários tradicionais e entregando um diagnóstico personalizado ao usuário.',
    solution: 'Desenvolvimento de aplicação em Next.js + Supabase combinada com apresentações estratégicas de CRO e arquitetura de funil gamificado por etapas.',
    deliverables: [
      'Quiz interativo com progressão fluida e pontuação de perfil de lead',
      'Relatório técnico de CRO (Conversion Rate Optimization) e heurísticas de UX',
      'Persistência de respostas e eventos de funil no Supabase',
      'Dashboards e apresentações executivas HTML para tomada de decisão'
    ],
    tech: ['Next.js', 'Supabase', 'CRO Analytics', 'JavaScript', 'UI/UX de Conversão'],
    liveUrl: 'https://parceiro.lidprime.com',
    githubUrl: 'https://github.com/Lf-PierreC/lidprime'
  },
  igreja: {
    category: 'Portal Institucional & Branding',
    title: 'Igreja do Alto — Plataforma Web & Identidade Visual',
    subtitle: 'Ecossistema digital completo unindo manual de identidade visual, portal institucional e gestão de comunidade.',
    challenge: 'Traduzir a identidade visual oficial da Igreja do Alto para uma plataforma web acolhedora, rápida e fácil de atualizar pela equipe interna.',
    solution: 'Aplicação web construída em Next.js com back-end em Supabase, respeitando tipografia, paleta cromática e aplicações vetoriais do Brand Book.',
    deliverables: [
      'Portal responsivo com agenda de eventos, ministérios e conteúdos',
      'Integração com banco de dados Supabase para atualização dinâmica',
      'Sistematização de componentes fiéis ao PDF de Brand da instituição',
      'Otimização de SEO local e carregamento instantâneo'
    ],
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Brand System', 'CSS Moderno'],
    liveUrl: 'https://membros.igrejadoalto.com',
    githubUrl: 'https://github.com/Lf-PierreC/igreja-do-alto'
  },
  sportlines: {
    category: 'Front-End & Identidade Esportiva',
    title: 'Sportlines — Vitrine Digital de Alta Performance',
    subtitle: 'Landing page e catálogo visual desenvolvido em HTML5, CSS3 e JavaScript puro com estética esportiva.',
    challenge: 'Criar uma vitrine digital leve, sem dependências pesadas, que destacasse a identidade vetorial e os produtos da marca Sportlines.',
    solution: 'Arquitetura semântica em HTML5 e CSS3 moderno com layout responsivo, tipografia de alto impacto e ativos gráficos em SVG vetorial.',
    deliverables: [
      'Layout responsivo mobile-first com zero dependências externas',
      'Vetorização e aplicação da logotipia oficial em alta definição',
      'Seções de destaque de produtos com micro-interações em CSS',
      'Pontuação máxima de performance e tempo de resposta imediato'
    ],
    tech: ['HTML5 Semântico', 'CSS3 Grid/Flex', 'JavaScript', 'SVG Vetorial'],
    liveUrl: 'https://sportlines.com.br',
    githubUrl: 'https://github.com/Lf-PierreC/sportlines'
  },
  querodoce: {
    category: 'Gastronomia, Marca & Conversão',
    title: 'Quero Doce C&A / Camilla — Cardápio Digital & Branding',
    subtitle: 'Construção de marca, variações de logotipo e vitrine digital pensada para conversão rápida de pedidos.',
    challenge: 'Unir o apelo visual da confeitaria artesanal a uma jornada simples onde o cliente visualiza os produtos e inicia o pedido em poucos toques.',
    solution: 'Desenvolvimento de identidade visual completa (logotipos, favicons, paleta) e página web otimizada para leitura mobile e ação direta.',
    deliverables: [
      'Estudo completo de identidade visual e variações de marca (Camilla / Quero Doce C&A)',
      'Página web leve com vitrine fotográfica de produtos',
      'CTAs estratégicos para conversão direta via WhatsApp/Mobile',
      'Padronização visual para embalagens, adesivos e presença digital'
    ],
    tech: ['HTML5', 'CSS3', 'Identidade Visual', 'Mobile UX', 'Design Gráfico'],
    liveUrl: '',
    githubUrl: 'https://github.com/Lf-PierreC/quero-doce-ca'
  }
};

/**
 * 1. Filtro de Projetos com View Transitions API
 * Segue o guia modern-web-guidance: group-element-transitions
 */
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

function applyProjectFilter(selectedCategory) {
  projectCards.forEach((card) => {
    const cardCategory = card.getAttribute('data-category');
    const shouldShow = selectedCategory === 'all' || cardCategory === selectedCategory;
    card.hidden = !shouldShow;
  });
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedCategory = button.getAttribute('data-filter');

    filterButtons.forEach((btn) => {
      const isCurrent = btn === button;
      btn.classList.toggle('active', isCurrent);
      btn.setAttribute('aria-selected', String(isCurrent));
    });

    if (document.startViewTransition) {
      document.startViewTransition(() => {
        applyProjectFilter(selectedCategory);
      });
    } else {
      applyProjectFilter(selectedCategory);
    }
  });
});

/**
 * 2. Modal de Estudo de Caso com <dialog closedby="any"> + Fallback
 * Segue o guia modern-web-guidance: light-dismiss-a-dialog
 */
const dialog = document.getElementById('projectDialog');
const dialogCategory = document.getElementById('dialogProjectCategory');
const dialogTitle = document.getElementById('dialogProjectTitle');
const dialogSubtitle = document.getElementById('dialogProjectSubtitle');
const dialogChallenge = document.getElementById('dialogChallenge');
const dialogSolution = document.getElementById('dialogSolution');
const dialogDeliverablesList = document.getElementById('dialogDeliverablesList');
const dialogTechTags = document.getElementById('dialogTechTags');
const dialogLinks = document.getElementById('dialogLinks');

function createProjectLink(href, label, isLive) {
  const link = document.createElement('a');
  link.href = href;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.className = isLive ? 'project-link-chip is-live' : 'project-link-chip';
  link.textContent = label;
  return link;
}

function renderProjectLinks(container, data) {
  if (!container || !data) return;
  container.innerHTML = '';
  if (data.liveUrl) {
    container.appendChild(createProjectLink(data.liveUrl, 'Ver Online ↗', true));
  }
  if (data.githubUrl) {
    container.appendChild(createProjectLink(data.githubUrl, 'GitHub ↗', false));
  }
}

document.querySelectorAll('[data-project-links]').forEach((container) => {
  const projectKey = container.getAttribute('data-project-links');
  renderProjectLinks(container, PROJECTS_DATA[projectKey]);
});

document.querySelectorAll('.btn-case-study').forEach((btn) => {
  btn.addEventListener('click', () => {
    const projectKey = btn.getAttribute('data-project');
    const data = PROJECTS_DATA[projectKey];
    if (!data || !dialog) return;

    dialogCategory.textContent = data.category;
    dialogTitle.textContent = data.title;
    dialogSubtitle.textContent = data.subtitle;
    dialogChallenge.textContent = data.challenge;
    dialogSolution.textContent = data.solution;

    dialogDeliverablesList.innerHTML = '';
    data.deliverables.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      dialogDeliverablesList.appendChild(li);
    });

    dialogTechTags.innerHTML = '';
    data.tech.forEach((tag) => {
      const span = document.createElement('span');
      span.textContent = tag;
      dialogTechTags.appendChild(span);
    });

    renderProjectLinks(dialogLinks, data);

    dialog.showModal();
  });
});

// Copiar e-mail para a área de transferência
const copyEmailBtn = document.getElementById('copyEmailBtn');
if (copyEmailBtn) {
  copyEmailBtn.addEventListener('click', async () => {
    const email = copyEmailBtn.getAttribute('data-email');
    if (!email || !navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(email);
      const originalText = copyEmailBtn.textContent;
      copyEmailBtn.textContent = 'E-mail copiado! ✓';
      setTimeout(() => {
        copyEmailBtn.textContent = originalText;
      }, 2200);
    } catch {
      // Silencioso caso o navegador bloqueie clipboard em file://
    }
  });
}

// Fallback obrigatório para navegadores que ainda não suportam `closedby` nativamente no <dialog>
if (dialog && !('closedBy' in HTMLDialogElement.prototype)) {
  dialog.addEventListener('click', (event) => {
    if (event.target !== dialog) return;

    const rect = dialog.getBoundingClientRect();
    const isDialogContent =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;

    if (isDialogContent) return;
    dialog.close();
  });
}

/**
 * 3. Fallback de Scroll Entry Animations para navegadores sem suporte a animation-timeline: view()
 * Segue o guia modern-web-guidance: scroll-entry-exit-effects
 */
if (
  !CSS.supports('(animation-timeline: view()) and (animation-range: entry)') &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches
) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const ratio = entry.intersectionRatio;
        entry.target.style.opacity = String(0.15 + ratio * 0.85);
        entry.target.style.transform = `translateY(${(1 - ratio) * 28}px)`;
      }
    },
    {
      threshold: Array.from({ length: 21 }, (_, i) => i / 20)
    }
  );

  document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
    observer.observe(el);
  });
}
