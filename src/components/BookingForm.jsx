import { createElement, useEffect, useState } from "react";
import {
  CalendarBlankIcon,
  CaretDownIcon,
  ChatTextIcon,
  CheckCircleIcon,
  CircleNotchIcon,
  ClockIcon,
  EnvelopeSimpleIcon,
  PhoneIcon,
  UserIcon,
  WarningCircleIcon,
} from "@phosphor-icons/react";
import { sendBookingEmail } from "../utils/emailService";
import { servicesList } from "../data/servicelist";
import Button from "./ui/Button";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  date: "",
  time: "",
  message: "",
};

const labelClass =
  "mb-2 block font-ui text-xs uppercase tracking-[0.2em] text-mauve-500";
const inputBaseClass =
  "w-full rounded-xl border border-mauve-200 bg-transparent px-4 py-3 font-ui text-sm text-mauve-800 transition-colors focus:border-mauve-500 focus:outline-none";
const selectClass = `${inputBaseClass} appearance-none pr-10`;
const cardClass =
  "rounded-3xl border border-mauve-200 bg-white p-6 shadow-[0_4px_40px_rgb(44_37_32/6%)]";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const hourOptions = Array.from({ length: 11 }, (_, i) =>
  String(i + 7).padStart(2, "0"),
);
const minuteOptions = Array.from({ length: 6 }, (_, i) =>
  String(i * 10).padStart(2, "0"),
);

function getCalendarDays(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const offset = (firstDay + 6) % 7;
  const days = [];

  for (let i = 0; i < offset; i += 1) days.push(null);
  for (let day = 1; day <= daysInMonth; day += 1) days.push(day);

  return days;
}

