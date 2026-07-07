const ICONS = {
  planningProfit: '<svg viewBox="0 0 24 24"><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1.5 2.5v13h13v-13h-13zm2 8.8 2.8-2.8 2.3 2.3 3.7-4.8 1.2.9-4.8 6.2-2.4-2.4-1.9 1.9-.9-1.3zm2.8-5.1h1.2V8h1.2v1.2h1.2v1.2h-1.2v1.2h-1.2v-1.2h-1.2V9.2z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24"><path d="M17.6 6.32A8.86 8.86 0 0 0 12.05 4C7.1 4 3.09 8 3.09 13c0 1.6.42 3.13 1.18 4.46L3 21l3.66-1.24a8.88 8.88 0 0 0 4.38 1.13c4.94 0 8.96-4 8.96-9 0-2.41-.94-4.66-2.4-6.57zM12.05 19.1c-1.34 0-2.65-.36-3.78-1.04l-.27-.16-2.83.96.96-2.76-.18-.28a7.18 7.18 0 0 1-1.1-3.82c0-4.02 3.28-7.3 7.3-7.3 1.95 0 3.78.76 5.16 2.14a7.25 7.25 0 0 1 2.14 5.15c0 4.02-3.28 7.3-7.4 7.3zm4-5.46c-.22-.11-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.11-.15.22-.57.71-.7.86-.13.14-.26.16-.48.05-.22-.11-.94-.34-1.78-1.09-.66-.58-1.1-1.3-1.23-1.52-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.27-.02-.39-.07-.11-.5-1.2-.69-1.65-.18-.43-.36-.37-.5-.38h-.43c-.15 0-.39.05-.59.27-.2.22-.78.76-.78 1.85s.8 2.15.91 2.3c.11.15 1.57 2.4 3.8 3.36.53.23.94.36 1.27.47.53.17 1.02.14 1.4.09.43-.06 1.3-.53 1.48-1.04.18-.51.18-.95.13-1.04-.05-.1-.2-.16-.42-.27z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.74 3.74 0 0 1-1.38-.9 3.74 3.74 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.9 5.9 0 0 0-2.13 1.39A5.9 5.9 0 0 0 .62 4.14C.32 4.9.12 5.78.06 7.05.01 8.33 0 8.74 0 12s.01 3.67.06 4.95c.06 1.27.26 2.15.56 2.91.31.8.72 1.47 1.39 2.14.66.67 1.34 1.08 2.13 1.39.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.06c1.27-.06 2.15-.26 2.91-.56.8-.31 1.47-.72 2.13-1.39.67-.67 1.08-1.34 1.39-2.14.3-.76.5-1.64.56-2.91.05-1.28.06-1.69.06-4.95s-.01-3.67-.06-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.39-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.41-10.84a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.34V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c2 .6 9.4.6 9.4.6s7.4 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>',
  bni: '<svg viewBox="0 0 24 24"><path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>',
  googleReviews: '<svg viewBox="0 0 24 24"><path d="M12 2.2 14.9 8l6.4.93-4.63 4.52 1.1 6.38L12 16.8l-5.77 3.03 1.1-6.38L2.7 8.93 9.1 8 12 2.2zm0 4.6-1.65 3.34-3.68.53 2.66 2.6-.63 3.66 3.3-1.73 3.3 1.73-.63-3.66 2.66-2.6-3.68-.53L12 6.8z"/></svg>'
};

async function loadConfig() {
  const res = await fetch('config.json');
  if (!res.ok) throw new Error('Falha ao carregar config.json');
  return res.json();
}

function applyTheme(theme) {
  const root = document.documentElement;
  root.style.setProperty('--azul-petroleo', theme.colors.azulPetroleo);
  root.style.setProperty('--azul-escuro', theme.colors.azulEscuro);
  root.style.setProperty('--terracota', theme.colors.terracota);
  root.style.setProperty('--bege', theme.colors.bege);
  root.style.setProperty('--branco', theme.colors.branco);
  root.style.setProperty('--cinza-azulado', theme.colors.cinzaAzulado);
  root.style.setProperty('--font-display', theme.fonts.display);
  root.style.setProperty('--font-body', theme.fonts.body);
}

function renderProfile(profile) {
  document.getElementById('badge').textContent = profile.badgeText;
  document.getElementById('eyebrow').textContent = profile.eyebrow;
  document.getElementById('name').textContent = profile.name;
  document.getElementById('subtitle').textContent = profile.subtitle;
  document.getElementById('footer').textContent = profile.footer;
  document.title = profile.name;
}

function renderLinks(links) {
  const nav = document.getElementById('links');
  nav.innerHTML = '';

  links.forEach(link => {
    const a = document.createElement('a');
    a.className = 'link' + (link.featured ? ' featured' : '');
    a.href = link.url;
    a.target = '_blank';
    a.rel = 'noopener';

    const icon = document.createElement('span');
    icon.className = 'icon';
    icon.innerHTML = ICONS[link.icon] || '';

    const label = document.createElement('span');
    label.className = 'label';
    label.textContent = link.label;

    const arrow = document.createElement('span');
    arrow.className = 'arrow';
    arrow.textContent = '→';

    a.append(icon, label, arrow);
    nav.appendChild(a);
  });
}

async function init() {
  try {
    const config = await loadConfig();
    applyTheme(config.theme);
    renderProfile(config.profile);
    renderLinks(config.links);
  } catch (err) {
    console.error(err);
    document.getElementById('links').innerHTML =
      '<p style="color:#D9783D;text-align:center;">Não foi possível carregar os links. Tente novamente mais tarde.</p>';
  }
}

init();
