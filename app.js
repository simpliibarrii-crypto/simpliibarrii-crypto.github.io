const projects = {
  'home-for-ai': {
    title: 'Home for AI',
    kicker: 'SOVEREIGN DESKTOP ORCHESTRATION',
    lede: 'A local-first command center for coordinating agents, knowledge, models, workflows, and evidence traces from one deliberate interface.',
    status: 'Active flagship redesign',
    role: 'Product design, frontend architecture, orchestration concepts, web-safe runtime handling',
    stack: ['React', 'TypeScript', 'Tauri', 'Rust', 'FastAPI', 'SQLite'],
    repo: 'https://github.com/simpliibarrii-crypto/home-for-ai',
    problem: 'AI tools often become a drawer full of disconnected apps. Home for AI explores a single local workspace where agents can be routed, reviewed, and audited without making cloud access the default.',
    decisions: ['Separate browser showcase behavior from Tauri desktop commands', 'Use shared evidence and consent signals across connected systems', 'Treat local tools and models as first-class execution paths', 'Design the interface around operator control, not chatbot novelty'],
    demo: 'orchestrator',
  },
  'raven-ai': {
    title: 'Raven AI',
    kicker: 'EVIDENCE-LINKED SCIENTIFIC AGENTS',
    lede: 'A sovereign agent platform for biology, healthcare, and reproducible research, built around provenance, token efficiency, and publishability gates.',
    status: 'Active research platform',
    role: 'System architecture, evidence contracts, scientific gates, product direction',
    stack: ['Python', 'FastAPI', 'Evidence Graphs', 'Agent Routing', 'CI'],
    repo: 'https://github.com/simpliibarrii-crypto/raven-ai',
    problem: 'Scientific agents can sound certain while hiding weak evidence. Raven makes claims, sources, confidence, risk, verification, and publication gates explicit data instead of invisible prose.',
    decisions: ['Portable evidence graph contract across every ecosystem surface', 'Draft-verify-reuse token policy before expensive escalation', 'Scientific run manifests for reproducibility and public-claim safety', 'No production or clinical claims without matching validation'],
    demo: 'evidence',
  },
  'openclinical-ai': {
    title: 'OpenClinical AI',
    kicker: 'CONSENT-AWARE CLINICAL RUNTIME',
    lede: 'A development-preview clinical AI layer with tenant boundaries, signed model manifests, consent checks, audit events, and a practical shift-handoff workflow.',
    status: 'MVP preview · not certified',
    role: 'Clinical workflow design, API architecture, safety scope, audit model',
    stack: ['Python', 'FastAPI', 'Consent Tokens', 'Audit Logs', 'Signed Manifests'],
    repo: 'https://github.com/simpliibarrii-crypto/openclinical-ai',
    problem: 'Healthcare AI needs more than a prompt box. Even a modest workflow should know which tenant is acting, whether consent exists, what model ran, and what was written to an audit trail.',
    decisions: ['Scope the project as development-preview infrastructure', 'Keep consent and tenant context in the request path', 'Record append-only tenant-filtered events', 'Use deterministic handoff logic for a testable baseline'],
    demo: 'clinical',
  },
  'hermes-edge': {
    title: 'Hermes Edge',
    kicker: 'GPU-FIRST ON-DEVICE AGENTS',
    lede: 'A local runtime that chooses deterministic tools, edge models, delegates, and fallbacks according to capability rather than wishful performance claims.',
    status: 'v0.3 active',
    role: 'Routing policy, benchmark contract, local-first product strategy',
    stack: ['Python', 'LiteRT-LM', 'Gemma', 'Vulkan', 'Metal', 'AICore'],
    repo: 'https://github.com/simpliibarrii-crypto/hermes-edge',
    problem: 'On-device AI is constrained by memory, thermals, delegates, and model compatibility. Hermes turns those constraints into an explicit routing policy and refuses unsupported speed claims.',
    decisions: ['Deterministic tools before model loading', 'GPU, Vulkan, Metal, and ANE before CPU fallback when available', 'Model profile chosen from memory and backend capability', 'Public benchmark claims require complete device metadata'],
    demo: 'edge',
  },
  'raven-biocomputer': {
    title: 'Raven BioComputer',
    kicker: 'BOUNDED COMPUTE FOR BIOLOGY AGENTS',
    lede: 'A private, auditable workstation layer for deterministic biology tools, isolated run directories, hashed artifacts, and reproducible receipts.',
    status: 'Alpha research software',
    role: 'Product architecture, safety boundaries, reproducible task contracts',
    stack: ['Python', 'FastAPI', 'MCP', 'Docker', 'Gradio', 'Bioinformatics'],
    repo: 'https://github.com/simpliibarrii-crypto/simpliibarrii-crypto-raven-biocomputer',
    problem: 'A biology agent should not receive unrestricted machine access. It should receive a bounded task, a registered tool, a policy decision, and artifacts that can be replayed and checked.',
    decisions: ['Private directory for each task', 'Deterministic sequence tools as the safe baseline', 'SHA-256 receipts for inputs and outputs', 'Human-review gates for patient, wet-lab, and higher-risk work'],
    demo: 'bio',
  },
  'jspace-chain': {
    title: 'JSpace Chain',
    kicker: 'OBSERVABLE GLOBAL-WORKSPACE CONTROL PLANE',
    lede: 'A private research prototype that translates global-workspace properties into an application-level contract for routing, risk, counterfactual reflection, and tamper-evident audit.',
    status: 'Private research prototype',
    role: 'Paper study, architecture translation, deterministic safety policy',
    stack: ['Python', 'Interpretability', 'Safety Gates', 'Hash Chains', 'Agent Systems'],
    repo: '',
    problem: 'Agent components need a compact, observable view of what matters now. JSpace Chain explores a capacity-bounded concept workspace shared by routing, evidence, safety, and interface layers.',
    decisions: ['Do not claim access to hidden model reasoning', 'Keep the workspace sparse and salience-bounded', 'Broadcast one observable snapshot to subscribers', 'Audit concept interventions and policy outcomes'],
    demo: 'jspace',
  },
  'langchain-nvidia': {
    title: 'LangChain NVIDIA Study',
    kicker: 'AGENTIC RAG & ACCELERATED EXECUTION',
    lede: 'An integration study of NVIDIA endpoints, TensorRT, LangGraph execution, agentic retrieval, and sandboxed tool workflows.',
    status: 'Integration study · upstream codebase',
    role: 'Technical study and ecosystem integration exploration',
    stack: ['LangChain', 'LangGraph', 'NVIDIA', 'TensorRT', 'RAG'],
    repo: 'https://github.com/simpliibarrii-crypto/langchain-nvidia',
    problem: 'Agentic RAG must decide when to retrieve, where to retrieve from, how to grade evidence, and when acceleration or sandboxing changes the execution plan.',
    decisions: ['Present this honestly as an integration study, not original authorship of the upstream project', 'Separate route selection from answer generation', 'Grade retrieved context before final output', 'Treat sandbox and accelerator choice as explicit execution metadata'],
    demo: 'rag',
  },
};

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[character]));
}

