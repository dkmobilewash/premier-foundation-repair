import { useState } from 'react';
import { Phone, MapPin, Clock, Mail, CheckCircle } from 'lucide-react';
import { PageHero } from '../components/UI';
import { supabase } from '../lib/supabase';
import Seo from '../components/Seo';

export default function Contact() {
  const [form, setForm] = useState({
    full_name: '',
    phone: '',
    email: '',
    property_address: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    if (!supabase) {
      setStatus('error');
      setErrorMsg(
        'Our form is temporarily unavailable. Please call us at (225) 435-8289 — we can take your details over the phone.',
      );
      return;
    }

    const { error } = await supabase.from('contact_submissions').insert([form]);

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please call us at (225) 435-8289.');
    } else {
      setStatus('success');
    }
  }

  return (
    <>
      <Seo
        title="Contact Us in Baton Rouge"
        description="Call (225) 435-8289 or send a message to reach Premier Foundation Repair of Baton Rouge. We're at 670 O'Neal Ln and reply within one business day."
      />
      <PageHero title="CONTACT US" subtitle="Get in touch for a free estimate, a question, or to schedule service." cta={false} />

      <section className="bg-charcoal py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-headline text-3xl text-white tracking-wider mb-6">SEND US A MESSAGE</h2>

              {status === 'success' ? (
                <div className="bg-royal/10 border border-royal rounded-lg p-8 text-center">
                  <CheckCircle size={48} className="text-royal mx-auto mb-4" />
                  <h3 className="font-headline text-2xl text-white tracking-wider mb-2">MESSAGE RECEIVED</h3>
                  <p className="text-white/70 font-subheading">We'll be in touch within one business day. For urgent matters call us at <a href="tel:2254358289" className="text-royal">(225) 435-8289</a>.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/70 text-sm font-subheading mb-1">Full Name *</label>
                      <input name="full_name" type="text" required value={form.full_name} onChange={handleChange} className="w-full bg-navy border border-steel/30 rounded px-4 py-3 text-white font-subheading text-sm focus:outline-none focus:border-royal" />
                    </div>
                    <div>
                      <label className="block text-white/70 text-sm font-subheading mb-1">Phone Number *</label>
                      <input name="phone" type="tel" required value={form.phone} onChange={handleChange} className="w-full bg-navy border border-steel/30 rounded px-4 py-3 text-white font-subheading text-sm focus:outline-none focus:border-royal" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm font-subheading mb-1">Email Address</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full bg-navy border border-steel/30 rounded px-4 py-3 text-white font-subheading text-sm focus:outline-none focus:border-royal" />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm font-subheading mb-1">Property Address</label>
                    <input name="property_address" type="text" value={form.property_address} onChange={handleChange} className="w-full bg-navy border border-steel/30 rounded px-4 py-3 text-white font-subheading text-sm focus:outline-none focus:border-royal" />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm font-subheading mb-1">Service Needed</label>
                    <select name="service" value={form.service} onChange={handleChange} className="w-full bg-navy border border-steel/30 rounded px-4 py-3 text-white font-subheading text-sm focus:outline-none focus:border-royal">
                      <option value="">Select a service...</option>
                      <option>Slab Foundation Repair</option>
                      <option>Pier &amp; Beam Repair</option>
                      <option>Drainage Solutions</option>
                      <option>Small Demolition</option>
                      <option>Not Sure / General Question</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm font-subheading mb-1">Message</label>
                    <textarea name="message" rows={4} value={form.message} onChange={handleChange} className="w-full bg-navy border border-steel/30 rounded px-4 py-3 text-white font-subheading text-sm focus:outline-none focus:border-royal resize-none" />
                  </div>
                  {status === 'error' && (
                    <p className="text-red-400 font-subheading text-sm">{errorMsg}</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-royal hover:bg-royal/90 disabled:opacity-60 text-white py-4 font-subheading font-semibold rounded transition-colors"
                  >
                    {status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="space-y-6">
              <h2 className="font-headline text-3xl text-white tracking-wider mb-6">GET IN TOUCH</h2>
              <a href="tel:2254358289" className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-royal rounded flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-white/60 text-xs font-subheading mb-0.5">PHONE</div>
                  <div className="font-headline text-3xl text-white group-hover:text-royal transition-colors">(225) 435-8289</div>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-steel/40 rounded flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-royal" />
                </div>
                <div>
                  <div className="text-white/60 text-xs font-subheading mb-0.5">ADDRESS</div>
                  <div className="text-white font-subheading">670 O'Neal Ln<br />Baton Rouge, LA 70816</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-steel/40 rounded flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-royal" />
                </div>
                <div>
                  <div className="text-white/60 text-xs font-subheading mb-0.5">HOURS</div>
                  <div className="text-white font-subheading">Monday–Friday: 7:00am – 6:00pm</div>
                  <div className="text-white/60 font-subheading text-sm">Saturday: By appointment</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-steel/40 rounded flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-royal" />
                </div>
                <div>
                  <div className="text-white/60 text-xs font-subheading mb-0.5">EMAIL</div>
                  <div className="text-white font-subheading">info@premierfoundationrepair.com</div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden border border-steel/30 mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.375945172674!2d-91.01142442443029!3d30.458659674717698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8626bc430ec1d4d5%3A0xa8b3119375c4cba2!2s670%20O&#39;Neal%20Ln%2C%20Baton%20Rouge%2C%20LA%2070816!5e1!3m2!1sen!2sus!4v1780374716087!5m2!1sen!2sus"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Premier Foundation Repair location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
