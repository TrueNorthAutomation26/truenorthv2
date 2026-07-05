"use client";

import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";
import { AnimateIn } from "@/components/AnimateIn";
import { Badge } from "@/components/Badge";

const LAST_UPDATED = "April 30, 2026";

export default function TermsPage() {
  return (
    <PageWrapper>
      {/* HERO */}
      <section className="relative bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-teal/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 pt-36 pb-20 text-center">
          <AnimateIn delay={0.1}>
            <Badge variant="teal">LEGAL</Badge>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <h1 className="mt-8 text-5xl sm:text-6xl font-extrabold leading-[1.05] tracking-tight text-white">
              Terms of <span className="text-gradient">Service</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.35}>
            <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
              The rules for using truenorthautomation.ai and the services we
              provide.
            </p>
            <p className="mt-3 text-sm text-white/40">
              Last updated: {LAST_UPDATED}
            </p>
          </AnimateIn>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-light-bg to-transparent" />
      </section>

      {/* CONTENT */}
      <section className="py-20 lg:py-28 bg-light-bg relative">
        <div className="absolute inset-0 dot-pattern-light" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12 space-y-10 text-gray-700 leading-relaxed">
              <Section title="1. Agreement">
                <p>
                  These Terms of Service (&ldquo;Terms&rdquo;) form a binding
                  agreement between you and True North Automation Inc.
                  (&ldquo;True North Automation,&rdquo; &ldquo;we,&rdquo;
                  &ldquo;our,&rdquo; or &ldquo;us&rdquo;) and govern your access
                  to and use of truenorthautomation.ai and the automation
                  services we provide (the &ldquo;Services&rdquo;). By using the
                  Services, you agree to these Terms. If you do not agree, do
                  not use the Services.
                </p>
              </Section>

              <Section title="2. The Services">
                <p>
                  True North Automation builds and operates AI-powered
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

              <Section title="3. Eligibility &amp; accounts">
                <p>
                  You must be at least 18 years old and authorized to enter
                  into these Terms on behalf of yourself or the business you
                  represent. You are responsible for keeping your login
                  credentials confidential and for all activity on your
                  account. Notify us immediately at{" "}
                  <a
                    href="mailto:fabian@truenorthautomation.ai"
                    className="text-teal hover:text-teal-dark font-medium underline-offset-2 hover:underline"
                  >
                    fabian@truenorthautomation.ai
                  </a>{" "}
                  if you believe your account has been compromised.
                </p>
              </Section>

              <Section title="4. Customer responsibilities">
                <p>You agree to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
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

              <Section title="5. Fees, billing &amp; refunds">
                <p>
                  Fees for the Services are set out in the order or proposal we
                  agree with you. Unless otherwise stated, fees are billed in
                  advance, are non-refundable except where required by law,
                  and exclude applicable taxes. Failure to pay may result in
                  suspension or termination of the Services after reasonable
                  notice.
                </p>
              </Section>

              <Section title="6. Customer content &amp; data">
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
                    className="text-teal hover:text-teal-dark font-medium underline-offset-2 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </Section>

              <Section title="7. Third-party services">
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

              <Section title="8. Intellectual property">
                <p>
                  The Services, including the website, software, prompts,
                  workflows, documentation, branding, and other materials we
                  produce (excluding Customer Content), are owned by True North
                  Automation or our licensors and are protected by intellectual
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

              <Section title="9. AI-generated output">
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

              <Section title="10. Disclaimers">
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

              <Section title="11. Limitation of liability">
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, TRUE NORTH AUTOMATION
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

              <Section title="12. Indemnification">
                <p>
                  You agree to defend, indemnify, and hold harmless True North
                  Automation from any claim, liability, damage, loss, or
                  expense (including reasonable legal fees) arising out of (a)
                  your Customer Content, (b) your use of the Services in
                  violation of these Terms or applicable law, or (c) your
                  violation of a third party&rsquo;s rights.
                </p>
              </Section>

              <Section title="13. Suspension &amp; termination">
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

              <Section title="14. Changes to the Terms">
                <p>
                  We may update these Terms from time to time. When we do, we
                  will revise the &ldquo;Last updated&rdquo; date and, for
                  material changes, provide additional notice. Continued use of
                  the Services after the changes take effect means you accept
                  the updated Terms.
                </p>
              </Section>

              <Section title="15. Governing law &amp; disputes">
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

              <Section title="16. Contact">
                <p>If you have questions about these Terms, contact:</p>
                <div className="mt-4 p-5 rounded-xl bg-light-bg border border-gray-100">
                  <p className="font-semibold text-navy-dark">
                    True North Automation Inc.
                  </p>
                  <p>Charlottetown, Prince Edward Island, Canada</p>
                  <p className="mt-2">
                    <a
                      href="mailto:fabian@truenorthautomation.ai"
                      className="text-teal hover:text-teal-dark font-medium underline-offset-2 hover:underline"
                    >
                      fabian@truenorthautomation.ai
                    </a>
                  </p>
                  <p>+1 (902) 316-0111</p>
                </div>
              </Section>

              <div className="pt-6 border-t border-gray-100 text-sm text-gray-500">
                See also our{" "}
                <Link
                  href="/privacy"
                  className="text-teal hover:text-teal-dark font-medium underline-offset-2 hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </div>
            </article>
          </AnimateIn>
        </div>
      </section>
    </PageWrapper>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-navy-dark tracking-tight mb-4">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}
