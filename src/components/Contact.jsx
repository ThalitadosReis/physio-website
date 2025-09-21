import { useState } from "react";
import { sendContactEmail } from "../utils/emailService";
import { Check, Loader2, X } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error message when user starts typing
    if (submitMessage) {
      setSubmitMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const result = await sendContactEmail(formData);

      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setSubmitMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6 font-secondary">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* contact image */}
          <div className="relative block">
            <div className="w-full h-[30vh] lg:h-[45vh] rounded-b-full overflow-hidden">
              <img
                src={
                  "https://images.pexels.com/photos/5793787/pexels-photo-5793787.jpeg?_gl=1*qbt5vc*_ga*MTE1NTcwMTQwLjE3NTU4ODU3NjQ.*_ga_8JE65Q40S6*czE3NTgwNDYxNDgkbzYkZzEkdDE3NTgwNDYxNDkkajU5JGwwJGgw"
                }
                alt="Physiotherapist"
                className="w-full h-full object-cover object-[25%_35%] rounded-2xl"
              />
            </div>
          </div>

          {/* content */}
          <div className="space-y-6">
            <div className="flex flex-col justify-center">
              <h1 className="text-center lg:text-start font-primary text-sandstone text-3xl md:text-4xl lg:text-5xl">
                Get In Touch
              </h1>
              <h2 className="max-w-4xl text-center lg:text-start text-sandstone/80 md:text-lg lg:text-xl mt-2">
                Have questions about our services? <br className="block" />
                We're here to help you on your journey to better health.
              </h2>
            </div>

            <div>
              {isSubmitted ? (
                <div className="space-y-2 text-center bg-vanilla/20 border border-vanilla/30 p-8 rounded-2xl">
                  <div className="flex items-center justify-center w-12 h-12 bg-sandstone/80 rounded-full mx-auto">
                    <Check strokeWidth={2.5} className="text-white" />
                  </div>
                  <h3 className="text-2xl text-sandstone">Message Sent!</h3>
                  <p className="text-sandstone/80">
                    Thank you for contacting us. We'll get back to you within 24
                    hours.
                  </p>
                </div>
              ) : (
                <div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your Name"
                          className="w-full px-4 py-3 border border-sandstone/20 rounded-full bg-transparent focus:outline-none focus:ring-2 focus:ring-sandstone/30 focus:border-sandstone placeholder:text-sandstone/50"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Your Email"
                          className="w-full px-4 py-3 border border-sandstone/20 rounded-full bg-transparent focus:outline-none focus:ring-2 focus:ring-sandstone/30 focus:border-sandstone placeholder:text-sandstone/50"
                        />
                      </div>
                    </div>

                    <div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Additional information"
                        className="w-full px-4 py-3 border border-sandstone/20 rounded-3xl bg-transparent focus:outline-none focus:ring-2 focus:ring-sandstone/30 focus:border-sandstone placeholder:text-sandstone/50 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="flex items-center justify-center uppercase tracking-widest px-8 py-3 rounded-full text-xs gap-2 bg-sandstone text-white hover:bg-vanilla/40 hover:text-sandstone duration-200"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <Loader2 className="h-5 w-5 animate-spin text-white" />
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>

                  {submitMessage && (
                    <div className="mt-4 p-3 rounded-lg text-sm flex items-center gap-2 bg-red-100 text-red-800 border border-red-200">
                      <X className="h-4 w-4 text-red-600" />
                      {submitMessage}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