function initGlobal() {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
    }));
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .08 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}

function initHome() {
  document.querySelectorAll('[data-project-jump]').forEach(button => {
    button.addEventListener('click', () => {
      location.href = `project.html?project=${encodeURIComponent(button.dataset.projectJump)}`;
    });
  });

  const chips = document.querySelectorAll('.filter-chip');
  const cards = document.querySelectorAll('.project-card');
  const count = document.getElementById('visible-project-count');
  chips.forEach(chip => chip.addEventListener('click', () => {
    chips.forEach(item => item.classList.remove('active'));
    chip.classList.add('active');
    const filter = chip.dataset.filter;
    let visible = 0;
    cards.forEach(card => {
      const show = filter === 'all' || card.dataset.category.split(' ').includes(filter);
      card.hidden = !show;
      if (show) visible += 1;
    });
    if (count) count.textContent = String(visible);
  }));
}

function initProject() {
  const params = new URLSearchParams(location.search);
  const id = params.get('project') || 'home-for-ai';
  const project = projects[id] || projects['home-for-ai'];
  document.title = `${project.title} | Barry Clerjuste`;

  const title = document.getElementById('project-title');
  const crumb = document.getElementById('project-title-crumb');
  const kicker = document.getElementById('project-kicker');
  const lede = document.getElementById('project-lede');
  const tags = document.getElementById('project-tags');
  const summary = document.getElementById('project-summary');
  const problem = document.getElementById('project-problem');
  const decisions = document.getElementById('project-decisions');
  const repoLink = document.getElementById('project-repo');
  if (title) title.textContent = project.title;
  if (crumb) crumb.textContent = project.title;
  if (kicker) kicker.textContent = project.kicker;
  if (lede) lede.textContent = project.lede;
  if (tags) tags.innerHTML = project.stack.map(tag => `<span>${escapeHtml(tag)}</span>`).join('');
  if (summary) summary.innerHTML = `
    <dl>
      <div><dt>Status</dt><dd>${escapeHtml(project.status)}</dd></div>
      <div><dt>Contribution</dt><dd>${escapeHtml(project.role)}</dd></div>
      <div><dt>Demo mode</dt><dd>Deterministic browser showcase based on the repository's public contracts.</dd></div>
    </dl>`;
  if (problem) problem.textContent = project.problem;
  if (decisions) decisions.innerHTML = project.decisions.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  if (repoLink) {
    if (project.repo) {
      repoLink.href = project.repo;
      repoLink.hidden = false;
    } else {
      repoLink.hidden = true;
    }
  }

  renderDemo(project.demo, project.title);
  renderNextProjects(id);
}

