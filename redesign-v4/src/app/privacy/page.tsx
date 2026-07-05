"use client";

import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";
import { AnimateIn } from "@/components/AnimateIn";
import { Badge } from "@/components/Badge";

const LAST_UPDATED = "April 30, 2026";

/* Table of contents — labels derived from the existing section headings */
const toc = [
  { id: "introduction", label: "Introduction" },
  { id: "who-we-are", label: "Who we are" },
  { id: "information-we-collect", label: "Information we collect" },
  { id: "google-user-data", label: "Google user data" },
  { id: "how-we-use-your-information", label: "How we use your information" },
  { id: "how-we-share-information", label: "How we share information" },
  { id: "data-retention", label: "Data retention" },
  { id: "your-rights", label: "Your rights" },
  { id: "security", label: "Security" },
  { id: "international-transfers", label: "International transfers" },
  { id: "childrens-privacy", label: "Children’s privacy" },
  { id: "changes-to-this-policy", label: "Changes to this policy" },
  { id: "contact-us", label: "Contact us" },
];

export default function PrivacyPage() {
  return (
    <PageWrapper>
      <div className="bg-navy-deep">
      {/* HERO — compact, left-aligned */}
      <section className="relative bg-hero-gradient overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="aurora absolute top-0 right-0 w-[700px] h-[700px] bg-teal/8 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 lg:pt-36 pb-14">
          <AnimateIn delay={0.1}>
            <Badge variant="teal">LEGAL</Badge>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tighter text-white">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.35}>
            <div className="mt-6 flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
              <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
                How True North Automation collects, uses, and protects your information.
              </p>
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-white/40">
                Last updated: {LAST_UPDATED}
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CONTENT — open editorial layout: sticky TOC + sections */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Sticky table of contents — desktop only */}
            <aside className="hidden lg:block lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <AnimateIn>
                  <nav className="border-l border-white/10 pl-6">
                    <ul className="space-y-1">
                      {toc.map((item, i) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="group flex items-baseline gap-3 py-1.5 text-sm text-white/40 hover:text-teal-light transition-colors duration-200"
                          >
                            <span className="font-mono text-xs text-white/25 group-hover:text-gold transition-colors duration-200">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </AnimateIn>
              </div>
            </aside>

            {/* Legal sections */}
            <div className="lg:col-span-8">
              <article className="space-y-12 text-white/60 leading-relaxed">
                <Section index="01" id="introduction" title="1. Introduction">
                  <p>
                    True North Automation Inc. (&ldquo;True North Automation,&rdquo;
                    &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates
                    truenorthautomation.ai and provides AI automation services to
                    small and mid-sized businesses, primarily in Atlantic Canada.
                    This Privacy Policy explains what information we collect when
                    you use our website and services, how we use it, who we share
                    it with, and the choices you have.
                  </p>
                  <p>
                    By using truenorthautomation.ai or any of our services, you
                    agree to the practices described in this policy.
                  </p>
                </Section>

                <Section index="02" id="who-we-are" title="2. Who we are">
                  <p>
                    True North Automation Inc. is a Canadian company based in
                    Charlottetown, Prince Edward Island, Canada. You can reach us
                    at{" "}
                    <a
                      href="mailto:fabian@truenorthautomation.ai"
                      className="text-teal-light hover:text-teal font-medium underline-offset-2 hover:underline"
                    >
                      fabian@truenorthautomation.ai
                    </a>
                    .
                  </p>
                </Section>

                <Section index="03" id="information-we-collect" title="3. Information we collect">
                  <p>We collect the following categories of information:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3 text-white/55">
                    <li>
                      <strong className="text-white">Information you provide directly.</strong>{" "}
                      Name, email address, phone number, business name, business
                      type, and any details you share when filling out a form,
                      booking a call, or messaging us.
                    </li>
                    <li>
                      <strong className="text-white">Account &amp; service data.</strong>{" "}
                      Information you provide when you sign up for a service, such
                      as login identifiers, billing details, and configuration
                      settings for the automations we build for you.
                    </li>
                    <li>
                      <strong className="text-white">Customer content.</strong>{" "}
                      Calls, voicemails, transcripts, messages, leads, reviews,
                      posts, and other content that flows through the automations
                      we operate on your behalf.
                    </li>
                    <li>
                      <strong className="text-white">Third-party account data.</strong>{" "}
                      When you connect a third-party service (such as Google
                      Calendar, Gmail, a CRM, a phone system, or a social media
                      account), we access only the data needed to deliver the
                      automation you have explicitly enabled.
                    </li>
                    <li>
                      <strong className="text-white">Usage &amp; device data.</strong>{" "}
                      Standard log information such as IP address, browser type,
                      pages viewed, referring URL, and timestamps. We use cookies
                      and similar technologies for site functionality and
                      analytics.
                    </li>
                  </ul>
                </Section>

                <Section index="04" id="google-user-data" title="4. Google user data">
                  <p>
                    Some of our automations connect to Google services on your
                    behalf via OAuth (for example, Google Calendar to schedule
                    appointments booked by our AI receptionist). When you grant us
                    access, we may access, store, and process the following
                    Google user data, strictly to provide the feature you enabled:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-3 text-white/55">
                    <li>
                      <strong className="text-white">Google Calendar:</strong>{" "}
                      read your calendars and free/busy availability, and create,
                      modify, or cancel events on calendars you authorize, so we
                      can book, reschedule, or cancel appointments on your behalf.
                    </li>
                    <li>
                      <strong className="text-white">Profile &amp; email:</strong>{" "}
                      your name, email address, and Google account ID, so we can
                      identify your account and tie it to the automation we run
                      for you.
                    </li>
                  </ul>
                  <p className="mt-4">
                    <strong className="text-white">
                      Limited Use disclosure.
                    </strong>{" "}
                    True North Automation&rsquo;s use and transfer of information
                    received from Google APIs to any other app will adhere to the{" "}
                    <a
                      href="https://developers.google.com/terms/api-services-user-data-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-light hover:text-teal font-medium underline-offset-2 hover:underline"
                    >
                      Google API Services User Data Policy
                    </a>
                    , including the Limited Use requirements. Specifically:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-3 text-white/55">
                    <li>
                      We use Google user data only to provide and improve the
                      user-facing features that you have explicitly authorized.
                    </li>
                    <li>
                      We do not sell Google user data, and we do not use it for
                      serving advertisements.
                    </li>
                    <li>
                      We do not transfer Google user data to third parties except
                      (a) as necessary to provide the service, (b) for security
                      purposes, (c) to comply with applicable law, or (d) as part
                      of a merger or acquisition with appropriate notice.
                    </li>
                    <li>
                      We do not allow humans to read Google user data unless we
                      have your affirmative consent for specific messages, it is
                      necessary for security (such as investigating abuse), to
                      comply with applicable law, or for internal operations where
                      the data has been aggregated and anonymized.
                    </li>
                  </ul>
                  <p className="mt-4">
                    You can revoke our access to your Google account at any time
                    by visiting{" "}
                    <a
                      href="https://myaccount.google.com/permissions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-light hover:text-teal font-medium underline-offset-2 hover:underline"
                    >
                      myaccount.google.com/permissions
                    </a>
                    .
                  </p>
                </Section>

                <Section index="05" id="how-we-use-your-information" title="5. How we use your information">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3 text-white/55">
                    <li>
                      Provide, operate, and maintain the automations and services
                      you have requested.
                    </li>
                    <li>
                      Schedule appointments, follow up with leads, respond to
                      calls and messages, and perform the specific tasks you have
                      authorized.
                    </li>
                    <li>
                      Communicate with you about your account, scheduled audits,
                      invoices, and customer support.
                    </li>
                    <li>
                      Improve our services, debug issues, and protect against
                      fraud, abuse, and security threats.
                    </li>
                    <li>Comply with legal obligations.</li>
                  </ul>
                </Section>

                <Section index="06" id="how-we-share-information" title="6. How we share information">
                  <p>
                    We do not sell your personal information. We share information
                    only in these limited situations:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-3 text-white/55">
                    <li>
                      <strong className="text-white">Service providers.</strong>{" "}
                      Vetted infrastructure and tooling providers (such as cloud
                      hosting, telephony, email, AI model providers, analytics,
                      and payment processors) that help us run the service. They
                      may process your data only on our instructions.
                    </li>
                    <li>
                      <strong className="text-white">With your consent.</strong>{" "}
                      Where you have asked us to connect to a third-party service
                      on your behalf.
                    </li>
                    <li>
                      <strong className="text-white">Legal &amp; safety.</strong>{" "}
                      To comply with a valid legal request, enforce our
                      agreements, or protect the rights, property, or safety of
                      True North Automation, our customers, or the public.
                    </li>
                    <li>
                      <strong className="text-white">Business transfers.</strong>{" "}
                      In connection with a merger, acquisition, or sale of assets,
                      with appropriate notice and continuing protection of your
                      information.
                    </li>
                  </ul>
                </Section>

                <Section index="07" id="data-retention" title="7. Data retention">
                  <p>
                    We retain personal information for as long as your account is
                    active or as needed to provide the service. After you stop
                    using our services, we retain information only as long as
                    necessary to comply with legal obligations, resolve disputes,
                    and enforce our agreements. You can request deletion at any
                    time (see Your rights below).
                  </p>
                </Section>

                <Section index="08" id="your-rights" title="8. Your rights">
                  <p>
                    Depending on your jurisdiction, you may have the right to
                    access, correct, export, or delete the personal information we
                    hold about you, and to withdraw consent for processing. To
                    exercise any of these rights, email us at{" "}
                    <a
                      href="mailto:fabian@truenorthautomation.ai"
                      className="text-teal-light hover:text-teal font-medium underline-offset-2 hover:underline"
                    >
                      fabian@truenorthautomation.ai
                    </a>
                    . We will respond within a reasonable timeframe.
                  </p>
                  <p>
                    You can also revoke our access to any third-party account
                    (Google, social media, etc.) directly in that provider&rsquo;s
                    account settings.
                  </p>
                </Section>

                <Section index="09" id="security" title="9. Security">
                  <p>
                    We use industry-standard administrative, technical, and
                    physical safeguards to protect your information, including
                    encryption in transit, access controls, and audit logging. No
                    method of transmission or storage is 100% secure, but we work
                    hard to protect your data and notify you of material breaches
                    as required by law.
                  </p>
                </Section>

                <Section index="10" id="international-transfers" title="10. International transfers">
                  <p>
                    Our service providers may process your data outside of Canada,
                    including in the United States. Where required, we put
                    appropriate safeguards in place to protect personal
                    information transferred internationally.
                  </p>
                </Section>

                <Section index="11" id="childrens-privacy" title="11. Children&rsquo;s privacy">
                  <p>
                    Our services are not directed to children under 16 and we do
                    not knowingly collect personal information from children. If
                    you believe a child has provided us with personal information,
                    please contact us and we will delete it.
                  </p>
                </Section>

                <Section index="12" id="changes-to-this-policy" title="12. Changes to this policy">
                  <p>
                    We may update this policy from time to time. When we do, we
                    will revise the &ldquo;Last updated&rdquo; date at the top of
                    this page and, for material changes, provide additional notice
                    (for example, by email or a prominent notice on the site).
                  </p>
                </Section>

                <Section index="13" id="contact-us" title="13. Contact us">
                  <p>If you have any questions about this Privacy Policy, contact:</p>
                  <div className="mt-4 p-5 rounded-xl bg-white/5 border border-white/10">
                    <p className="font-semibold text-white">
                      True North Automation Inc.
                    </p>
                    <p>Charlottetown, Prince Edward Island, Canada</p>
                    <p className="mt-2">
                      <a
                        href="mailto:fabian@truenorthautomation.ai"
                        className="text-teal-light hover:text-teal font-medium underline-offset-2 hover:underline"
                      >
                        fabian@truenorthautomation.ai
                      </a>
                    </p>
                    <p>+1 (902) 316-0111</p>
                  </div>
                </Section>

                <div className="pt-6 border-t border-white/10 text-sm text-white/40">
                  See also our{" "}
                  <Link
                    href="/terms"
                    className="text-teal-light hover:text-teal font-medium underline-offset-2 hover:underline"
                  >
                    Terms of Service
                  </Link>
                  .
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      </div>
    </PageWrapper>
  );
}

function Section({
  index,
  id,
  title,
  children,
}: {
  index: string;
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-32 pt-10 border-t border-white/10 first:pt-0 first:border-t-0"
    >
      <AnimateIn>
        <span className="block font-mono text-xs tracking-[0.3em] text-gold mb-3">
          {index}
        </span>
        <h2 className="text-2xl font-bold text-white tracking-tighter mb-4">
          {title}
        </h2>
        <div className="space-y-4">{children}</div>
      </AnimateIn>
    </section>
  );
}
