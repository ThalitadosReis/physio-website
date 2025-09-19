import { useState, useEffect, useRef } from "react";
import { Loader2, Check, X, Calendar, ChevronDown } from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { sendBookingEmail } from "../utils/emailService";

export default function Booking() {
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
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [timeData, setTimeData] = useState({ hour: "", minute: "" });
  const calendarRef = useRef(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const updatedFormData = { ...formData, [id]: value };
    setFormData(updatedFormData);
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

    // Update form data with selected time (already in 24-hour format)
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      console.log("Form submitted:", formData);

      const result = await sendBookingEmail(formData);

      if (result.success) {
        setSubmitMessage(result.message);
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          time: "",
          message: "",
        });
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

  return (
    <section
      id="booking"
      className="relative bg-white lg:rounded-3xl py-6 lg:py-0 lg:mx-6 my-16"
    >
      <div className="relative max-w-7xl px-6 lg:px-0 font-secondary">
        <div className="grid lg:grid-cols-[50%_50%] lg:gap-16">
          <div className="lg:p-0 lg:m-0">
            <div className="rounded-2xl lg:rounded-r-none lg:rounded-l-2xl overflow-hidden h-full">
              <img
                src={
                  "https://images.pexels.com/photos/5793784/pexels-photo-5793784.jpeg?_gl=1*ipudto*_ga*MTE1NTcwMTQwLjE3NTU4ODU3NjQ.*_ga_8JE65Q40S6*czE3NTgyMTc4MDckbzEwJGcxJHQxNzU4MjE5Mzk5JGo0NiRsMCRoMA"
                }
                alt="Booking"
                className="w-full h-full object-cover object-[35%_15%]"
              />
            </div>
          </div>

          <div className="lg:flex lg:items-center lg:justify-center">
            <div className="py-8 lg:px-6">
              <div className="mb-15">
                <div className="flex flex-col justify-center items-center text-center">
                  <img
                    src="https://res.cloudinary.com/douen1dwv/image/upload/v1758047929/default/lotus_2_zntprp.png"
                    alt="Logo"
                    className="h-12"
                  />
                  <h2 className="text-4xl font-primary text-sandstone mt-2">
                    Book an Appointment
                  </h2>
                  <p className="text-sandstone/80 mt-4">
                    Please fill out the form below to request an appointment.
                  </p>
                </div>
              </div>

              <form className="space-y-2" onSubmit={handleSubmit}>
                {/* name */}
                <div>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-sandstone/20 rounded-full bg-transparent focus:outline-none focus:ring-2 focus:ring-sandstone/30 focus:border-sandstone placeholder:text-sandstone/50"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                {/* info */}
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-sandstone/20 rounded-full bg-transparent focus:outline-none focus:ring-2 focus:ring-sandstone/30 focus:border-sandstone placeholder:text-sandstone/50"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Your Phone"
                    className="w-full px-4 py-3 border border-sandstone/20 rounded-full bg-transparent focus:outline-none focus:ring-2 focus:ring-sandstone/30 focus:border-sandstone placeholder:text-sandstone/50"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                {/* service */}
                <div className="relative">
                  <select
                    id="service"
                    className={`w-full px-4 py-3 border border-sandstone/20 rounded-full bg-transparent focus:outline-none focus:ring-2 focus:ring-sandstone/30 focus:border-sandstone appearance-none cursor-pointer transition-colors duration-200 ${
                      formData.service === ""
                        ? "text-sandstone/50"
                        : "text-black"
                    }`}
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a Service</option>
                    <option value="Chiropractic">Chiropractic</option>
                    <option value="Acupuncture">Acupuncture</option>
                    <option value="Massage Therapy">Massage Therapy</option>
                    <option value="Physiotherapy">Physiotherapy</option>
                    <option value="Osteopathy">Osteopathy</option>
                    <option value="Lymphatic Drainage">
                      Lymphatic Drainage
                    </option>
                  </select>

                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <ChevronDown className="w-5 h-5 text-sandstone/60" />
                  </div>
                </div>
                {/* date / time */}
                <div className="grid grid-cols-2 gap-4">
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
                          : "Select Date"}
                      </span>
                      <Calendar className="h-5 w-5 text-sandstone/60" />
                    </button>

                    {showCalendar && (
                      <div className="absolute top-full left-0 z-50 bg-white border border-sandstone/20 rounded-2xl shadow-lg mt-2 p-4">
                        <DayPicker
                          mode="single"
                          selected={selectedDate}
                          onSelect={handleDateSelect}
                          disabled={(date) => date < new Date()}
                          className="[&_.rdp-button]:rounded-full [&_.rdp-button]:border-none [&_.rdp-button]:transition-all [&_.rdp-button]:duration-200 [&_.rdp-button:hover:not([disabled]):not(.rdp-day_selected)]:bg-sandstone/10 [&_.rdp-day_selected]:bg-sandstone [&_.rdp-day_selected]:text-white [&_.rdp-day_selected]:rounded-full [&_.rdp-day_today:not(.rdp-day_selected)]:border [&_.rdp-day_today:not(.rdp-day_selected)]:border-sandstone [&_.rdp-day_today:not(.rdp-day_selected)]:text-sandstone [&_.rdp-day_today:not(.rdp-day_selected)]:font-semibold [&_.rdp-day_today:not(.rdp-day_selected)]:rounded-full [&_.rdp-head_cell]:text-sandstone/80 [&_.rdp-head_cell]:font-semibold [&_.rdp-head_cell]:text-sm [&_.rdp-caption]:text-sandstone [&_.rdp-caption]:font-semibold [&_.rdp-caption]:mb-4 font-secondary"
                          style={{
                            "--rdp-cell-size": "40px",
                            "--rdp-accent-color": "rgb(188 155 136)",
                            "--rdp-background-color": "rgb(188 155 136)",
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative">
                      <select
                        className={`w-full px-4 py-3 border border-sandstone/20 rounded-full bg-transparent focus:outline-none focus:ring-2 focus:ring-sandstone/30 focus:border-sandstone appearance-none cursor-pointer transition-colors duration-200 ${
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
                          const hour = (i + 8).toString().padStart(2, "0");
                          return (
                            <option key={hour} value={hour}>
                              {hour}
                            </option>
                          );
                        })}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                        <ChevronDown className="w-5 h-5 text-sandstone/60" />
                      </div>
                    </div>

                    <div className="relative">
                      <select
                        className={`w-full px-4 py-3 border border-sandstone/20 rounded-full bg-transparent focus:outline-none focus:ring-2 focus:ring-sandstone/30 focus:border-sandstone appearance-none cursor-pointer transition-colors duration-200 ${
                          timeData.minute ? "text-black" : "text-sandstone/50"
                        } `}
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
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                        <ChevronDown className="w-5 h-5 text-sandstone/60" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* textarea */}
                <div>
                  <textarea
                    id="message"
                    placeholder="Additional information (optional)"
                    className="w-full px-4 py-3 border border-sandstone/20 rounded-3xl h-24 bg-transparent focus:outline-none focus:ring-2 focus:ring-sandstone/30 focus:border-sandstone placeholder:text-sandstone/50 resize-none"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                  />
                </div>
                <button
                  type="submit"
                  className="uppercase tracking-widest w-full text-xs border border-transparent bg-sandstone/20 text-white hover:bg-transparent hover:text-sandstone hover:border-sandstone/50 px-8 py-3 rounded-full duration-200 flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="h-5 w-5 animate-spin text-white" />
                      Submitting...
                    </span>
                  ) : (
                    "Book an Appointment"
                  )}
                </button>

                {submitMessage && (
                  <div
                    className={`mt-4 p-3 rounded-lg text-sm flex items-center gap-2 ${
                      submitMessage.includes("successfully") ||
                      submitMessage.includes("sent")
                        ? "bg-green-100 text-green-800 border border-green-200"
                        : "bg-red-100 text-red-800 border border-red-200"
                    }`}
                  >
                    {submitMessage.includes("successfully") ||
                    submitMessage.includes("sent") ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <X className="h-4 w-4 text-red-600" />
                    )}
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