function renderDemo(type, title) {
  const root = document.getElementById('demo-root');
  if (!root) return;
  const templates = {
    orchestrator: `
      <div class="demo-grid"><div class="demo-control">
        <label>Primary system<select id="agent-system"><option>Raven AI</option><option>OpenClinical AI</option><option>Hermes Edge</option><option>Raven BioComputer</option></select></label>
        <label>Execution preference<select id="execution-mode"><option>Local first</option><option>Evidence first</option><option>Human review required</option></select></label>
        <label>Instruction<textarea id="agent-prompt">Compare the available evidence and prepare an auditable recommendation.</textarea></label>
        <button id="run-demo" type="button">Route instruction</button>
      </div><div class="demo-output"><h3>ORCHESTRATION TRACE</h3><pre id="demo-output"></pre></div></div>`,
    evidence: `
      <div class="demo-grid"><div class="demo-control">
        <label>Source title<input id="source-title" value="Protocol validation report" /></label>
        <label>Claim<textarea id="claim-text">The workflow should preserve signed consent context in every exported trace.</textarea></label>
        <label>Risk<select id="claim-risk"><option>low</option><option selected>medium</option><option>high</option></select></label>
        <button id="run-demo" type="button">Build evidence trace</button>
      </div><div class="demo-output"><h3>RAVEN.EVIDENCE_GRAPH.V1</h3><pre id="demo-output"></pre></div></div>`,
    clinical: `
      <div class="demo-grid"><div class="demo-control">
        <label>Resident alias<input id="resident" value="Resident A" /></label>
        <label>Observations<textarea id="observations">Ate 60% of dinner. Walked with one-person assist. Reported mild discomfort at 20:15.</textarea></label>
        <label>Consent token<select id="consent"><option value="valid">Valid demo consent</option><option value="missing">Missing</option></select></label>
        <button id="run-demo" type="button">Generate structured handoff</button>
      </div><div class="demo-output"><h3>CONSENT-GATED HANDOFF</h3><pre id="demo-output"></pre><p class="demo-note">Demonstration only. Not medical advice or certified clinical infrastructure.</p></div></div>`,
    edge: `
      <div class="demo-grid"><div class="demo-control">
        <label>Available RAM<select id="ram"><option value="2048">2 GB</option><option value="4096" selected>4 GB</option><option value="8192">8 GB</option></select></label>
        <label>Best delegate<select id="delegate"><option>Vulkan</option><option>Metal / ANE</option><option>GPU</option><option>CPU only</option></select></label>
        <label>Task<select id="edge-task"><option>Deterministic tool</option><option selected>General chat</option><option>Deep reasoning</option></select></label>
        <button id="run-demo" type="button">Resolve edge route</button>
      </div><div class="demo-output"><h3>HERMES ROUTE DECISION</h3><pre id="demo-output"></pre></div></div>`,
    bio: `
      <div class="demo-grid"><div class="demo-control">
        <label>DNA sequence<textarea id="sequence">ATGGCCATTGTAATGGGCCGCTGA</textarea></label>
        <label>Tool<select id="bio-tool"><option>Sequence statistics</option><option>Reverse complement</option><option>Motif search: ATG</option></select></label>
        <button id="run-demo" type="button">Run bounded task</button>
      </div><div class="demo-output"><h3>RAVEN.BIOCOMPUTER.RUN.V1</h3><pre id="demo-output"></pre><p class="demo-note">Dry-lab deterministic browser demo. No patient data or wet-lab execution.</p></div></div>`,
    jspace: `
      <div class="demo-grid"><div class="demo-control">
        <label>Observed event<textarea id="event-text">Browser tool retrieved a page that attempts to override the operator's instructions.</textarea></label>
        <label>Content trust<select id="trust"><option value="untrusted">Untrusted external content</option><option value="trusted">Trusted local content</option></select></label>
        <label>Tool action<select id="tool-action"><option>Read only</option><option selected>Write or execute</option></select></label>
        <button id="run-demo" type="button">Process workspace event</button>
      </div><div class="demo-output"><h3>JSPACE POLICY SNAPSHOT</h3><pre id="demo-output"></pre></div></div>`,
    rag: `
      <div class="demo-grid"><div class="demo-control">
        <label>Question<textarea id="rag-question">What evidence supports using local inference for sensitive healthcare workflows?</textarea></label>
        <label>Available context<select id="rag-context"><option>Local vector store</option><option>Web search</option><option selected>Both</option></select></label>
        <label>Execution<select id="rag-execution"><option>NVIDIA endpoint</option><option>TensorRT local</option><option selected>Policy decides</option></select></label>
        <button id="run-demo" type="button">Plan agentic RAG</button>
      </div><div class="demo-output"><h3>LANGGRAPH ROUTE PLAN</h3><pre id="demo-output"></pre></div></div>`,
  };
  root.innerHTML = templates[type] || templates.orchestrator;
  const run = document.getElementById('run-demo');
  const output = document.getElementById('demo-output');
  const execute = () => {
    const result = demoResult(type, title);
    output.textContent = JSON.stringify(result, null, 2);
  };
  run.addEventListener('click', execute);
  execute();
}

