import { useState } from 'react';
import { ArrowRight, CheckCircle, Upload } from 'lucide-react';
import { PageHero } from '../components/UI';
import { supabase } from '../lib/supabase';

interface EstimateFormProps {
  defaultService?: string;
  title?: string;
  subtitle?: string;
}

export default function FreeEstimate({
  defaultService = '',
  title = 'GET YOUR FREE FOUNDATION REPAIR ESTIMATE',
  subtitle = 'No obligation. Fast response. Local experts.',
}: EstimateFormProps) {
  const [form, setForm] = useState({
    full_name: '',
    phone: '',
    email: '',
    street_address: '',
    city: '',
    state: 'Louisiana',
    zip: '',
    service_type: defaultService,
    pier_beam_acknowledged: false,
    description: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const { error } = await supabase.from('estimate_requests').insert([form]);

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please call us at (225) 435-8289.');
    } else {
      setStatus('success');
    }
  }

  return (
    <>
      <title>Free Foundation Repair Estimate | Premier Foundation Repair Baton Rouge</title>
      <PageHero title={title} subtitle={subtitle} cta={false} />

      {/* Trust bar */}
      <div className="bg-charcoal border-b border-steel/20 py-4">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6">
          {['No Obligation', 'Fast Response', 'Local Experts'].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <CheckCircle size={16} className="text-royal" />
              <span className="font-subheading font-semibold text-white text-sm">{t}</span>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-navy py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-headline text-3xl text-white tracking-wider mb-6">TELL US ABOUT YOUR HOME</h2>

              {status === 'success' ? (
                <div className="bg-royal/10 border border-royal rounded-lg p-8 text-center">
                  <CheckCircle size={48} className="text-royal mx-auto mb-4" />
                  <h3 className="font-headline text-2xl text-white tracking-wider mb-2">REQUEST RECEIVED</h3>
                  <p className="text-white/70 font-subheading">We'll call you within one business day to schedule your free estimate visit. For urgent matters call <a href="tel:2254358289" className="text-royal">(225) 435-8289</a>.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/70 text-sm font-subheading mb-1">Full Name *</label>
                      <input name="full_name" type="text" required value={form.full_name} onChange={handleChange} className="w-full bg-charcoal border border-steel/30 rounded px-4 py-3 text-white font-subheading text-sm focus:outline-none focus:border-royal" />
                    </div>
                    <div>
                      <label className="block text-white/70 text-sm font-subheading mb-1">Phone Number *</label>
                      <input name="phone" type="tel" required value={form.phone} onChange={handleChange} className="w-full bg-charcoal border border-steel/30 rounded px-4 py-3 text-white font-subheading text-sm focus:outline-none focus:border-royal" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm font-subheading mb-1">Email Address</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full bg-charcoal border border-steel/30 rounded px-4 py-3 text-white font-subheading text-sm focus:outline-none focus:border-royal" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/70 text-sm font-subheading mb-1">Street Address *</label>
                      <input name="street_address" type="text" required value={form.street_address} onChange={handleChange} className="w-full bg-charcoal border border-steel/30 rounded px-4 py-3 text-white font-subheading text-sm focus:outline-none focus:border-royal" />
                    </div>
                    <div>
                      <label className="block text-white/70 text-sm font-subheading mb-1">City *</label>
                      <input name="city" type="text" required value={form.city} onChange={handleChange} className="w-full bg-charcoal border border-steel/30 rounded px-4 py-3 text-white font-subheading text-sm focus:outline-none focus:border-royal" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/70 text-sm font-subheading mb-1">State</label>
                      <input name="state" type="text" value={form.state} onChange={handleChange} className="w-full bg-charcoal border border-steel/30 rounded px-4 py-3 text-white font-subheading text-sm focus:outline-none focus:border-royal" />
                    </div>
                    <div>
                      <label className="block text-white/70 text-sm font-subheading mb-1">Zip Code</label>
                      <input name="zip" type="text" value={form.zip} onChange={handleChange} className="w-full bg-charcoal border border-steel/30 rounded px-4 py-3 text-white font-subheading text-sm focus:outline-none focus:border-royal" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm font-subheading mb-1">Service Type *</label>
                    <select name="service_type" value={form.service_type} onChange={handleChange} className="w-full bg-charcoal border border-steel/30 rounded px-4 py-3 text-white font-subheading text-sm focus:outline-none focus:border-royal">
                      <option value="">Select service type...</option>
                      <option value="Slab Foundation">Slab Foundation Repair</option>
                      <option value="Raised Foundation">Raised Foundation (Pier &amp; Beam) Repair</option>
                      <option value="Drainage">Drainage Solutions</option>
                      <option value="Demo">Small Demolition</option>
                      <option value="Not Sure">Not Sure — Need Assessment</option>
                    </select>
                  </div>
                  <div className="flex items-start gap-3">
                    <input name="pier_beam_acknowledged" type="checkbox" id="pierbeam" checked={form.pier_beam_acknowledged} onChange={handleChange} className="mt-1 accent-royal" />
                    <label htmlFor="pierbeam" className="text-white/70 text-sm font-subheading leading-relaxed">
                      This is a raised foundation (pier &amp; beam). I understand a minimum of 16 inches of clearance from ground to floor joist is required for this service.
                    </label>
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm font-subheading mb-1">Describe Your Foundation Problems</label>
                    <textarea name="description" rows={4} value={form.description} onChange={handleChange} className="w-full bg-charcoal border border-steel/30 rounded px-4 py-3 text-white font-subheading text-sm focus:outline-none focus:border-royal resize-none" placeholder="Describe what you've noticed — cracks, sticking doors, sloping floors, etc." />
                  </div>
                  <div className="bg-charcoal/60 border border-dashed border-steel/40 rounded p-4 text-center">
                    <Upload size={24} className="text-steel mx-auto mb-2" />
                    <p className="text-white/50 text-sm font-subheading">Photo upload available — bring photos to your estimate appointment</p>
                  </div>
                  {status === 'error' && (
                    <p className="text-red-400 font-subheading text-sm">{errorMsg}</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-royal hover:bg-royal/90 disabled:opacity-60 text-white py-4 font-subheading font-semibold rounded transition-colors flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? 'SUBMITTING...' : <><span>SUBMIT FREE ESTIMATE REQUEST</span><ArrowRight size={16} /></>}
                  </button>
                </form>
              )}
            </div>

            {/* What happens next */}
            <div className="space-y-6">
              <div className="bg-charcoal border border-steel/20 rounded-lg p-8">
                <h3 className="font-headline text-2xl text-white tracking-wider mb-6">WHAT HAPPENS NEXT</h3>
                <div className="space-y-5">
                  {[
                    { n: '1', title: 'We Contact You', desc: "We'll call you within one business day to confirm your information and schedule your estimate visit." },
                    { n: '2', title: 'On-Site Assessment', desc: "An estimator visits your property, inspects the foundation, and explains their findings in plain language." },
                    { n: '3', title: 'Written Estimate', desc: 'You receive a written scope of work with clear, honest pricing — no hidden fees.' },
                  ].map((s) => (
                    <div key={s.n} className="flex gap-4 items-start">
                      <div className="w-10 h-10 bg-royal rounded-full flex items-center justify-center font-headline text-white shrink-0">
                        {s.n}
                      </div>
                      <div>
                        <h4 className="font-subheading font-semibold text-white mb-0.5">{s.title}</h4>
                        <p className="text-white/60 text-sm font-subheading">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-charcoal border-l-4 border-royal rounded-r p-5">
                <p className="text-white/80 font-subheading text-sm italic mb-3">
                  "The estimate process was quick and painless. They explained everything clearly and there were no surprises on the final bill."
                </p>
                <div className="text-white/50 text-xs font-subheading">— Jennifer L., Baton Rouge, LA</div>
              </div>

              <div className="text-center">
                <p className="text-white/50 font-subheading text-sm mb-3">Prefer to call?</p>
                <a href="tel:2254358289" className="font-headline text-3xl text-royal hover:text-white transition-colors">
                  (225) 435-8289
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
