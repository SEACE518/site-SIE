import { useState } from 'react';

const socials = [
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@seace225?_r=1&_t=ZS-95aTJvnuVo9',
  },
  { label: 'Instagram', href: '#' },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/14ammQQfoye/?mibextid=wwXIfr',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/christ-si%C3%A9-93944a300/',
  },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const to = 'christsie518@gmail.com';
    const subject = `Nouveau message - ${form.name ? form.name : 'Contact'}`;
    const body = [
      `Nom: ${form.name}`,
      `Email: ${form.email}`,
      '',
      'Message:',
      form.message,
    ].join('\n');

    // Envoie via `mailto:` : ouvre automatiquement l'application mail de l'utilisateur.
    const mailtoUrl = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 border-t border-border">
      <div className="scroll-reveal max-w-2xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Contact</p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
          Travaillons ensemble
        </h2>
        <p className="font-body text-sm text-muted-foreground mb-16">
          Vous avez un projet en tête ? Une idée à concrétiser ?<br />
          Je suis toujours ouvert aux nouvelles collaborations.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <input
            type="text"
            placeholder="Votre nom"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors font-body"
          />
          <input
            type="email"
            placeholder="Votre email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors font-body"
          />
          <textarea
            placeholder="Votre message"
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none font-body"
          />
          <div className="text-center pt-4">
            <button
              type="submit"
              className="border border-foreground px-12 py-3 text-xs tracking-[0.2em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Envoyer
            </button>
          </div>
        </form>
        <div className="flex justify-center gap-8 mt-16">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={
                s.label === 'LinkedIn'
                  // LinkedIn: uniquement le texte "LinkedIn" (pas de soulignement animé)
                  ? 'text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300'
                  : "text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-foreground after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
              }
            >
              {s.label}
            </a>
          ))}
        </div>
        <p className="font-body text-xs text-muted-foreground mt-16">
          contact@seace-empire.com
        </p>
      </div>
      <div className="text-center mt-24 pt-8 border-t border-border">
        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          © 2026 Seace — L'Architecte du Digital
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