function toIsoDate(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function IconInputField({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  Icon,
}) {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <div className="relative">
        {createElement(Icon, {
          size: 16,
          className:
            "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-mauve-500",
        })}
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${inputBaseClass} pl-11`}
          required
        />
      </div>
    </div>
  );
}

function TimeSelectGroup({
  hourId,
  minuteId,
  timeData,
  onTimePartChange,
  disabled,
}) {
  const disabledClass = disabled ? "cursor-not-allowed text-mauve-300" : "";

  return (
    <div className="grid grid-cols-2 gap-3">
      <div>
        <label htmlFor={hourId} className={labelClass}>
          Hour
        </label>
        <div className="relative">
          <select
            id={hourId}
            value={timeData.hour}
            onChange={(e) => onTimePartChange("hour", e.target.value)}
            disabled={disabled}
            className={`${selectClass} ${disabledClass}`.trim()}
          >
            <option value="">{disabled ? "Select date" : "Hour"}</option>
            {hourOptions.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
          <CaretDownIcon
            size={16}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-mauve-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor={minuteId} className={labelClass}>
          Minute
        </label>
        <div className="relative">
          <select
            id={minuteId}
            value={timeData.minute}
            onChange={(e) => onTimePartChange("minute", e.target.value)}
            disabled={disabled}
            className={`${selectClass} ${disabledClass}`.trim()}
          >
            <option value="">{disabled ? "Select date" : "Min"}</option>
            {minuteOptions.map((minute) => (
              <option key={minute} value={minute}>
                {minute}
              </option>
            ))}
          </select>
          <CaretDownIcon
            size={16}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-mauve-500"
          />
        </div>
      </div>
    </div>
  );
}

function validateBookingForm({ name, email, phone, service, date, time }) {
  if (!name.trim()) return "Please enter your name.";
  if (!email.trim()) return "Please enter your email.";
  if (!phone.trim()) return "Please enter your phone number.";
  if (!service.trim()) return "Please select a service.";
  if (!date.trim()) return "Please select a date.";
  if (!time.trim()) return "Please select a time.";
  return "";
}

export default function BookingForm({
  prefilledService = "",
  className = "",
  submitLabel = "Book Appointment",
}) {
  const [formData, setFormData] = useState({
    ...initialFormState,
    service: prefilledService,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const today = new Date();
  const [calYear, setCalYear] = useState(today.getFullYear());
  const [calMonth, setCalMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState(null);
  const [mobileDate, setMobileDate] = useState("");
  const [timeData, setTimeData] = useState({ hour: "", minute: "" });
  const days = getCalendarDays(calYear, calMonth);

  const resetDateTime = () => {
    setSelectedDate(null);
    setMobileDate("");
    setTimeData({ hour: "", minute: "" });
  };

  useEffect(() => {
    if (!prefilledService) return;
    setFormData((current) => ({
      ...current,
      service: prefilledService,
    }));
  }, [prefilledService]);

  useEffect(() => {
    if (!mobileDate) return;
    setFormData((current) => ({
      ...current,
      date: mobileDate,
    }));
  }, [mobileDate]);

  useEffect(() => {
    if (timeData.hour && timeData.minute) {
      const nextTime = `${timeData.hour}:${timeData.minute}`;
      setFormData((current) => ({
        ...current,
        time: nextTime,
      }));
      return;
    }

    setFormData((current) => ({
      ...current,
      time: "",
    }));
  }, [timeData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (submitMessage) setSubmitMessage("");
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setMobileDate("");
    setTimeData({ hour: "", minute: "" });
    setFormData((current) => ({
      ...current,
      date: date ? toIsoDate(calYear, calMonth, date) : "",
      time: "",
    }));
  };

  const handleTimePartChange = (field, value) => {
    setTimeData((current) => ({ ...current, [field]: value }));
  };

  const prevMonth = () => {
    if (calMonth === 0) {
      setCalYear((year) => year - 1);
      setCalMonth(11);
      return;
    }

    setCalMonth((month) => month - 1);
  };

  const nextMonth = () => {
    if (calMonth === 11) {
      setCalYear((year) => year + 1);
      setCalMonth(0);
      return;
    }

    setCalMonth((month) => month + 1);
  };

  const isPastDay = (day) => {
    if (!day) return true;

    const comparedDate = new Date(calYear, calMonth, day);
    const startOfToday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );

    return comparedDate < startOfToday;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationMessage = validateBookingForm(formData);

    if (validationMessage) {
      setSubmitMessage(validationMessage);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const result = await sendBookingEmail(formData);

      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          ...initialFormState,
          service: prefilledService || "",
        });
        resetDateTime();
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

  if (isSubmitted) {
    return (
      <div
        className={`${cardClass} flex flex-col items-center text-center ${className}`.trim()}
      >
        <CheckCircleIcon size={36} />
        <h4 className="mb-2 font-display text-2xl text-mauve-900">
          Booking Successful
        </h4>
        <p className="text-sm font-light leading-relaxed text-mauve-800/80">
          We&apos;ll contact you within 24 hours to confirm your appointment.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`space-y-5 ${className}`.trim()}
    >
      <div className="grid gap-5 lg:grid-cols-[2fr_1fr] lg:items-start">
        <div className={cardClass}>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="md:col-span-2">
              <IconInputField
                label="Full Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                Icon={UserIcon}
              />
            </div>

            <IconInputField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your email"
              Icon={EnvelopeSimpleIcon}
            />

            <IconInputField
              label="Phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Your phone"
              Icon={PhoneIcon}
            />

            <div className="md:col-span-2">
              <label htmlFor="service" className={labelClass}>
                Service
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  className={selectClass}
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a service</option>
                  {servicesList.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                <CaretDownIcon
                  size={16}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-mauve-500"
                />
              </div>
            </div>

            <div className="grid gap-5 md:col-span-2 lg:hidden">
              <div>
                <label htmlFor="date" className={labelClass}>
                  Date
                </label>
                <div className="relative">
                  <input
                    id="date"
                    type="date"
                    value={mobileDate}
                    onChange={(e) => {
                      setMobileDate(e.target.value);
                      setSelectedDate(null);
                      setTimeData({ hour: "", minute: "" });
                    }}
                    className={`${inputBaseClass} input-date-clean pr-12`}
                  />
                  <CalendarBlankIcon
                    size={16}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-mauve-500"
                  />
                </div>
              </div>

              <TimeSelectGroup
                hourId="mobile-hour"
                minuteId="mobile-minute"
                timeData={timeData}
                onTimePartChange={handleTimePartChange}
                disabled={!mobileDate}
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className={labelClass}>
                Additional Notes
              </label>
              <div className="relative">
                <ChatTextIcon
                  size={16}
                  className="pointer-events-none absolute left-4 top-3.5 text-mauve-500"
                />
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us anything relevant about your symptoms or goals"
                  className={`${inputBaseClass} resize-none pl-11`}
                />
              </div>
            </div>

            {(formData.date || formData.time) && (
              <div className="hidden items-center gap-3 rounded-2xl bg-mauve-100 px-5 py-4 lg:flex md:col-span-2">
                <CalendarBlankIcon size={16} className="text-mauve-500" />
                <div className="text-sm text-mauve-700">
                  {formData.date ? (
                    <span>{formatDateForDisplay(formData.date)}</span>
                  ) : null}
                  {formData.date && formData.time ? (
                    <span className="mx-2">·</span>
                  ) : null}
                  {formData.time ? <span>{formData.time}</span> : null}
                </div>
              </div>
            )}

            <Button
              type="submit"
              className="w-full justify-center md:col-span-2"
              disabled={isSubmitting}
              showIcon={!isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <CircleNotchIcon size={16} className="animate-spin" />
                  Sending...
                </span>
              ) : (
                submitLabel
              )}
            </Button>
          </div>

          {submitMessage ? (
            <div className="mt-4 flex items-center gap-2 rounded-2xl border border-mauve-300 bg-mauve-100 px-4 py-3 text-sm text-mauve-800">
              <WarningCircleIcon
                size={16}
                weight="fill"
                className="text-mauve-600"
              />
              {submitMessage}
            </div>
          ) : null}
        </div>

        <div className="hidden space-y-5 lg:block">
          <div className={cardClass}>
            <div className="mb-6 flex items-center justify-between">
              <button
                type="button"
                onClick={prevMonth}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-mauve-200 text-lg text-mauve-500 transition-colors hover:border-mauve-400"
              >
                ‹
              </button>
              <span className="font-display text-2xl text-mauve-900">
                {monthNames[calMonth]} {calYear}
              </span>
              <button
                type="button"
                onClick={nextMonth}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-mauve-200 text-lg text-mauve-500 transition-colors hover:border-mauve-400"
              >
                ›
              </button>
            </div>

            <div className="mb-2 grid grid-cols-7">
              {dayNames.map((dayName) => (
                <div
                  key={dayName}
                  className="py-1 text-center font-ui text-[10px] uppercase tracking-[0.2em] text-mauve-500"
                >
                  {dayName}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1.5">
              {days.map((day, index) => {
                if (!day) {
                  return (
                    <div key={`empty-${index}`} className="aspect-square" />
                  );
                }

                const isPast = isPastDay(day);
                const isSelected = selectedDate === day;
                const isToday =
                  day === today.getDate() &&
                  calMonth === today.getMonth() &&
                  calYear === today.getFullYear();

                return (
                  <button
                    key={`${calYear}-${calMonth}-${day}`}
                    type="button"
                    disabled={isPast}
                    onClick={() => handleDateSelect(day)}
                    className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full text-sm transition-all duration-200 ${
                      isPast ? "cursor-not-allowed text-mauve-300" : ""
                    } ${isSelected ? "bg-mauve-800 text-white" : ""} ${
                      isToday && !isSelected
                        ? "border border-mauve-500 text-mauve-700"
                        : ""
                    } ${
                      !isSelected && !isPast && !isToday
                        ? "text-mauve-700 hover:bg-mauve-100"
                        : ""
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          <div className={cardClass}>
            <div className="mb-5 flex items-center gap-2">
              <ClockIcon size={16} className="text-mauve-500" />
              <span className="font-ui text-xs uppercase tracking-[0.2em] text-mauve-500">
                Select a time
              </span>
            </div>

            <TimeSelectGroup
              hourId="desktop-hour"
              minuteId="desktop-minute"
              timeData={timeData}
              onTimePartChange={handleTimePartChange}
              disabled={!selectedDate}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
