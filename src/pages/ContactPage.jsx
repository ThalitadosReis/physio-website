import { useState } from "react";
import { MoveRight, Check, Loader2, ChevronDown, X } from "lucide-react";
import { sendContactEmail } from "../utils/emailService";

export default function ContactPage({ openBookingModal }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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

    console.log("Contact form data being sent:", formData);

    try {
      const result = await sendContactEmail(formData);

      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setSubmitMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      question: "Do you accept insurance?",
      answer:
        "Yes, we work with most major insurance providers and offer direct billing for your convenience. Please contact us to verify your coverage.",
    },
    {
      question: "How long is a typical session?",
      answer:
        "Most treatment sessions are between 45-60 minutes, though initial consultations may take up to 90 minutes for a comprehensive assessment.",
    },
    {
      question: "Do I need a referral?",
      answer:
        "While referrals are not always required, having one from your doctor can help us better understand your condition and may be needed for insurance coverage.",
    },
  ];

  return (
    <div className="pt-16">
      {/* hero */}
      <section className="relative bg-white lg:rounded-3xl py-6 lg:py-0 lg:mx-6">
        <div className="relative max-w-7xl px-6 lg:px-0 font-secondary">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
            {/* left-image */}
            <div className="lg:p-0 lg:m-0">
              <div className="w-full rounded-2xl lg:rounded-r-none lg:rounded-l-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5793787/pexels-photo-5793787.jpeg?_gl=1*qbt5vc*_ga*MTE1NTcwMTQwLjE3NTU4ODU3NjQ.*_ga_8JE65Q40S6*czE3NTgwNDYxNDgkbzYkZzEkdDE3NTgwNDYxNDkkajU5JGwwJGgw"
                  alt="Contact Physio+"
                  className="w-full h-full object-cover object-[15%_35%]"
                />
              </div>
            </div>
            {/* right-content */}
            <div className="lg:flex lg:items-center lg:justify-center">
              <div>
                <div className="space-y-1 flex flex-col items-center text-center mb-15">
                  <img
                    src="https://res.cloudinary.com/douen1dwv/image/upload/v1758047929/default/lotus_2_zntprp.png"
                    alt="Logo"
                    className="h-12"
                  />
                  <h2 className="font-primary text-sandstone text-3xl md:text-4xl">
                    Send Us a Message
                  </h2>
                  <p className="text-sandstone/80">
                    Have a specific question or want to learn more about our
                    services? Fill out the form below and we'll get back to you
                    promptly.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="bg-white border border-vanilla/30 p-8 rounded-2xl text-center">
                    <div className="w-16 h-16 bg-sandstone rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-primary text-sandstone mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-sandstone/80">
                      Thank you for contacting us. We'll get back to you within
                      24 hours.
                    </p>
                  </div>
                ) : (
                  <div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-sandstone/20 rounded-full focus:outline-none focus:ring-2 focus:ring-sandstone/30 focus:border-sandstone"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div className="relative w-full">
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 pr-10 border border-sandstone/20 rounded-full focus:outline-none focus:ring-2 focus:ring-sandstone/30 focus:border-sandstone appearance-none cursor-pointer"
                        >
                          <option value="">Select a topic</option>
                          <option value="Appointment">Book Appointment</option>
                          <option value="Services">Services Information</option>
                          <option value="Insurance">Insurance Questions</option>
                          <option value="General">General Inquiry</option>
                          <option value="Other">Other</option>
                        </select>

                        {/* icon positioned inside */}
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                          <ChevronDown className="w-5 h-5 text-sandstone/60" />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-sandstone/20 rounded-full focus:outline-none focus:ring-2 focus:ring-sandstone/30 focus:border-sandstone"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="relative">
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-sandstone/20 rounded-full focus:outline-none focus:ring-2 focus:ring-sandstone/30 focus:border-sandstone"
                            placeholder="Your Number"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={3}
                          className="w-full px-4 py-3 border border-sandstone/20 rounded-3xl bg-transparent focus:outline-none focus:ring-2 focus:ring-sandstone/30 focus:border-sandstone placeholder:text-sandstone/50 resize-none"
                          placeholder="Additional information"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full uppercase tracking-widest text-xs border border-transparent bg-sandstone text-white hover:bg-vanilla/40 hover:text-sandstone px-8 py-4 rounded-full duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Sending Message...
                        </span>
                      ) : (
                        <>
                          <span>Send Message</span>
                        </>
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

      {/* contact info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 font-secondary">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* content */}
            <div className="grid md:grid-cols-2 lg:grid-cols-1 space-y-4 gap-4">
              <div className="text-left">
                <h1 className="font-primary text-sandstone text-4xl lg:text-5xl">
                  Contact <br className="hidden md:block" />
                  Information
                </h1>
                <h2 className="text-sandstone/80 text-lg lg:text-xl mt-2">
                  Multiple ways to reach us for appointments or questions.
                </h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <h3 className="uppercase text-sm text-sandstone/60">
                    Hours:
                  </h3>
                  <p>
                    Monday to Friday <br />
                    8am – 6pm
                  </p>
                </div>
                <div>
                  <h3 className="uppercase text-sm text-sandstone/60">
                    Address:
                  </h3>
                  <p>
                    Bahnhofstrasse 1 <br />
                    8001 Zürich, Switzerland
                  </p>
                </div>
              </div>
            </div>

            {/* map */}
            <div
              className="w-full h-full rounded-2xl overflow-hidden"
              style={{
                filter:
                  "sepia(0.6) saturate(0.2) brightness(0.85) contrast(1.3)",
              }}
            >
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.7321621588594!2d8.537676776380067!3d47.3781457711698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a08cc0e6e41%3A0xf5c698b65f8c52a7!2sZurich%20HB!5e0!3m2!1sen!2sch!4v1758055156998!5m2!1sen!2sch"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-vanilla/20 py-20">
        <div className="max-w-7xl mx-auto px-6 font-secondary">
          {/* header */}
          <div className="space-y-15 mb-10">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-primary text-sandstone text-4xl lg:text-5xl">
                Frequently Asked Questions
              </h1>
              <h2 className="text-sandstone/80 text-lg lg:text-xl mt-2">
                Quick answers to common questions about our services and
                appointments.
              </h2>
            </div>
          </div>

          {/* main content */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
            {/* left-profile */}
            <div className="relative block">
              <div className="relative mx-auto w-full h-[25vh] lg:h-[50vh] rounded-tr-[20vw] overflow-hidden">
                <img
                  src={
                    "https://images.pexels.com/photos/5793894/pexels-photo-5793894.jpeg?_gl=1*r16md7*_ga*MTE1NTcwMTQwLjE3NTU4ODU3NjQ.*_ga_8JE65Q40S6*czE3NTgwMzc4NTckbzQkZzEkdDE3NTgwMzc4ODAkajM3JGwwJGgw"
                  }
                  alt="Physiotherapist"
                  className="w-full h-full object-cover object-[25%_20%] lg:object-[25%_35%] rounded-2xl"
                />
              </div>
            </div>

            <div>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl">
                    <h3 className="font-primary text-sandstone text-xl mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-sm text-sandstone/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-sandstone/80 mb-4">
                  Still have questions? We're here to help.
                </p>
                <button
                  onClick={openBookingModal}
                  className="uppercase tracking-widest text-xs border border-transparent bg-vanilla/50 text-white hover:bg-porcelain hover:text-sandstone hover:border-sandstone/50 px-8 py-3 rounded-full duration-200 inline-flex items-center justify-center gap-2"
                >
                  <span>Schedule Appointment</span>
                  <MoveRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
