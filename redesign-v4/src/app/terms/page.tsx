"use client";

import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";
import { AnimateIn } from "@/components/AnimateIn";
import { Badge } from "@/components/Badge";

const LAST_UPDATED = "April 30, 2026";

/* Table of contents — labels derived from the existing section headings */
const toc = [
  { id: "agreement", label: "Agreement" },
  { id: "the-services", label: "The Services" },
  { id: "eligibility-accounts", label: "Eligibility & accounts" },
  { id: "customer-responsibilities", label: "Customer responsibilities" },
  { id: "fees-billing-refunds", label: "Fees, billing & refunds" },
  { id: "customer-content-data", label: "Customer content & data" },
  { id: "third-party-services", label: "Third-party services" },
  { id: "intellectual-property", label: "Intellectual property" },
  { id: "ai-generated-output", label: "AI-generated output" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "limitation-of-liability", label: "Limitation of liability" },
  { id: "indemnification", label: "Indemnification" },
  { id: "suspension-termination", label: "Suspension & termination" },
  { id: "changes-to-the-terms", label: "Changes to the Terms" },
  { id: "governing-law-disputes", label: "Governing law & disputes" },
  { id: "contact", label: "Contact" },
];

export default function TermsPage() {
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
              Terms of <span className="text-gradient">Service</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.35}>
            <div className="mt-6 flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
              <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
                The rules for using truenorthserviceflow.ai and the services we
                provide.
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
                <Section index="01" id="agreement" title="1. Agreement">
                  <p>
                    These Terms of Service (&ldquo;Terms&rdquo;) form a binding
                    agreement between you and TrueNorth ServiceFlow AI Inc.
                    (&ldquo;TrueNorth ServiceFlow AI,&rdquo; &ldquo;we,&rdquo;
                    &ldquo;our,&rdquo; or &ldquo;us&rdquo;) and govern your access
                    to and use of truenorthserviceflow.ai and the automation
                    services we provide (the &ldquo;Services&rdquo;). By using the
                    Services, you agree to these Terms. If you do not agree, do
                    not use the Services.
                  </p>
                </Section>

                <Section index="02" id="the-services" title="2. The Services">
                  <p>
                    TrueNorth ServiceFlow AI builds and operates AI-powered
                    automations for small and mid-sized businesses, including
                    call response, lead follow-up, content publishing, review
                    management, scheduling, and related workflow automation. The
                    exact scope of work for each customer is defined in a
                    separate order, statement of work, or written agreement.
                  </p>
                  <p>
                    We may add, change, or discontinue features over time. We
                    will give reasonable notice of material changes that affect
                    paying customers.
                  </p>
                </Section>

                <Section index="03" id="eligibility-accounts" title="3. Eligibility &amp; accounts">
                  <p>
                    You must be at least 18 years old and authorized to enter
                    into these Terms on behalf of yourself or the business you
                    represent. You are responsible for keeping your login
                    credentials confidential and for all activity on your
                    account. Notify us immediately at{" "}
                    <a
                      href="mailto:fabian@truenorthserviceflow.ai"
                      className="text-teal-light hover:text-teal font-medium underline-offset-2 hover:underline"
                    >
                      fabian@truenorthserviceflow.ai
                    </a>{" "}
                    if you believe your account has been compromised.
                  </p>
                </Section>

                <Section index="04" id="customer-responsibilities" title="4. Customer responsibilities">
                  <p>You agree to:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3 text-white/55">
                    <li>
                      Provide accurate, complete information when booking,
                      onboarding, or configuring the Services.
                    </li>
                    <li>
                      Hold all rights and authorizations necessary for us to
                      access the third-party systems you connect (Google
                      Calendar, Gmail, CRMs, phone systems, social profiles,
                      etc.) and process the data that flows through them.
                    </li>
                    <li>
                      Use the Services in compliance with applicable laws,
                      including telemarketing, spam, anti-trust, advertising,
                      privacy, and consumer protection laws (e.g., Canada&rsquo;s
                      Anti-Spam Legislation, TCPA, GDPR where applicable).
                    </li>
                    <li>
                      Not use the Services to send unsolicited messages,
                      impersonate others, infringe intellectual property, harass
                      anyone, or for any unlawful purpose.
                    </li>
                    <li>
                      Provide accurate disclosures and consents to your end
                      customers as required by law (e.g., notifying callers that
                      a call may be recorded or handled by an AI assistant).
                    </li>
                  </ul>
                </Section>

                <Section index="05" id="fees-billing-refunds" title="5. Fees, billing &amp; refunds">
                  <p>
                    Fees for the Services are set out in the order or proposal we
                    agree with you. Unless otherwise stated, fees are billed in
                    advance, are non-refundable except where required by law,
                    and exclude applicable taxes. Failure to pay may result in
                    suspension or termination of the Services after reasonable
                    notice.
                  </p>
                </Section>

                <Section index="06" id="customer-content-data" title="6. Customer content &amp; data">
                  <p>
                    You retain ownership of all content and data you provide or
                    that flows through the automations we operate for you
                    (&ldquo;Customer Content&rdquo;). You grant us a limited,
                    non-exclusive license to host, copy, transmit, and process
                    Customer Content solely as needed to deliver, secure, and
                    improve the Services for you, and as further described in
                    our{" "}
                    <Link
                      href="/privacy"
                      className="text-teal-light hover:text-teal font-medium underline-offset-2 hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </Section>

                <Section index="07" id="third-party-services" title="7. Third-party services">
                  <p>
                    The Services may integrate with third-party platforms (such
                    as Google, OpenAI, Anthropic, telephony providers, CRMs, and
                    social networks). Your use of those platforms is governed by
                    their own terms and privacy policies. We are not responsible
                    for the availability, accuracy, or behavior of third-party
                    services. If a third-party platform changes or restricts its
                    APIs, we may have to modify or discontinue the affected
                    feature.
                  </p>
                </Section>

                <Section index="08" id="intellectual-property" title="8. Intellectual property">
                  <p>
                    The Services, including the website, software, prompts,
                    workflows, documentation, branding, and other materials we
                    produce (excluding Customer Content), are owned by TrueNorth ServiceFlow AI or our licensors and are protected by intellectual
                    property laws. We grant you a limited, non-transferable,
                    non-exclusive right to use the Services during your
                    subscription. You may not copy, reverse-engineer, resell, or
                    build a competing product using our materials.
                  </p>
                  <p>
                    We may use anonymized, aggregated data derived from the
                    Services to operate, improve, and benchmark our products,
                    provided it does not identify you or your customers.
                  </p>
                </Section>

                <Section index="09" id="ai-generated-output" title="9. AI-generated output">
                  <p>
                    Our Services use artificial intelligence to generate calls,
                    messages, replies, posts, and similar output. AI output can
                    contain errors or unexpected results. You are responsible for
                    reviewing output before relying on it for important
                    decisions, and for ensuring it is accurate, appropriate, and
                    compliant with applicable law before it is sent to or used
                    with your customers.
                  </p>
                </Section>

                <Section index="10" id="disclaimers" title="10. Disclaimers">
                  <p>
                    THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
                    AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, WHETHER
                    EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WARRANTIES OF
                    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                    NON-INFRINGEMENT, AND ANY WARRANTY THAT THE SERVICES WILL BE
                    UNINTERRUPTED, ERROR-FREE, OR SECURE. We do not guarantee any
                    specific business outcome.
                  </p>
                </Section>

                <Section index="11" id="limitation-of-liability" title="11. Limitation of liability">
                  <p>
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, TRUENORTH SERVICEFLOW AI
                    AND ITS DIRECTORS, OFFICERS, EMPLOYEES, AND AGENTS WILL NOT
                    BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                    CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS,
                    REVENUE, GOODWILL, OR DATA, ARISING OUT OF OR RELATED TO YOUR
                    USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE
                    POSSIBILITY OF SUCH DAMAGES.
                  </p>
                  <p>
                    OUR TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS ARISING OUT OF
                    OR RELATING TO THESE TERMS OR THE SERVICES WILL NOT EXCEED
                    THE GREATER OF (A) THE AMOUNTS YOU PAID US FOR THE SERVICES
                    IN THE THREE (3) MONTHS BEFORE THE EVENT GIVING RISE TO THE
                    CLAIM, OR (B) ONE HUNDRED CANADIAN DOLLARS (CAD $100).
                  </p>
                </Section>

                <Section index="12" id="indemnification" title="12. Indemnification">
                  <p>
                    You agree to defend, indemnify, and hold harmless TrueNorth ServiceFlow AI from any claim, liability, damage, loss, or
                    expense (including reasonable legal fees) arising out of (a)
                    your Customer Content, (b) your use of the Services in
                    violation of these Terms or applicable law, or (c) your
                    violation of a third party&rsquo;s rights.
                  </p>
                </Section>

                <Section index="13" id="suspension-termination" title="13. Suspension &amp; termination">
                  <p>
                    Either party may terminate the Services as set out in the
                    applicable order or, if no order specifies, on 30 days&rsquo;
                    written notice. We may suspend or terminate access
                    immediately if you breach these Terms, fail to pay, or use
                    the Services in a way that creates legal, security, or
                    reputational risk. On termination, your right to use the
                    Services ends. Sections that by their nature should survive
                    termination will survive.
                  </p>
                </Section>

                <Section index="14" id="changes-to-the-terms" title="14. Changes to the Terms">
                  <p>
                    We may update these Terms from time to time. When we do, we
                    will revise the &ldquo;Last updated&rdquo; date and, for
                    material changes, provide additional notice. Continued use of
                    the Services after the changes take effect means you accept
                    the updated Terms.
                  </p>
                </Section>

                <Section index="15" id="governing-law-disputes" title="15. Governing law &amp; disputes">
                  <p>
                    These Terms are governed by the laws of the Province of
                    Prince Edward Island and the federal laws of Canada
                    applicable in it, without regard to conflict-of-laws rules.
                    The parties submit to the exclusive jurisdiction of the
                    courts located in Prince Edward Island for any dispute
                    arising out of or relating to these Terms or the Services,
                    except that either party may seek injunctive relief in any
                    court of competent jurisdiction.
                  </p>
                </Section>

                <Section index="16" id="contact" title="16. Contact">
                  <p>If you have questions about these Terms, contact:</p>
                  <div className="mt-4 p-5 rounded-xl bg-white/5 border border-white/10">
                    <p className="font-semibold text-white">
                      TrueNorth ServiceFlow AI Inc.
                    </p>
                    <p>Charlottetown, Prince Edward Island, Canada</p>
                    <p className="mt-2">
                      <a
                        href="mailto:fabian@truenorthserviceflow.ai"
                        className="text-teal-light hover:text-teal font-medium underline-offset-2 hover:underline"
                      >
                        fabian@truenorthserviceflow.ai
                      </a>
                    </p>
                    <p>+1 (902) 316-0111</p>
                  </div>
                </Section>

                <div className="pt-6 border-t border-white/10 text-sm text-white/40">
                  See also our{" "}
                  <Link
                    href="/privacy"
                    className="text-teal-light hover:text-teal font-medium underline-offset-2 hover:underline"
                  >
                    Privacy Policy
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
