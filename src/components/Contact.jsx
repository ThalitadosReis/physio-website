import { useState } from "react";
import { sendContactEmail } from "../utils/emailService";
import { Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

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
        console.error("Failed to send email:", result.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6 font-secondary">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* contact image */}
          <div className="relative block">
            <div className="relative mx-auto w-full h-[25vh] lg:h-[50vh] rounded-b-full overflow-hidden">
              <img
                src={
                  "https://images.pexels.com/photos/5793787/pexels-photo-5793787.jpeg?_gl=1*qbt5vc*_ga*MTE1NTcwMTQwLjE3NTU4ODU3NjQ.*_ga_8JE65Q40S6*czE3NTgwNDYxNDgkbzYkZzEkdDE3NTgwNDYxNDkkajU5JGwwJGgw"
                }
                alt="Physiotherapist"
                className="w-full h-full object-cover object-[25%_37%] rounded-2xl"
              />
            </div>
          </div>

          {/* content */}
          <div className="space-y-8">
            <div className="flex flex-col justify-center">
              <h1 className="font-primary text-sandstone text-5xl">
                Get In Touch
              </h1>
              <p className="max-w-4xl text-sandstone/80 mt-6">
                Have questions about our services? We're here to help you on
                your journey to better health.
              </p>
            </div>

            <div>
              {isSubmitted ? (
                <div className="bg-vanilla/20 border border-vanilla/30 p-8 rounded-2xl text-center">
                  <div className="w-14 h-14 bg-sandstone/80 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-sandstone mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-sandstone/80">
                    Thank you for contacting us. We'll get back to you within 24
                    hours.
                  </p>
                </div>
              ) : (
                <div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm text-sandstone/80 mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-sandstone/20 rounded-full"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm text-sandstone/80 mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-sandstone/20 rounded-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm text-sandstone/80 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-sandstone/20 rounded-3xl"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="uppercase tracking-widest w-fit text-xs border border-transparent bg-sandstone/20 text-white hover:bg-transparent hover:text-sandstone hover:border-sandstone/50 px-8 py-3 rounded-full duration-200 flex items-center justify-center gap-2"
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
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
