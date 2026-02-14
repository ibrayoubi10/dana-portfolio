import Section from "../components/Section.jsx";
import { Card } from "../components/Card.jsx";
import { Button } from "../components/Button.jsx";
import { MapPin, Mail, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const whatsappNumber = "96179170076"; // digits only
  const whatsappText = encodeURIComponent(
    "Hello Dana, I saw your portfolio and I’d like to ask about a session."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  return (
    <Section
      id="contact"
      title="Let’s Connect"
      subtitle="Send a message anytime."
    >
      {/* Single card only (removed the second block) */}
      <div className="max-w-3xl">
        <Card className="relative overflow-hidden">
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-brand-teal/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-coral/10 blur-3xl" />

          <div className="relative">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="font-display text-2xl leading-tight">
                  Reach out in one click.
                </div>
                <p className="mt-2 text-sm text-black/70 leading-relaxed">
                  WhatsApp is the fastest way. Email is available for detailed requests.
                </p>
              </div>

              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="gap-2">
                  <FaWhatsapp className="h-4 w-4" />
                  WhatsApp
                </Button>
              </a>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <InfoRow
                icon={<Clock className="h-4 w-4" />}
                label="Response time"
                value="Usually within 24 hours"
              />
              <InfoRow
                icon={<MapPin className="h-4 w-4" />}
                label="Location"
                value="Tripoli, Lebanon • Online sessions available"
              />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <ActionTile
                icon={<FaWhatsapp className="h-5 w-5" />}
                title="WhatsApp"
                subtitle="79 170 076"
                href={whatsappUrl}
                accent="teal"
              />
              <ActionTile
                icon={<Mail className="h-5 w-5" />}
                title="Email"
                subtitle="danaelcheikh.2002@gmail.com"
                href="mailto:danaelcheikh.2002@gmail.com"
                accent="coral"
              />
            </div>

            <div className="mt-6 rounded-2xl border border-black/10 bg-white/60 p-4 text-sm text-black/70">
              Tip: Include the child’s age and main learning difficulty for a faster response.
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white/60 px-4 py-3">
      <div className="mt-0.5 text-black/60">{icon}</div>
      <div className="min-w-0">
        <div className="text-xs text-black/60">{label}</div>
        <div className="mt-0.5 text-black/80 break-words">{value}</div>
      </div>
    </div>
  );
}

function ActionTile({ icon, title, subtitle, href, accent = "teal" }) {
  const accentBg =
    accent === "coral" ? "bg-brand-coral/10" : "bg-brand-teal/10";
  const accentText =
    accent === "coral" ? "text-brand-coral" : "text-brand-teal";

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group block rounded-2xl border border-black/10 bg-white/60 p-4 hover:bg-white/75 transition"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className={`h-11 w-11 rounded-2xl ${accentBg} flex items-center justify-center`}
          >
            <div className={accentText}>{icon}</div>
          </div>

          <div className="min-w-0">
            <div className="text-sm font-semibold">{title}</div>
            <div className="mt-1 text-xs text-black/60 break-words">
              {subtitle}
            </div>
          </div>
        </div>

        <div className="text-black/40 group-hover:text-black/60 transition">
          ↗
        </div>
      </div>
    </a>
  );
}