// QUANTUMMIND TECHNOLOGIES — Single-file React site
// File: QUANTUMMINDTechnologies.jsx
// Implements: Industries section, expanded Contact form, FAQ + JSON-LD, refined Footer links, SEO/OG meta injection

import { useEffect, useMemo, useState } from "react";

const navItems = [
  { label: "Solutions", href: "#solutions" },
  { label: "Cloud", href: "#cloud" },
  { label: "Cybersecurity", href: "#security" },
  { label: "Industries", href: "#industries" },
  { label: "Support", href: "#support" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Legal", href: "#legal" },
];

// --- SEO/OG: lightweight injection without external libs (Next.js users: move these to <Head>)
const SEO = {
  title: "QUANTUMMIND TECHNOLOGIES — Software Licensing, Cloud & Security (UK & EU)",
  description:
    "Licensing made simple. Cloud made scalable. Security made smarter. Serving the UK & Europe with software, cloud, and cybersecurity solutions.",
  url: "https://www.quantummindtechnologies.co.uk/",
  image: "https://example.com/og-image-1200x630.jpg", // replace with your hosted image 1200x630
};

function injectSEO() {
  const setMeta = (name, content, attr = "name") => {
    let el = document.querySelector(`meta[${attr}='${name}']`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  };
  document.title = SEO.title;
  setMeta("description", SEO.description);
  setMeta("og:title", SEO.title, "property");
  setMeta("og:description", SEO.description, "property");
  setMeta("og:type", "website", "property");
  setMeta("og:url", SEO.url, "property");
  setMeta("og:image", SEO.image, "property");
  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", SEO.title);
  setMeta("twitter:description", SEO.description);
  setMeta("twitter:image", SEO.image);
}

export default function QUANTUMMINDTechnologies() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const [faqJsonAdded, setFaqJsonAdded] = useState(false);

  useEffect(() => {
    injectSEO();
  }, []);

  useEffect(() => {
    if (faqJsonAdded) return;
    // Inject Organization + FAQ JSON-LD
    const ld = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "QUANTUMMIND TECHNOLOGIES",
      url: SEO.url,
      email: "sales@quantummindtechnologies.co.uk",
      address: {
        "@type": "PostalAddress",
        streetAddress: "167-169 Great Portland Street, 5th Floor",
        addressLocality: "London",
        postalCode: "W1W 5PF",
        addressCountry: "UK",
      },
    };
    const faq = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do you price licensing?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "We compare subscription, perpetual, and CSP models across vendors and right-size licenses to usage. Quotes typically within 24 hours.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide 24/7 support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — optional 24/7 plans with 1-hour first response for Priority-1 incidents.",
          },
        },
        {
          "@type": "Question",
          name: "Can you migrate us with zero downtime?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "We design cutover or phased migrations to minimise downtime; exact SLA depends on systems and windows.",
          },
        },
        {
          "@type": "Question",
          name: "Are you GDPR compliant?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Our processes are GDPR-aligned with EU/UK data residency options. Formal DPA available on request.",
          },
        },
      ],
    };
    const s1 = document.createElement("script");
    s1.type = "application/ld+json";
    s1.text = JSON.stringify(ld);
    document.head.appendChild(s1);
    const s2 = document.createElement("script");
    s2.type = "application/ld+json";
    s2.text = JSON.stringify(faq);
    document.head.appendChild(s2);
    setFaqJsonAdded(true);
  }, [faqJsonAdded]);

  return (
    <div className="min-h-screen scroll-smooth bg-white text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo + name */}
          <a href="#top" className="flex items-center gap-3" aria-label="QUANTUMMIND TECHNOLOGIES home">
            {/* Company Logo Placeholder */}
            <div className="h-10 w-10 shrink-0 rounded-2xl bg-indigo-600 text-white shadow-inner shadow-indigo-900/20 ring-1 ring-indigo-500/20 flex items-center justify-center font-semibold">
              QM
            </div>
            <div className="leading-tight">
              <p className="text-xs tracking-wide text-slate-500">SOFTWARE • CLOUD • SECURITY</p>
              <p className="font-semibold">QUANTUMMIND TECHNOLOGIES LIMITED</p>
            </div>
          </a>

          {/* Nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              {navItems.map((n) => (
                <li key={n.href}>
                  <a
                    className="text-sm font-medium text-slate-700 hover:text-indigo-700 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    href={n.href}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-indigo-600/10 hover:bg-indigo-700 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Request a Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" aria-label="Hero" className="relative isolate">
        {/* Background banner image — 1920x600px suggested */}
        <div
          className="absolute inset-0 -z-10 h-[420px] w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1920&auto=format&fit=crop')",
          }}
          role="img"
          aria-label="Abstract cloud-network background"
        />
        <div className="mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
          <div className="max-w-3xl rounded-3xl bg-white/80 p-6 shadow-xl ring-1 ring-white/70 backdrop-blur">
            <p className="text-sm font-medium tracking-wide text-slate-600">
              Your trusted partner in software, cloud & security solutions
            </p>
            <h1 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Licensing made simple. Cloud made scalable. Security made smarter.
            </h1>
            <p className="mt-4 text-slate-700">
              We help businesses across the UK and Europe access the right software, cloud platforms & cybersecurity tools — with competitive pricing and expert support.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#solutions"
                className="inline-flex items-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-indigo-600/10 hover:bg-indigo-700 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Discover Our Solutions
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-indigo-700 shadow-sm ring-1 ring-indigo-600/20 hover:bg-indigo-50 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Talk to an Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-wider text-slate-500">Licensing • Cost Control • Compliance</p>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Licensing", desc: "Audit usage, right‑size plans, eliminate overspend.", href: "#solutions-licensing" },
            { title: "Cloud", desc: "M365, Azure, AWS, Google Workspace & SaaS.", href: "#cloud" },
            { title: "Cybersecurity", desc: "Endpoint, email, firewalls, SIEM, training.", href: "#security" },
            { title: "Managed Support", desc: "Helpdesk, monitoring, renewals & upgrades.", href: "#support" },
          ].map((c) => (
            <a key={c.title} href={c.href} className="block rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
            </a>
          ))}
        </div>

        {/* Deep-dive: Licensing */}
        <div id="solutions-licensing" className="mt-14 grid items-center gap-10 md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600&auto=format&fit=crop"
            alt="Business partnership handshake over technology background"
            className="aspect-[8/5] w-full rounded-3xl object-cover shadow-lg ring-1 ring-slate-200"
          />
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Software Reselling & Licensing</h2>
            <p className="mt-3 text-slate-700">
              At QUANTUMMIND TECHNOLOGIES, software reselling is at the core of what we do. We simplify licensing, reduce
              costs, and ensure compliance, so your organisation always has the right tools in place.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>• Strong vendor relationships with Microsoft, Adobe, Cisco, Oracle, VMware, and more</li>
              <li>• Flexible licensing options: perpetual, subscription, or pay‑as‑you‑go</li>
              <li>• Regular license reviews to prevent overspending (often 10–30% savings)</li>
              <li>• End‑to‑end lifecycle support: purchase → renewals → compliance</li>
              <li>• Wide coverage: productivity tools, enterprise apps, cybersecurity platforms, and SaaS</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cloud Applications */}
      <section id="cloud" className="relative isolate">
        <div
          className="absolute inset-0 -z-10 h-[420px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1920&auto=format&fit=crop')",
          }}
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/85 p-8 shadow-xl ring-1 ring-white/70 backdrop-blur">
            <h2 className="text-2xl font-bold tracking-tight">Cloud Applications</h2>
            <p className="mt-3 text-slate-700">We help you choose, deploy, and optimise the right cloud stack.</p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {["Microsoft 365", "Azure", "AWS", "Google Workspace"].map((c) => (
                <div key={c} className="rounded-xl border border-slate-200 bg-white p-4 text-center font-semibold">
                  {c}
                </div>
              ))}
            </div>
            <p className="mt-6 text-slate-700">Plus specialised SaaS tailored to your industry.</p>
          </div>
        </div>
      </section>

      {/* Cybersecurity */}
      <section id="security" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Cybersecurity Software</h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>• Endpoint protection & firewalls</li>
              <li>• Email security & anti‑phishing</li>
              <li>• Threat monitoring & SIEM</li>
              <li>• Vulnerability scanning & penetration testing</li>
              <li>• Security awareness training</li>
            </ul>
          </div>
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop"
            alt="Cybersecurity shield and server room"
            className="aspect-[8/5] w-full rounded-3xl object-cover shadow-lg ring-1 ring-slate-200"
          />
        </div>
      </section>

      {/* Industries (NEW) */}
      <section id="industries" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-wider text-slate-500">Tailored outcomes by sector</p>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { name: "Finance", outcome: "Reduce audit risk • DLP & SIEM" },
            { name: "Legal", outcome: "Secure collaboration • eDiscovery" },
            { name: "Retail", outcome: "POS security • MDM at scale" },
            { name: "Manufacturing", outcome: "OT segmentation • patch cadence" },
            { name: "Public Sector", outcome: "Procurement-ready • compliance" },
          ].map((i) => (
            <div key={i.name} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{i.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{i.outcome}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IT Helpdesk & Managed Support */}
      <section id="support" className="relative isolate">
        <div
          className="absolute inset-0 -z-10 h-[460px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1920&auto=format&fit=crop')",
          }}
          aria-hidden
        />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/85 p-8 shadow-xl ring-1 ring-white/70 backdrop-blur">
            <h2 className="text-2xl font-bold tracking-tight">IT Helpdesk & Managed Support</h2>
            <ul className="mt-4 grid gap-3 text-slate-700 sm:grid-cols-3">
              <li>• Renewals & upgrades</li>
              <li>• Troubleshooting & ticketing</li>
              <li>• Proactive monitoring</li>
            </ul>
            <p className="mt-4 text-slate-700">Business hours or 24/7 options. 1‑hour first response on Priority‑1.</p>
            <div className="mt-6">
              <a
                className="inline-flex items-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-indigo-600/10 hover:bg-indigo-700 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                href="#contact"
              >
                Request Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">About Us</h2>
            <p className="mt-3 text-slate-700">
              QUANTUMMIND TECHNOLOGIES is a London-based software reseller and IT solutions provider, supporting
              organisations across the UK and Europe. We deliver software, cloud, and security solutions that are simple,
              cost‑effective, and tailored to your goals.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1551836022-405b0220d556?q=80&w=1200&auto=format&fit=crop"
            alt="Modern office team collaborating"
            className="aspect-square w-full max-w-sm justify-self-center rounded-3xl object-cover shadow-lg ring-1 ring-slate-200"
          />
        </div>
      </section>

      {/* FAQ (NEW) */}
      <section id="faq" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight">FAQs</h2>
        <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200">
          {[
            {
              q: "How do you price licensing?",
              a: "We compare subscription, perpetual, and CSP models across vendors and right-size licenses to usage. Quotes typically within 24 hours.",
            },
            { q: "Do you provide 24/7 support?", a: "Yes — optional 24/7 plans with 1-hour first response for Priority-1 incidents." },
            {
              q: "Can you migrate us with zero downtime?",
              a: "We design cutover or phased migrations to minimise downtime; exact SLA depends on systems and change windows.",
            },
            { q: "Are you GDPR compliant?", a: "Our processes are GDPR-aligned with EU/UK data residency options. DPA available on request." },
          ].map((item, idx) => (
            <details key={idx} className="group p-5">
              <summary className="cursor-pointer list-none font-medium text-slate-800">
                {item.q}
                <span className="float-right transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact (expanded) */}
      <section id="contact" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight">Contact Us</h2>
            <address className="mt-4 not-italic text-slate-700">
              <p>📍 167-169 Great Portland Street, 5th Floor, London, UK W1W 5PF</p>
              <p className="mt-2">
                📧 <a className="text-indigo-700 underline underline-offset-2" href="mailto:sales@quantummindtechnologies.co.uk">sales@quantummindtechnologies.co.uk</a>
              </p>
            </address>
            <form className="mt-6 grid grid-cols-1 gap-4" onSubmit={(e) => e.preventDefault()}>
              <input className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" placeholder="Your name" required />
              <input type="email" className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" placeholder="Work email" required />
              <input className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" placeholder="Company" required />
              <input className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" placeholder="Phone (optional)" />
              <select className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" defaultValue="">
                <option value="" disabled>Employee count</option>
                <option>1–50</option>
                <option>51–250</option>
                <option>251–1,000</option>
                <option>1,001–5,000</option>
                <option>5,001+</option>
              </select>
              <fieldset className="rounded-xl border border-slate-200 p-4">
                <legend className="text-sm font-medium text-slate-700">Interested in</legend>
                <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-700">
                  {[
                    "Licensing",
                    "Cloud",
                    "Cybersecurity",
                    "Managed Support",
                    "Audit & Compliance",
                    "Other",
                  ].map((opt) => (
                    <label key={opt} className="inline-flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" /> {opt}
                    </label>
                  ))}
                </div>
              </fieldset>
              <textarea className="min-h-[120px] w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" placeholder="How can we help?" />
              <label className="text-sm text-slate-700">Attach RFP or brief (optional)
                <input type="file" accept=".pdf,.doc,.docx" className="mt-1 block w-full rounded-xl border border-slate-300 px-4 py-2" />
              </label>
              <label className="mt-2 inline-flex items-start gap-2 text-sm text-slate-600">
                <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                I agree to be contacted about my enquiry and confirm I’ve read the Privacy Notice.
              </label>
              <button className="mt-2 inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-indigo-600/10 hover:bg-indigo-700 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                Send Enquiry
              </button>
              <p className="text-xs text-slate-500">Prefer a call? Book a 20‑minute consult — add your Calendly/HubSpot link here.</p>
            </form>
          </div>
          <img
            src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop"
            alt="London office district"
            className="aspect-square w-full rounded-3xl object-cover shadow-lg ring-1 ring-slate-200"
          />
        </div>
      </section>

      {/* Legal & Compliance */}
      <section id="legal" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Legal & Compliance</h2>
              <p className="mt-3 text-slate-700">
                We are committed to transparency, responsibility, and compliance across operations in the UK & Europe.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                <li><strong>Privacy & Data</strong> — Privacy Notice, Cookie Settings, Data Processing Addendum.</li>
                <li><strong>Security & IP</strong> — safe handling of data, third‑party licenses, and intellectual property rights.</li>
                <li><strong>Ethical Standards</strong> — UK Modern Slavery Act Statement, Responsible AI, Environmental (WEEE) compliance.</li>
                <li><strong>Agreements</strong> — master contracts and supplementary measures governing client & partner relationships.</li>
              </ul>
              <p className="mt-4 text-sm text-slate-600">Detailed documents available on request or via your customer portal.</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop"
              alt="Compliance and cybersecurity visual"
              className="aspect-[8/5] w-full rounded-3xl object-cover shadow-lg ring-1 ring-slate-200"
            />
          </div>
        </div>
      </section>

      {/* Footer (refined links) */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <p className="text-sm font-semibold">QUANTUMMIND TECHNOLOGIES LIMITED</p>
              <p className="mt-2 text-sm text-slate-600">Serving the UK & Europe.</p>
              <p className="mt-2 text-sm text-slate-600">167-169 Great Portland Street, 5th Floor, London, W1W 5PF</p>
              <p className="mt-2 text-sm text-slate-600">Company No. / VAT — add when available</p>
            </div>
            <div>
              <p className="text-sm font-semibold">Products & Services</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                <li><a className="hover:text-indigo-700" href="#solutions">Solutions</a></li>
                <li><a className="hover:text-indigo-700" href="#solutions-licensing">Licensing</a></li>
                <li><a className="hover:text-indigo-700" href="#cloud">Cloud</a></li>
                <li><a className="hover:text-indigo-700" href="#security">Cybersecurity</a></li>
                <li><a className="hover:text-indigo-700" href="#support">Managed Support</a></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold">Company</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                <li><a className="hover:text-indigo-700" href="#about">About</a></li>
                <li><span className="text-slate-400">Careers (coming soon)</span></li>
                <li><a className="hover:text-indigo-700" href="#contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold">Trust</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                <li><a className="hover:text-indigo-700" href="#legal">Legal & Compliance</a></li>
                <li><a className="hover:text-indigo-700" href="#">Privacy Notice</a></li>
                <li><a className="hover:text-indigo-700" href="#">Cookie Settings</a></li>
                <li><a className="hover:text-indigo-700" href="#">Data Processing Addendum</a></li>
                <li><a className="hover:text-indigo-700" href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row">
            <p>© {currentYear} QUANTUMMIND TECHNOLOGIES LIMITED. All rights reserved.</p>
            <p>Made with care for performance, accessibility, and privacy.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
