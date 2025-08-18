import { useState } from "react";
import { Instagram, Globe, Linkedin, MessageCircle } from "lucide-react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const maxMessage = 1000;

  const validate = () => {
    const e = { name: "", email: "", message: "" };
    if (formData.name.trim().length < 2) e.name = "Please enter at least 2 characters.";
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    if (!emailOk) e.email = "Please enter a valid email address.";
    if (formData.message.trim().length < 10) e.message = "Please write at least 10 characters.";
    if (formData.message.length > maxMessage) e.message = `Message too long (max ${maxMessage}).`;
    setErrors(e);
    return !e.name && !e.email && !e.message;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: "", text: "" });

    // Honeypot
    const botField = e.target.elements["company"]?.value;
    if (botField) return;

    if (!validate()) return;

    // Validate required EmailJS env vars
    const svc = import.meta.env.VITE_SERVICE_ID;
    const tpl = import.meta.env.VITE_TEMPLATE_ID;
    const key = import.meta.env.VITE_PUBLIC_KEY;
    if (!svc || !tpl || !key) {
      setStatus({ type: "error", text: "Email service is not configured. Please try again later." });
      return;
    }

    setSending(true);
    emailjs
      .sendForm(
        svc,
        tpl,
        e.target,
        key
      )
      .then(() => {
        setStatus({ type: "success", text: "Thanks! Your message was sent." });
        setFormData({ name: "", email: "", message: "" });
        e.target.reset();
      })
      .catch(() => setStatus({ type: "error", text: "Something went wrong. Please try again." }))
      .finally(() => setSending(false));
  };

  const onChange = (key) => (ev) => setFormData((s) => ({ ...s, [key]: ev.target.value }));

  return (
  <section id="contact" className="relative min-h-screen flex items-center justify-center py-20 scroll-mt-20">
      {/* Full-bleed background image with gradient overlay (matches Home/About) */}
      <div className="absolute inset-0 opacity-30 pointer-events-none z-0" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B0D28]/80 via-[#1B0D28]/60 to-[#1B0D28]/80"></div>
      </div>
  {/* Top fade to blend from previous section */}
  <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#1B0D28] via-[#1B0D28]/70 to-transparent z-0" aria-hidden="true" />
      {/* Subtle bottom fade to smooth transition into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent via-[#1B0D28]/70 to-[#1B0D28] z-0" aria-hidden="true" />
      <RevealOnScroll>
        {/* wider container */}
        <div className="relative z-10 w-full max-w-2xl px-3 sm:px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
            Get in touch now!
          </h2>

          {status.text && (
            <div
              className={`mb-4 rounded px-4 py-3 text-sm ${
                status.type === "success"
                  ? "bg-emerald-500/10 text-emerald-300 border border-emerald-400/30"
                  : "bg-rose-500/10 text-rose-300 border border-rose-400/30"
              }`}
              role="status"
              aria-live="polite"
            >
              {status.text}
            </div>
          )}

          {/* Social links */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <a
              href="https://www.instagram.com/amitweb1/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-gray-200 hover:border-blue-500/40 hover:bg-blue-500/10 hover:-translate-y-0.5 transition"
              aria-label="Instagram"
            >
              <Instagram size={18} /> Instagram
            </a>
            <a
              href="https://amitweb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-gray-200 hover:border-blue-500/40 hover:bg-blue-500/10 hover:-translate-y-0.5 transition"
              aria-label="AmitWeb website"
            >
              <Globe size={18} /> amitweb.com
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=972502227134"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-gray-200 hover:border-blue-500/40 hover:bg-blue-500/10 hover:-translate-y-0.5 transition"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/in/amityehoshaphat/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-gray-200 hover:border-blue-500/40 hover:bg-blue-500/10 hover:-translate-y-0.5 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            {/* Honeypot (hidden) */}
            <input type="text" name="company" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                minLength={2}
                autoComplete="name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "err-name" : undefined}
                value={formData.name}
                onChange={onChange("name")}
                className="w-full bg-white/5 border-2 border-white/20 rounded-lg px-5 py-4 text-white text-base sm:text-lg
                           placeholder:text-gray-400 transition focus:outline-none focus:border-blue-400 focus:bg-blue-500/5"
                placeholder="John Doe"
              />
              {errors.name && <p id="err-name" className="mt-2 text-sm text-rose-300">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm text-gray-300 mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                inputMode="email"
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "err-email" : undefined}
                value={formData.email}
                onChange={onChange("email")}
                className="w-full bg-white/5 border-2 border-white/20 rounded-lg px-5 py-4 text-white text-base sm:text-lg
                           placeholder:text-gray-400 transition focus:outline-none focus:border-blue-400 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
              />
              {errors.email && <p id="err-email" className="mt-2 text-sm text-rose-300">{errors.email}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm text-gray-300 mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={7}
                minLength={10}
                maxLength={maxMessage}
                enterKeyHint="send"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "err-message" : "msg-counter"}
                value={formData.message}
                onChange={onChange("message")}
                className="w-full bg-white/5 border-2 border-white/20 rounded-lg px-5 py-4 text-white text-base sm:text-lg leading-relaxed
                           placeholder:text-gray-400 transition focus:outline-none focus:border-blue-400 focus:bg-blue-500/5 min-h-[160px]"
                placeholder="How can I help?"
              />
              {errors.message ? (
                <p id="err-message" className="mt-2 text-sm text-rose-300">{errors.message}</p>
              ) : (
                <p id="msg-counter" className="mt-2 text-xs text-gray-400">{formData.message.length}/{maxMessage}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-blue-500 text-white py-4 px-6 rounded-lg font-medium transition
                         hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] disabled:opacity-50"
            >
              {sending ? "Sending..." : "Submit Message"}
            </button>

            <p className="text-center text-xs text-gray-400 mt-2">I usually reply within 24–48 hours.</p>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
