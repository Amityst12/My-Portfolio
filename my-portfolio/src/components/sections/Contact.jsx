import { useState } from "react";
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

    setSending(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
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
    <section id="contact" className="min-h-screen flex items-center justify-center -mt-20 py-16">
      <RevealOnScroll>
        {/* wider container */}
        <div className="w-full max-w-2xl px-4">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
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
