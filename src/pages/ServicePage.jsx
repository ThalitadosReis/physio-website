import { useState, useRef, useEffect } from "react";
import {
  MoveRight,
  ChevronRight,
  ChevronDown,
  Check,
  Star,
  Clock,
  Users,
  Loader2,
  X,
  Calendar,
} from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import {
  servicesList,
  servicesData,
  generalServices,
} from "../data/servicelist";
import { sendBookingEmail } from "../utils/emailService";

export default function ServicePage({ openBookingModal }) {
  const [selectedService, setSelectedService] = useState("Chiropractic");
  const [openAccordionService, setOpenAccordionService] = useState(null);

  // booking form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [timeData, setTimeData] = useState({ hour: "", minute: "" });
  const calendarRef = useRef(null);

  const handleServiceClick = (serviceName) => {
    setSelectedService(serviceName);
  };

  const handleAccordionClick = (serviceName) => {
    setOpenAccordionService(
      openAccordionService === serviceName ? null : serviceName
    );
  };

  // booking form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setFormData({
      ...formData,
      date: date ? date.toISOString().split("T")[0] : "",
    });
    setShowCalendar(false);
  };

  const handleTimeChange = (field, value) => {
    const newTimeData = { ...timeData, [field]: value };
    setTimeData(newTimeData);

    if (newTimeData.hour && newTimeData.minute) {
      const timeString = `${newTimeData.hour.padStart(2, "0")}:${
        newTimeData.minute
      }`;
      setFormData({ ...formData, time: timeString });
    }
  };

  const formatDateForDisplay = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const result = await sendBookingEmail(formData);

      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          time: "",
          message: "",
        });
        setSelectedDate(null);
        setTimeData({ hour: "", minute: "" });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setSubmitMessage(result.message);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // calendar click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };

    if (showCalendar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCalendar]);

  return (
    <div className="pt-16">
      {/* services section */}
      <section className="py-10 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 font-secondary">
          {/* header */}
          <div className="mb-8">
            <div className="flex flex-col justify-center items-center">
              <img src="/logo.png" alt="Logo" className="h-12" />
              <h1 className="text-center font-primary text-sandstone text-3xl md:text-4xl lg:text-5xl mt-4">
                Treatment Options
              </h1>
              <h2 className="max-w-4xl text-sandstone/80 text-center md:text-lg lg:text-xl mt-2">
                Choose from our range of specialized treatments, each designed
                to address specific health concerns and promote overall
                wellbeing.
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_2fr] gap-6 justify-between">
            {/* desktop left sidebar */}
            <div className="hidden lg:block space-y-6">
              <div className="bg-vanilla/20 rounded-2xl p-6">
                <h3 className="font-primary text-sandstone text-lg text-center">
                  Our services
                </h3>
                {servicesList.map((serviceName) => (
                  <button
                    key={serviceName}
                    onClick={() => handleServiceClick(serviceName)}
                    className={`w-full p-3 text-left transition-all duration-300 flex items-center justify-between rounded-lg ${
                      selectedService === serviceName
                        ? "text-base text-sandstone"
                        : "text-sm text-sandstone/80 hover:text-sandstone"
                    }`}
                  >
                    <span>{serviceName}</span>
                    <MoveRight className="w-4 h-4 text-sandstone/50" />
                  </button>
                ))}
              </div>

              {/* booking form */}
              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-primary text-sandstone text-lg mb-4 text-center">
                  Book an Appointment
                </h3>

                {isSubmitted ? (
                  <div className="bg-vanilla/20 border border-vanilla/30 p-6 rounded-2xl text-center">
                    <div className="w-12 h-12 bg-sandstone rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-primary text-sandstone mb-2">
                      Booking Successful!
                    </h4>
                    <p className="text-sm text-sandstone/80">
                      We'll contact you within 24 hours to confirm your
                      appointment.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-3">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 border border-sandstone/20 rounded-full bg-transparent focus:outline-none focus:ring-2 focus:ring-sandstone/30 focus:border-sandstone placeholder:text-sandstone/50"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 border border-sandstone/20 rounded-full bg-transparent focus:outline-none focus:ring-2 focus:ring-sandstone/30 focus:border-sandstone placeholder:text-sandstone/50"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone"
                        className="w-full px-4 py-3 border border-sandstone/20 rounded-full bg-transparent focus:outline-none focus:ring-2 focus:ring-sandstone/30 focus:border-sandstone placeholder:text-sandstone/50"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="relative">
                      <select
                        name="service"
                        className={`w-full px-4 py-3 border border-sandstone/20 rounded-full bg-transparent focus:outline-none focus:ring-2 focus:ring-sandstone/30 focus:border-sandstone appearance-none ${
                          formData.service === ""
                            ? "text-sandstone/50"
                            : "text-black"
                        }`}
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select a Service</option>
                        {servicesList.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-sandstone/60 pointer-events-none" />
                    </div>

                    <div className="relative" ref={calendarRef}>
                      <button
                        type="button"
                        onClick={() => setShowCalendar(!showCalendar)}
                        className="w-full px-4 py-3 border border-sandstone/20 rounded-full flex items-center justify-between bg-transparent"
                      >
                        <span
                          className={
                            formData.date ? "text-black" : "text-sandstone/50"
                          }
                        >
                          {formData.date
                            ? formatDateForDisplay(formData.date)
                            : "Date"}
                        </span>
                        <Calendar className="h-4 w-4 text-sandstone/60" />
                      </button>

                      {showCalendar && (
                        <div className="absolute top-full left-0 z-50 bg-white border border-sandstone/20 rounded-2xl shadow-lg mt-2 p-3">
                          <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={handleDateSelect}
                            disabled={(date) => date < new Date()}
                            className="[&_.rdp-button]:rounded-full [&_.rdp-button]:border-none [&_.rdp-button]:transition-all [&_.rdp-button]:duration-200 [&_.rdp-button:hover:not([disabled]):not(.rdp-day_selected)]:bg-sandstone/10 [&_.rdp-day_selected]:bg-sandstone [&_.rdp-day_selected]:text-white [&_.rdp-day_selected]:rounded-full [&_.rdp-day_today:not(.rdp-day_selected)]:border [&_.rdp-day_today:not(.rdp-day_selected)]:border-sandstone [&_.rdp-day_today:not(.rdp-day_selected)]:text-sandstone [&_.rdp-day_today:not(.rdp-day_selected)]:font-semibold [&_.rdp-day_today:not(.rdp-day_selected)]:rounded-full [&_.rdp-head_cell]:text-sandstone/80 [&_.rdp-head_cell]:font-semibold [&_.rdp-head_cell]:text-xs [&_.rdp-caption]:text-sandstone [&_.rdp-caption]:font-semibold [&_.rdp-caption]:mb-2 font-secondary text-xs"
                            style={{
                              "--rdp-cell-size": "30px",
                              "--rdp-accent-color": "rgb(188 155 136)",
                              "--rdp-background-color": "rgb(188 155 136)",
                            }}
                          />
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-1">
                      <div className="relative">
                        <select
                          className={`w-full px-4 py-3 border border-sandstone/20 rounded-full bg-transparent focus:outline-none focus:ring-2 focus:ring-sandstone/30 focus:border-sandstone appearance-none ${
                            timeData.hour ? "text-black" : "text-sandstone/50"
                          }`}
                          value={timeData.hour}
                          onChange={(e) =>
                            handleTimeChange("hour", e.target.value)
                          }
                          required
                        >
                          <option value="">Hour</option>
                          {Array.from({ length: 11 }, (_, i) => {
                            const hour = (i + 7).toString().padStart(2, "0");
                            return (
                              <option key={hour} value={hour}>
                                {hour}
                              </option>
                            );
                          })}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-sandstone/60 pointer-events-none" />
                      </div>

                      <div className="relative">
                        <select
                          className={`w-full px-4 py-3 border border-sandstone/20 rounded-full bg-transparent focus:outline-none focus:ring-2 focus:ring-sandstone/30 focus:border-sandstone appearance-none ${
                            timeData.minute ? "text-black" : "text-sandstone/50"
                          }`}
                          value={timeData.minute}
                          onChange={(e) =>
                            handleTimeChange("minute", e.target.value)
                          }
                          required
                        >
                          <option value="">Min</option>
                          {Array.from({ length: 6 }, (_, i) => {
                            const minute = (i * 10).toString().padStart(2, "0");
                            return (
                              <option key={minute} value={minute}>
                                {minute}
                              </option>
                            );
                          })}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-sandstone/60 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <textarea
                        name="message"
                        className="w-full px-4 py-3 border border-sandstone/20 rounded-3xl bg-transparent focus:outline-none focus:ring-2 focus:ring-sandstone/30 focus:border-sandstone placeholder:text-sandstone/50 resize-none"
                        placeholder="Additional information (optional)"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={2}
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex items-center justify-center w-full py-3 uppercase tracking-widest text-xs rounded-full bg-sandstone text-white hover:bg-vanilla/40 hover:text-sandstone duration-200 gap-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <Loader2 className="h-4 w-4 animate-spin text-white" />
                            Booking...
                          </span>
                        ) : (
                          "Book Now"
                        )}
                      </button>
                    </div>

                    {submitMessage && (
                      <div className="mt-2 p-2 rounded-lg text-xs flex items-center gap-2 bg-red-100 text-red-800 border border-red-200">
                        <X className="h-3 w-3 text-red-600" />
                        {submitMessage}
                      </div>
                    )}
                  </form>
                )}
              </div>
            </div>

            {/* small screen-accordion */}
            <div className="lg:hidden space-y-2">
              {servicesList.map((serviceName) => (
                <div key={serviceName}>
                  <button
                    onClick={() => handleAccordionClick(serviceName)}
                    className={`flex items-center justify-between w-full p-4 md:p-6 rounded-2xl transition-all ${
                      openAccordionService === serviceName
                        ? "bg-sandstone/20 text-white"
                        : "bg-white hover:bg-sandstone/20 text-sandstone"
                    }`}
                  >
                    <span className="text-xl md:text-2xl font-primary">
                      {serviceName}
                    </span>
                    <div className="transition-transform duration-300">
                      {openAccordionService === serviceName ? (
                        <ChevronDown className="w-6 h-6" />
                      ) : (
                        <ChevronRight className="w-6 h-6" />
                      )}
                    </div>
                  </button>

                  {/* accordion content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordionService === serviceName
                        ? "max-h-fit opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="space-y-6">
                      <div className="w-full h-[30vh] lg:h-[45vh] overflow-hidden">
                        <img
                          src={servicesData[serviceName].image}
                          alt={serviceName}
                          className="w-full h-full object-cover object-[25%_45%] rounded-2xl"
                        />
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-3">
                          <p className="text-sm text-sandstone/80 text-justify">
                            {servicesData[serviceName].description}
                          </p>
                          <h4 className="font-primary text-sandstone text-lg">
                            Key Benefits:
                          </h4>
                          <ul className="grid md:grid-cols-2 space-y-1.5">
                            {servicesData[serviceName].benefits.map(
                              (benefit, idx) => (
                                <li
                                  key={idx}
                                  className="text-sm flex items-center text-sandstone/80 gap-4"
                                >
                                  <Star strokeWidth={2.5} className="w-4 h-4" />
                                  <span>{benefit}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-2">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-vanilla" />
                            <span className="text-sm text-sandstone/80">
                              {servicesData[serviceName].duration}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-vanilla" />
                            <span className="text-sm text-sandstone/80">
                              {servicesData[serviceName].price}
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => openBookingModal(serviceName)}
                          className="w-full flex items-center justify-center uppercase tracking-widest px-8 py-3 rounded-full text-xs gap-2 border border-transparent bg-sandstone text-white hover:bg-transparent hover:text-sandstone hover:border-sandstone/50 duration-200"
                        >
                          <span>Book {serviceName}</span>
                          <MoveRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* desktop right content */}
            <div className="relative hidden lg:block">
              <div>
                {/* image */}
                <div className="mb-6 overflow-hidden">
                  <img
                    src={servicesData[selectedService].image}
                    alt={selectedService}
                    className="w-full h-[30vh] object-cover rounded-2xl shadow-lg"
                  />
                </div>

                {/* content */}
                <div className="bg-white rounded-2xl p-8 space-y-6">
                  <h1 className="text-5xl font-primary text-sandstone">
                    {selectedService}
                  </h1>
                  <p className="text-sandstone/80 text-justify">
                    {servicesData[selectedService].description}
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-primary text-sandstone">
                      Key Benefits:
                    </h3>
                    <ul className="grid md:grid-cols-2 space-y-1.5">
                      {servicesData[selectedService].benefits.map(
                        (benefit, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-sandstone/80 gap-3"
                          >
                            <Star strokeWidth={2.5} className="w-4 h-4" />
                            <span>{benefit}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-vanilla" />
                      <span className="text-sm text-sandstone/80">
                        {servicesData[selectedService].duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-vanilla" />
                      <span className="text-sm text-sandstone/80">
                        {servicesData[selectedService].price}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => openBookingModal(selectedService)}
                    className="uppercase tracking-widest w-full text-xs border border-transparent bg-sandstone/20 text-sandstone hover:bg-transparent hover:text-sandstone hover:border-sandstone/50 px-8 py-3 rounded-full duration-200 flex items-center justify-center gap-2"
                  >
                    <span>Book {selectedService}</span>
                    <MoveRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* overview section */}
      <section className="bg-vanilla/20 py-10 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 font-secondary">
          {/* benefits grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative block">
              <div className="w-full h-[30vh] lg:h-[45vh] rounded-tl-[20vw] overflow-hidden">
                <img
                  src={
                    "https://images.pexels.com/photos/5793899/pexels-photo-5793899.jpeg?_gl=1*1lwaveg*_ga*MTE1NTcwMTQwLjE3NTU4ODU3NjQ.*_ga_8JE65Q40S6*czE3NTgzMjExNzYkbzEzJGcxJHQxNzU4MzIxMjM4JGo1OSRsMCRoMA.."
                  }
                  alt="Physiotherapist"
                  className="w-full h-full object-cover object-[55%_35%] rounded-2xl"
                />
              </div>
            </div>

            {/* content */}
            <div className="space-y-6 text-center lg:text-left order-last lg:order-first">
              <h1 className="text-center lg:text-start font-primary text-sandstone text-3xl md:text-4xl lg:text-5xl">
                Why Choose
                <br className="hidden lg:block" />
                Our Services?
              </h1>
              <h2 className="text-center lg:text-left text-sandstone/80 md:text-lg lg:text-xl">
                We provide comprehensive care with a focus on your individual
                needs and long-term wellness.
              </h2>

              {/* services list */}
              <ul className="grid md:grid-cols-2 lg:grid-cols-1 space-y-1.5">
                {generalServices.map((service, index) => (
                  <li key={index} className="flex items-center text-sandstone/80 gap-4">
                    <Check strokeWidth={2.5} className="w-4 h-4" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={openBookingModal}
                className="hidden lg:flex items-center justify-center uppercase tracking-widest px-8 py-3 rounded-full text-xs gap-2 border border-transparent bg-sandstone text-white hover:bg-transparent hover:text-sandstone hover:border-sandstone/50 duration-200"
              >
                <span>Schedule Appointment</span>
                <MoveRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
