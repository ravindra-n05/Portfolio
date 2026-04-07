import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "@/lib/notify";

const ContactSection = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current || isSending) {
      return;
    }

    try {
      setIsSending(true);
      const formData = new FormData(form.current);
      const userName = String(formData.get("user_name") ?? "").trim();
      const userEmail = String(formData.get("user_email") ?? "").trim();
      const userMessage = String(formData.get("message") ?? "").trim();

      const formattedMessage = [
        "",
        `Sender Name: ${userName}`,
        `Sender Email: ${userEmail}`,
        "",
        userMessage,
      ].join("\n");

      await emailjs.send(
        "service_q41lvxo",
        "template_aqfqlfn",
        {
          user_name: userName,
          user_email: userEmail,
          message: formattedMessage,
        },
        "sIlFSzgJ0LHqUqAzl",
      );
      toast.success("Email sent successfully.");
      form.current.reset();
    } catch {
      toast.error("Email could not be sent. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            {[
              { icon: Mail, label: "ravindranamdev9752@gmail.com" },
              { icon: Phone, label: "+91 7089508772" },
              { icon: MapPin, label: "Jabalpur, Madhya Pradesh" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="text-primary" size={18} />
                </div>
                <span className="text-foreground text-sm">{item.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.form
            ref={form}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
            onSubmit={sendEmail}
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <textarea
              rows={4}
              name="message"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSending}
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm hover:shadow-[0_0_25px_hsl(190_100%_50%/0.4)] transition-shadow disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSending ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
