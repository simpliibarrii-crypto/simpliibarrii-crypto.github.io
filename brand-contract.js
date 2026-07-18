const canonicalMaturity = {
  'Home for AI': 'Active product',
  'Raven AI': 'Active research platform',
  'Hermes Edge': 'Active product',
  'OpenClinical AI': 'Development-preview MVP',
  'Raven BioComputer': 'Alpha research software',
  'JSpace Chain': 'Private research prototype',
  'LangChain NVIDIA Study': 'Attributed integration study',
};

function applyCanonicalBrand() {
  const root = document.documentElement;
  root.style.setProperty('--void', '#050505');
  root.style.setProperty('--ink', '#f4efe7');
  root.style.setProperty('--red', '#c8273f');
  root.style.setProperty('--red-bright', '#f04460');
  root.style.setProperty('--gold', '#c9ad7d');

  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.setAttribute('content', '#050505');

  document.querySelectorAll('.project-card').forEach((card) => {
    const title = card.querySelector('h3')?.textContent?.trim();
    const status = card.querySelector('.project-status');
    if (title && status && canonicalMaturity[title]) status.textContent = canonicalMaturity[title];
  });

  if (document.body.dataset.page === 'project') {
    const title = document.getElementById('project-title')?.textContent?.trim();
    const firstDefinition = document.querySelector('#project-summary dd');
    if (title && firstDefinition && canonicalMaturity[title]) {
      firstDefinition.textContent = canonicalMaturity[title];
    }
  }
}

document.addEventListener('DOMContentLoaded', applyCanonicalBrand);
