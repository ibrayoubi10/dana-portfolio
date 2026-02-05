import Section from "../components/Section.jsx";
import { Card } from "../components/Card.jsx";
import { Button } from "../components/Button.jsx";

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Get in Touch"
      subtitle="Book a session or ask a question. I’ll reply as soon as possible."
    >
      <div className="grid lg:grid-cols-2 gap-5">
        <Card>
          <div className="font-display text-lg">Contact</div>
          <div className="mt-4 space-y-2 text-sm text-black/70">
            <div><span className="font-semibold">Location:</span> Tripoli, Lebanon</div>
            <div><span className="font-semibold">Phone:</span> +961 76 170 79</div>
            <div><span className="font-semibold">Email:</span> danaelcheikh.2002@gmail.com</div>
          </div>
        </Card>

        <Card>
          <div className="font-display text-lg">Message Form</div>
          <p className="mt-2 text-sm text-black/70">
            This form works automatically on Netlify after deployment.
          </p>

          <form
            className="mt-5 space-y-3"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            {/* Netlify required hidden input */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              <Field label="Full Name" name="name" placeholder="Your name" required />
              <Field label="Child’s Age" name="age" placeholder="e.g., 8" />
            </div>

            <Field
              label="Main Difficulty"
              name="difficulty"
              placeholder="e.g., reading, attention, autism support..."
            />

            <Field label="Email" name="email" type="email" placeholder="your@email.com" required />
            <Field label="Phone (optional)" name="phone" placeholder="+961 ..." />
            <Textarea label="Message" name="message" placeholder="Tell me briefly about your child’s needs." required />

            <div className="pt-2">
              <Button variant="primary">Send Message</Button>
            </div>
          </form>
        </Card>
      </div>
    </Section>
  );
}

function Field({ label, name, type = "text", placeholder, required }) {
  return (
    <label className="block">
      <div className="text-xs text-black/60">{label}</div>
      <input
        className="mt-1 w-full rounded-2xl bg-white/70 border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-coral/30"
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </label>
  );
}

function Textarea({ label, name, placeholder, required }) {
  return (
    <label className="block">
      <div className="text-xs text-black/60">{label}</div>
      <textarea
        className="mt-1 w-full min-h-[120px] rounded-2xl bg-white/70 border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-coral/30"
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </label>
  );
}