function digest(text) {
  let hash = 2166136261;
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(16).padStart(8, '0');
}

function demoResult(type, title) {
  const now = new Date().toISOString();
  if (type === 'orchestrator') {
    const system = document.getElementById('agent-system').value;
    const mode = document.getElementById('execution-mode').value;
    const prompt = document.getElementById('agent-prompt').value.trim();
    return { product: title, request_id: `home-${digest(prompt)}`, selected_system: system, policy: mode, route: ['sanitize input', 'check local capability', `dispatch to ${system}`, 'attach evidence trace', 'await operator approval'], status: 'consent_gate_pending', created_at: now };
  }
  if (type === 'evidence') {
    const source = document.getElementById('source-title').value.trim();
    const claim = document.getElementById('claim-text').value.trim();
    const risk = document.getElementById('claim-risk').value;
    return { schema: 'raven.evidence_graph.v1', source: { id: `src-${digest(source)}`, title: source }, claim: { id: `clm-${digest(claim)}`, text: claim, confidence: risk === 'low' ? .86 : risk === 'medium' ? .68 : .42, risk }, gates: { source_attached: true, reproducibility_artifact: false, human_review: risk !== 'low' }, publishability: risk === 'low' ? 'review' : 'blocked_pending_review', created_at: now };
  }
  if (type === 'clinical') {
    const resident = document.getElementById('resident').value.trim();
    const observations = document.getElementById('observations').value.trim();
    const consent = document.getElementById('consent').value;
    if (consent !== 'valid') return { status: 'blocked', reason: 'consent_token_missing', audit_event: `evt-${digest(observations)}`, created_at: now };
    return { status: 'generated_for_review', resident_alias: resident, handoff: { nutrition: observations.match(/ate[^.]*\./i)?.[0] || 'Not stated', mobility: observations.match(/walked[^.]*\./i)?.[0] || 'Not stated', follow_up: observations.match(/reported[^.]*\./i)?.[0] || 'No follow-up detail detected' }, consent: 'validated_demo_scope', audit_event: `evt-${digest(observations)}`, human_signature_required: true, created_at: now };
  }
  if (type === 'edge') {
    const ram = Number(document.getElementById('ram').value);
    const delegate = document.getElementById('delegate').value;
    const task = document.getElementById('edge-task').value;
    let profile = 'tool-first';
    if (task !== 'Deterministic tool') profile = ram >= 8192 ? 'gemma-3n-e4b-int4' : ram >= 4096 ? 'gemma-3n-e2b-int4' : 'cloud-fallback-disabled';
    if (delegate === 'CPU only' && task === 'Deep reasoning') profile = 'cloud-fallback-disabled';
    return { schema: 'hermes.edge.route.v1', task, available_ram_mb: ram, delegate_priority: delegate, selected_profile: profile, fallback: profile === 'cloud-fallback-disabled' ? 'operator decision required' : 'cpu allowed after delegate failure', benchmark_claim_allowed: false, reason: 'No device-specific TTFT, token rate, memory, and thermal results attached.', created_at: now };
  }
  if (type === 'bio') {
    const raw = document.getElementById('sequence').value.toUpperCase().replace(/[^ATGC]/g, '');
    const tool = document.getElementById('bio-tool').value;
    const complement = {A:'T',T:'A',G:'C',C:'G'};
    const reverse = raw.split('').reverse().map(base => complement[base]).join('');
    const gc = raw.length ? ((raw.match(/[GC]/g) || []).length / raw.length * 100) : 0;
    const result = tool.startsWith('Reverse') ? { reverse_complement: reverse } : tool.startsWith('Motif') ? { motif: 'ATG', positions: [...raw.matchAll(/ATG/g)].map(match => match.index) } : { length: raw.length, gc_percent: Number(gc.toFixed(2)), starts_with_start_codon: raw.startsWith('ATG') };
    return { schema: 'raven.biocomputer.run.v1', policy: 'approved_dry_lab', tool, input_digest: digest(raw), result, output_digest: digest(JSON.stringify(result)), human_review_required: false, created_at: now };
  }
  if (type === 'jspace') {
    const event = document.getElementById('event-text').value.trim();
    const trust = document.getElementById('trust').value;
    const action = document.getElementById('tool-action').value;
    const injection = /override|ignore|system prompt|instructions/i.test(event);
    const riskyWrite = action.includes('Write');
    const status = trust === 'untrusted' && (injection || riskyWrite) ? 'block' : riskyWrite ? 'review' : 'allow';
    const concepts = [{name:'tool_use', salience:.71}, {name:trust === 'untrusted' ? 'untrusted_content' : 'trusted_context', salience:.84}];
    if (injection) concepts.unshift({name:'prompt_injection', salience:.97});
    return { schema: 'jspace.workspace.snapshot.v1', workspace_capacity: 25, concepts, broadcast_to: ['router','risk_gate','evidence_system','operator_ui'], decision: { status, counterfactual_reflection: status !== 'allow', reason: status === 'block' ? 'Untrusted instructions conflict with operator authority.' : 'Action remains inside current policy.' }, audit_hash: digest(event + status), created_at: now };
  }
  const question = document.getElementById('rag-question').value.trim();
  const context = document.getElementById('rag-context').value;
  const execution = document.getElementById('rag-execution').value;
  const route = context === 'Both' ? ['local_vectorstore','grade_documents','web_search_if_gap','answer_grade'] : [context.toLowerCase().replaceAll(' ','_'),'grade_documents','answer_grade'];
  return { schema: 'agentic.rag.plan.v1', question_digest: digest(question), retrieval_route: route, execution_target: execution === 'Policy decides' ? 'TensorRT local if available, otherwise NVIDIA endpoint' : execution, safeguards: ['grade retrieved documents','reject unsupported answer','record source route'], created_at: now };
}

function renderNextProjects(currentId) {
  const root = document.getElementById('next-projects');
  if (!root) return;
  const entries = Object.entries(projects).filter(([id]) => id !== currentId).slice(0,3);
  root.innerHTML = entries.map(([id, project]) => `<a href="project.html?project=${encodeURIComponent(id)}"><strong>${escapeHtml(project.title)}</strong><span>${escapeHtml(project.kicker)}</span></a>`).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  initGlobal();
  if (document.body.dataset.page === 'home') initHome();
  if (document.body.dataset.page === 'project') initProject();
});
