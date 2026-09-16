import { PageHero } from '../components/UI';
import Seo from '../components/Seo';

const EFFECTIVE_DATE = 'September 16, 2026';

const sections: { heading: string; body: string[] }[] = [
  {
    heading: 'WHO THIS POLICY COVERS',
    body: [
      'This policy explains how Premier Foundation Repair of Baton Rouge ("we", "us") handles information collected through this website. It applies to this site only. It does not cover information you give us over the phone, by email, or in person during an estimate or a job, and it does not cover other companies\' websites we link to.',
    ],
  },
  {
    heading: 'INFORMATION YOU GIVE US',
    body: [
      'We only collect what you type into one of our two forms. Nothing on this site asks you to create an account, and we do not ask for payment details online.',
      'The contact form collects your name, phone number, email address, property address, the service you are interested in, and your message.',
      'The free estimate and drainage estimate forms collect your name, phone number, email address, the property\'s street address, city, state and ZIP code, the type of service you need, a description of the problem, and — for pier and beam requests — your acknowledgement of our minimum clearance requirement.',
      'Phone number and name are required so we can reach you about your request. Everything else is optional.',
    ],
  },
  {
    heading: 'HOW WE USE IT',
    body: [
      'We use what you submit to respond to your request, schedule and prepare an estimate, carry out work you hire us for, and keep a record of the job. We may contact you by phone, text, or email about the request you submitted.',
      'We do not sell your information. We do not share it with third parties for their own marketing.',
    ],
  },
  {
    heading: 'WHERE IT IS STORED',
    body: [
      'Form submissions are stored in a database hosted by Supabase, and this website is hosted by Vercel. Both are third-party providers acting on our behalf, and both may process your information on servers in the United States. Access to submitted leads is restricted to our team.',
    ],
  },
  {
    heading: 'THIRD-PARTY CONTENT ON THIS SITE',
    body: [
      'Some parts of this site load content from other companies, and those companies may receive your IP address and basic browser information as a result:',
      'Google Fonts supplies the typefaces used across the site. The map on our home page and contact page is an embedded Google Map, which may set cookies in your browser under Google\'s own privacy policy. Photographs on some pages are loaded from third-party image services.',
      'We do not run advertising trackers or analytics scripts of our own on this site, and we do not set cookies for advertising purposes.',
    ],
  },
  {
    heading: 'HOW LONG WE KEEP IT',
    body: [
      'We keep estimate requests and contact messages for as long as we may need them for the job, our warranty obligations, and our business records. Our slab repairs carry a lifetime transferable warranty, so records tied to completed work may be retained indefinitely so we can honor that warranty for you or a future owner of the property.',
    ],
  },
  {
    heading: 'YOUR CHOICES',
    body: [
      'You can ask us what information we hold about you, ask us to correct it, or ask us to delete it. Email info@premierfoundationrepair.com or call (225) 435-8289 and we will take care of it. If you ask us to delete a record tied to work we performed, we may need to keep enough of it to honor the warranty on that property.',
      'To stop hearing from us, tell us on any call, text, or email and we will stop contacting you.',
    ],
  },
  {
    heading: 'CHILDREN',
    body: [
      'This site is meant for homeowners and property owners. It is not directed at children, and we do not knowingly collect information from anyone under 13.',
    ],
  },
  {
    heading: 'CHANGES TO THIS POLICY',
    body: [
      'If we change how we handle information collected through this site, we will update this page and change the effective date above.',
    ],
  },
  {
    heading: 'CONTACT US',
    body: [
      'Premier Foundation Repair of Baton Rouge, 670 O\'Neal Ln, Baton Rouge, LA 70816. Phone (225) 435-8289. Email info@premierfoundationrepair.com.',
    ],
  },
];

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="How Premier Foundation Repair of Baton Rouge handles the information you submit through this website, where it is stored, and how to ask us to change or delete it."
      />
      <PageHero
        title="PRIVACY POLICY"
        subtitle="What we collect through this website, why we collect it, and what you can ask us to do with it."
        cta={false}
      />

      <section className="bg-charcoal py-20">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-white/50 font-subheading text-sm mb-10">
            Effective {EFFECTIVE_DATE}
          </p>

          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="font-headline text-2xl text-white tracking-wider mb-4">{s.heading}</h2>
                <div className="space-y-3">
                  {s.body.map((para) => (
                    <p key={para.slice(0, 40)} className="text-white/70 font-subheading text-sm leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
