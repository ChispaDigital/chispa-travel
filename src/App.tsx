import { useEffect, useRef, useState, type FormEvent } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Globe2,
  Instagram,
  Linkedin,
  MessageCircle,
  Menu,
  Play,
  Sparkles,
  X,
  Zap,
} from 'lucide-react';

type PlanName = 'Bronce' | 'Oro' | 'Diamante' | '';

const methodSteps = [
  'Diagnóstico estratégico de tu cuenta y nicho de viajes',
  'Embudo de contenidos: atracción, autoridad y ventas',
  'Guiones de prospección y cierre para cobrar fees',
  'Módulos audiovisuales explicativos on-demand',
  'Plantillas y material descargable de soporte',
  'Sesiones individuales de devolución y acompañamiento',
];

const plans = [
  {
    name: 'Bronce' as const,
    product: 'Chispa Academy',
    subtitle: 'Para agentes que buscan bases sólidas y autonomía.',
    price: '$300 USD',
    priceNote: 'o su equivalente en ARS',
    features: [
      'Módulos on-demand para agentes de viajes.',
      'Plantillas, guiones de WhatsApp y propuestas de itinerarios.',
      'Tareas y recursos para optimizar Instagram y TikTok.',
      'Soporte asincrónico en comunidad privada.',
    ],
    ideal: 'Agentes que empiezan y buscan ordenar su estrategia.',
    button: 'Sumarme a Chispa Bronce',
    className: 'plan-bronce',
  },
  {
    name: 'Oro' as const,
    product: 'Chispa Pro',
    subtitle: 'Nuestra experiencia grupal insignia para acelerar resultados.',
    price: '$600 USD',
    priceNote: 'opción de pago en cuotas disponible',
    features: [
      'Todo lo incluido en Bronce.',
      'Mentorías grupales semanales en vivo.',
      'Auditoría de Reels, scripts y perfiles sociales.',
      'Grupo de WhatsApp con acompañamiento.',
      'Módulo: cobrar fees sin perder clientes.',
    ],
    ideal: 'Agentes que ya venden y necesitan cerrar mejor y cobrar fees.',
    button: 'Postular a Chispa Oro',
    className: 'plan-oro',
    featured: true,
  },
  {
    name: 'Diamante' as const,
    product: 'VIP Mentorship',
    subtitle: 'Acompañamiento 1 a 1 de alto impacto para agencias de alto rendimiento.',
    price: '$1,300 USD',
    priceNote: 'cupos limitados por agenda',
    features: [
      'Todo lo incluido en Bronce y Oro.',
      'Sesiones 1:1 quincenales con los fundadores.',
      'Diseño e implementación de tu embudo de ventas.',
      'Soporte prioritario por WhatsApp 5 días.',
      'Marca personal y pauta digital avanzada.',
    ],
    ideal: 'Agencias consolidadas que quieren posicionarse y escalar.',
    button: 'Solicitar Entrevista VIP',
    className: 'plan-diamante',
  },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#inicio"
      className={`brand-logo ${light ? 'brand-logo-light' : ''}`}
      data-testid="link-logo"
    >
      <span className="brand-word">chispa</span>
      <span className="brand-bolt" aria-hidden="true">
        <Zap size={22} strokeWidth={3} fill="currentColor" />
      </span>
      <span className="brand-digital">DIGITAL</span>
    </a>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanName>('');
  const [submitted, setSubmitted] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const revealNodes = Array.from(
      document.querySelectorAll<HTMLElement>('.reveal'),
    );
    if (!revealNodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' },
    );

    revealNodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const scrollToForm = (plan: PlanName = '') => {
    setSelectedPlan(plan);
    setSubmitted(false);
    document
      .getElementById('diagnostico')
      ?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <main>
      <header className="site-header">
        <div className="nav-shell">
          <Logo />
          <nav
            className={`desktop-nav ${mobileOpen ? 'mobile-nav-open' : ''}`}
            aria-label="Navegación principal"
          >
            <a href="#metodo" onClick={closeMobile} data-testid="link-metodo">
              El método
            </a>
            <a href="#servicios" onClick={closeMobile} data-testid="link-servicios">
              Servicios
            </a>
            <a href="#planes" onClick={closeMobile} data-testid="link-planes">
              Planes
            </a>
            <a href="#filosofia" onClick={closeMobile} data-testid="link-filosofia">
              Nuestra filosofía
            </a>
            <a
              href="#diagnostico"
              onClick={closeMobile}
              className="nav-cta"
              data-testid="link-diagnostico"
            >
              Agendar asesoría <ArrowUpRight size={15} />
            </a>
          </nav>
          <button
            className="menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-spark hero-spark-one">✦</div>
        <div className="hero-spark hero-spark-two">✧</div>
        <div className="hero-shell">
          <div className="hero-copy reveal">
            <div className="location-badge">
              <span className="badge-dot" />
              Argentina · EE.UU. | Especialistas en Marketing B2B para Agentes de
              Viajes
            </div>
            <h1>
              Escalá tu Agencia de Viajes y Cobrá Fees con el{' '}
              <em>Método Chispa Digital</em>
            </h1>
            <p className="hero-lead">
              Ayudamos a agentes de viajes independientes y asesores a dejar de
              ser "cotizadores de presupuestos gratis" para convertirse en
              agencias rentables, con un sistema predecible de captación en
              redes sociales y facturación en dólares.
            </p>
            <div className="hero-actions">
              <button
                className="button button-yellow"
                onClick={() =>
                  document
                    .getElementById('planes')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                data-testid="button-see-plans"
              >
                Elegí tu Plan del Método <ArrowRight size={18} />
              </button>
              <button
                className="text-button"
                onClick={() => scrollToForm()}
                data-testid="button-free-consultation"
              >
                Agendá tu reunión informativa gratis{' '}
                <span className="text-button-arrow">↗</span>
              </button>
            </div>
          </div>
          <div className="hero-art reveal reveal-delay">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-dots" />
            <div className="hero-card-main">
              <div className="card-topline">
                <span>MÉTODO</span>
                <span>CHISPA DIGITAL</span>
              </div>
              <div className="card-bolt">
                <Zap size={69} fill="currentColor" strokeWidth={1.5} />
              </div>
              <div className="card-label">
                Escalá tu agencia
                <br />
                <strong>y cobrá fees.</strong>
              </div>
              <div className="card-line" />
              <div className="card-bottom">
                <span>
                  CHISPA
                  <br />
                  <small>DIGITAL</small>
                </span>
                <ArrowUpRight size={20} />
              </div>
            </div>
            <div className="floating-note note-one">
              <span className="note-icon">
                <Sparkles size={16} />
              </span>
              <span>
                <strong>Cobrá fees</strong>
                <small>facturación en dólares</small>
              </span>
            </div>
            <div className="floating-note note-two">
              <span className="note-icon note-purple">
                <Globe2 size={16} />
              </span>
              <span>
                <strong>Marketing B2B</strong>
                <small>agentes de viajes</small>
              </span>
            </div>
            <div className="art-caption">
              Ideas que
              <br />
              <span>encienden</span> marcas
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <span>El Método Chispa Digital</span>
          <ArrowDownRight size={18} />
        </div>
      </section>

      <section className="marquee-band" aria-label="Impacto Chispa Digital">
        <div className="marquee-track">
          <span>EDUCACIÓN</span>
          <i>✦</i>
          <span>CONFIANZA</span>
          <i>✦</i>
          <span>INTERNACIONALIZACIÓN</span>
          <i>✦</i>
          <span>EDUCACIÓN</span>
          <i>✦</i>
          <span>CONFIANZA</span>
          <i>✦</i>
        </div>
      </section>

      <section className="benefits-section section-pad" id="impacto">
        <div className="section-shell">
          <div className="section-intro reveal">
            <h2>
              Del posteo sin estrategia a un sistema de captación{' '}
              <span>predecible.</span>
            </h2>
          </div>
          <div className="benefit-grid">
            <article className="benefit-card benefit-lilac reveal">
              <span className="benefit-number">01</span>
              <Sparkles size={28} className="benefit-icon" />
              <h3>Educación</h3>
              <p>Del posteo sin estrategia a un sistema de captación predecible.</p>
              <ArrowUpRight className="card-arrow" size={22} />
            </article>
            <article className="benefit-card benefit-yellow reveal reveal-delay">
              <span className="benefit-number">02</span>
              <div className="confidence-mark">✓</div>
              <h3>Confianza</h3>
              <p>
                Metodología comprobada para cobrar fees y filtrar clientes
                curiosos.
              </p>
              <ArrowUpRight className="card-arrow" size={22} />
            </article>
            <article className="benefit-card benefit-violet reveal reveal-delay-two">
              <span className="benefit-number">03</span>
              <Globe2 size={30} className="benefit-icon" />
              <h3>Internacionalización</h3>
              <p>
                Facturá en dólares y trabajá desde cualquier lugar.
              </p>
              <ArrowUpRight className="card-arrow" size={22} />
            </article>
          </div>
        </div>
      </section>

      <section className="method-section section-pad" id="metodo">
        <div className="method-grid section-shell">
          <div className="method-sticky reveal">
            <h2>
              Asesoría Integral
              <br />
              <span>para Agentes de Viajes</span>
            </h2>
            <p>
              Te acompañamos paso a paso a transformar tu negocio: dejá de
              cotizar presupuestos gratis y construí un sistema predecible de
              captación de clientes calificados y cobro de fees de asesoría.
            </p>
          </div>
          <div className="steps-list">
            {methodSteps.map((step, index) => (
              <article
                className={`method-step reveal reveal-delay-${Math.min(
                  index + 1,
                  2,
                )}`}
                key={step}
              >
                <span className="step-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{step}</h3>
                </div>
                <ArrowDownRight size={21} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section section-pad" id="servicios">
        <div className="section-shell">
          <div className="services-heading reveal">
            <h2>
              Estructurá tu negocio de viajes
              <br />
              <span>para cobrar en dólares</span>
            </h2>
            <p>
              Estructurá tu negocio de viajes para cobrar en dólares y proteger
              tu activo.
            </p>
          </div>
          <div className="services-grid">
            <article className="service-card reveal">
              <div className="service-icon">
                <Globe2 size={30} />
              </div>
              <h3>Empresa en EE.UU.</h3>
              <p>
                Abrimos tu LLC en Estados Unidos para que puedas cobrar en
                dólares sin fricciones y operar tu agencia desde Argentina o
                cualquier parte del mundo.
              </p>
              <p className="service-includes">
                <strong>Incluye:</strong> Registro LLC + EIN + Operating
                Agreement + Apertura de cuenta bancaria en USA.
              </p>
              <a
                href="#diagnostico"
                onClick={() => scrollToForm()}
                data-testid="link-llc-service"
              >
                Abrir mi empresa <ArrowUpRight size={17} />
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="video-section section-pad">
        <div className="section-shell video-layout">
          <div className="video-copy reveal">
            <h2>
              Por qué creé Chispa Digital y cómo puedo ayudarte a transformar
              tu agencia
            </h2>
            <button
              className="text-button"
              onClick={() => setVideoOpen(true)}
              data-testid="button-watch-video"
            >
              Reproducir video <ArrowRight size={18} />
            </button>
          </div>
          {videoOpen ? (
            <div
              className="video-thumb video-playing reveal reveal-delay"
              role="region"
              aria-label="Video: Por qué creé Chispa Digital y cómo puedo ayudarte a transformar tu agencia"
            >
              <div className="video-frame">
                <iframe
                  title="Por qué creé Chispa Digital y cómo puedo ayudarte a transformar tu agencia"
                  src="https://www.youtube.com/watch?v=cRtLxh1Gfc4"
                  allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <button
                className="video-inline-close"
                onClick={() => setVideoOpen(false)}
                aria-label="Cerrar video"
                data-testid="button-close-video"
              >
                <X size={21} />
              </button>
            </div>
          ) : (
            <button
              className="video-thumb reveal reveal-delay"
              onClick={() => setVideoOpen(true)}
              aria-label="Reproducir video: Por qué creé Chispa Digital y cómo puedo ayudarte a transformar tu agencia"
              data-testid="button-video-thumbnail"
            >
              <div className="video-grid" />
              <div className="video-word">
                Por qué creé
                <br />
                <span>Chispa Digital</span>
              </div>
              <div className="play-button">
                <Play size={24} fill="currentColor" />
              </div>
              <div className="video-duration">
                <Clock3 size={13} /> YouTube
              </div>
            </button>
          )}
        </div>
      </section>

      <section className="plans-section section-pad" id="planes">
        <div className="section-shell">
          <div className="plans-heading reveal">
            <div>
              <h2>
                Elegí el nivel de acompañamiento
                <br />
                <span>que tu agencia necesita para escalar.</span>
              </h2>
            </div>
          </div>
          <div className="plans-grid">
            {plans.map((plan) => (
              <article
                className={`plan-card ${plan.className} ${
                  plan.featured ? 'plan-featured' : ''
                } reveal`}
                key={plan.name}
              >
                <div className="plan-top">
                  <span className="plan-name">
                    Método Chispa Digital — {plan.name}
                  </span>
                  <span className="plan-mark">{plan.featured ? '✦' : '+'}</span>
                </div>
                <p className="plan-kicker">{plan.product}</p>
                <p className="plan-description">{plan.subtitle}</p>
                <div className="plan-price">
                  <strong>{plan.price}</strong>
                  <span>{plan.priceNote}</span>
                </div>
                <p className="plan-include-label">Qué incluye:</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="plan-ideal">
                  <strong>Ideal para:</strong> {plan.ideal}
                </p>
                <button
                  className={`plan-button ${plan.featured ? 'button-yellow' : ''}`}
                  onClick={() => scrollToForm(plan.name)}
                  data-testid={`button-plan-${plan.name.toLowerCase()}`}
                >
                  {plan.button} <ArrowRight size={17} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="philosophy-section section-pad" id="filosofia">
        <div className="section-shell philosophy-layout">
          <div className="philosophy-director reveal">
            <div className="director-halo" aria-hidden="true" />
            <img
              src="/directora.png"
              alt="Directora de Chispa Digital sosteniendo un teléfono"
            />
          </div>
          <div className="philosophy-copy reveal reveal-delay">
            <h2>
              Del Posteo Aislado
              <br />
              <span>al Sistema de Captación.</span>
            </h2>
            <p>
              "Trabajar en redes no es subir fotos bonitas de destinos que
              podés encontrar en cualquier buscador. Es posicionarte como un
              experto indispensable en viajes. En Chispa Digital combinamos
              estrategia B2B, metodologías probadas de cobro de fees y
                herramientas claras para transformarte de 'cotizador masivo' en
              una agencia de viajes rentable y respetada."
            </p>
            <p>
              <strong>Investigación:</strong> Detectamos los puntos ciegos de tu
              comunicación actual.
            </p>
            <p>
              <strong>Educación:</strong> Te formamos para que dejes de
              depender de la suerte o del boca en boca.
            </p>
            <p>
              <strong>Acción:</strong> Implementamos embudos de atracción que
              traen clientes dispuestos a pagar por tu asesoría.
            </p>
          </div>
        </div>
      </section>

      <section className="testimonials-section section-pad">
        <div className="section-shell">
          <div className="testimonials-heading reveal">
            <h2>
              Testimonios y casos
              <br />
              <span>de éxito.</span>
            </h2>
          </div>
          <div className="testimonials-grid">
            <blockquote className="testimonial testimonial-yellow reveal">
              <span className="quote-mark">“</span>
              <p>
                Pasé de armar itinerarios gratis de 10 días a cobrar $100 USD
                de fee antes de abrir la laptop.
              </p>
              <footer>
                <span className="avatar avatar-purple">L</span>
                <span>
                  <strong>Laura</strong>
                  <small>Agente de Viajes</small>
                </span>
              </footer>
            </blockquote>
            <blockquote className="testimonial testimonial-lilac reveal reveal-delay">
              <span className="quote-mark">“</span>
              <p>
                El embudo que armamos en la versión Oro me permitió cerrar 4
                viajes de grupo en un solo mes usando TikTok.
              </p>
              <footer>
                <span className="avatar avatar-yellow">C</span>
                <span>
                  <strong>Carlos</strong>
                  <small>Asesor de Viajes de Lujo</small>
                </span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="diagnostic-section section-pad" id="diagnostico">
        <div className="section-shell diagnostic-layout">
          <div className="diagnostic-copy reveal">
            <h2>
              Encendamos el crecimiento de tu
              <br />
              <span>Agencia de Viajes</span>
            </h2>
            <p>
              Reservá tu sesión de diagnóstico gratuita de 15 minutos.
              Analizamos tu estado actual y te recomendamos el nivel del Método
              Chispa Digital adecuado para vos.
            </p>
          </div>
          <form
            className="diagnostic-form reveal reveal-delay"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            {submitted ? (
              <div className="success-state">
                <div className="success-icon">
                  <Check size={30} />
                </div>
                <h3>Consulta enviada.</h3>
                <p>Gracias por reservar tu diagnóstico gratuito de 15 minutos.</p>
                <button
                  type="button"
                  className="button button-yellow"
                  onClick={() => setSubmitted(false)}
                  data-testid="button-send-another"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <>
                <div className="form-heading">
                  <span>CONTACTO</span>
                  <h3>Reservá tu diagnóstico</h3>
                </div>
                <label>
                  Nombre completo
                  <input required name="name" type="text" />
                </label>
                <label>
                  Teléfono / WhatsApp (con código de país)
                  <input required name="phone" type="tel" />
                </label>
                <label>
                  Email
                  <input required name="email" type="email" />
                </label>
                <label>
                  ¿Cuál es tu situación actual como Agente de Viajes?
                  <div className="select-wrap">
                    <select required name="stage" defaultValue="">
                      <option value="" disabled>
                        Elegí una opción
                      </option>
                      <option>
                        Recién empiezo y no sé cómo captar clientes.
                      </option>
                      <option>
                        Tengo clientes pero cotizo gratis y paso muchas horas sin
                        cerrar.
                      </option>
                      <option>
                        Ya vendo bien y quiero escalar mi agencia con el programa
                        VIP y cobrar en dólares.
                      </option>
                    </select>
                    <ChevronDown size={17} />
                  </div>
                </label>
                <label>
                  Contanos sobre tu proyecto o agencia actual
                  <textarea required name="project" rows={4} />
                </label>
                {selectedPlan && (
                  <div className="selected-plan">
                    <span>Plan de interés</span>
                    <strong>{selectedPlan}</strong>
                    <button
                      type="button"
                      onClick={() => setSelectedPlan('')}
                      aria-label="Quitar plan seleccionado"
                      data-testid="button-remove-plan"
                    >
                      <X size={15} />
                    </button>
                  </div>
                )}
                <button
                  className="button button-violet form-submit"
                  type="submit"
                  data-testid="button-submit-diagnostic"
                >
                  Enviar Consulta / Reservar Diagnóstico <ArrowUpRight size={18} />
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-shell footer-main">
          <div>
            <Logo light />
            <p>Ideas que encienden marcas.</p>
          </div>
          <div className="footer-links">
            <div>
              <span>SERVICIOS PRINCIPALES</span>
              <a href="#planes">Método Chispa Bronce</a>
              <a href="#planes">Método Chispa Oro</a>
              <a href="#planes">Método Chispa Diamante</a>
              <a href="#servicios">Empresa en EE.UU. (LLC)</a>
            </div>
            <div>
              <span>CONTACTO</span>
              <a href="mailto:contacto@chispadigital.com" data-testid="link-email">
                contacto@chispadigital.com
              </a>
              <a href="tel:+5491124543980">+54 9 11 2454-3980</a>
              <span>Argentina · EE.UU.</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                data-testid="link-instagram"
              >
                <Instagram size={16} /> Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                data-testid="link-linkedin"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="section-shell footer-bottom">
          <span>© 2026 Chispa Digital. Todos los derechos reservados.</span>
          <a href="#inicio" data-testid="link-back-top">
            Volver arriba ↑
          </a>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href="https://wa.me/5491124543980"
        target="_blank"
        rel="noreferrer"
        aria-label="Escribir por WhatsApp a Chispa Digital"
        data-testid="link-whatsapp"
      >
        <MessageCircle size={22} strokeWidth={2.2} />
        <span>Hablemos</span>
      </a>
    </main>
  );
}

export default App;
