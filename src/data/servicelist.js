import { serviceImages } from "../lib/images";

// Service names array for navigation and lists
export const servicesList = [
  "Chiropractic",
  "Acupuncture",
  "Massage Therapy",
  "Physiotherapy",
  "Osteopathy",
  "Lymphatic Drainage",
];

// General services array for Services component
export const generalServices = [
  "Personalized physiotherapy sessions",
  "Post-injury rehabilitation",
  "Sports performance optimization",
  "Pain management programs",
  "Mobility & strength training",
  "Preventive care & wellness plans",
];

// Detailed services data for ServicePage and Expertise components
export const servicesData = {
  Chiropractic: {
    image: serviceImages.chiropractic.src,
    imageAlt: serviceImages.chiropractic.alt,
    description:
      "Chiropractic care focuses on diagnosing and treating musculoskeletal disorders, particularly those related to the spine. Our chiropractors use hands-on techniques to adjust the spine and improve alignment, helping to alleviate pain and enhance overall function.",
    benefits: [
      "Pain relief for back, neck, and joint pain",
      "Improved mobility and range of motion",
      "Enhanced posture and spinal alignment",
      "Reduced muscle tension and stiffness",
      "Better sleep quality and overall wellness"
    ],
    duration: "30-60 minutes",
    price: "$80-120"
  },
  Acupuncture: {
    image: serviceImages.acupuncture.src,
    imageAlt: serviceImages.acupuncture.alt,
    description:
      "Acupuncture is an ancient healing practice that involves inserting thin needles into specific points on the body. This treatment helps balance energy flow, reduce pain, and promote natural healing processes.",
    benefits: [
      "Natural pain management and relief",
      "Stress reduction and relaxation",
      "Improved sleep and energy levels",
      "Enhanced immune system function",
      "Hormonal balance and emotional wellbeing"
    ],
    duration: "45-75 minutes",
    price: "$90-130"
  },
  "Massage Therapy": {
    image: serviceImages.massageTherapy.src,
    imageAlt: serviceImages.massageTherapy.alt,
    description:
      "Therapeutic massage therapy helps relieve muscle tension, reduce stress, and improve circulation. Our licensed massage therapists use various techniques to address your specific needs and promote overall wellness and relaxation.",
    benefits: [
      "Muscle tension relief and relaxation",
      "Improved blood circulation",
      "Stress and anxiety reduction",
      "Enhanced flexibility and mobility",
      "Better recovery from physical activity"
    ],
    duration: "60-90 minutes",
    price: "$100-150"
  },
  Physiotherapy: {
    image: serviceImages.physiotherapy.src,
    imageAlt: serviceImages.physiotherapy.alt,
    description:
      "Physiotherapy focuses on restoring movement and function through physical methods such as exercise, manual therapy, and education. Our physiotherapists work with you to develop personalized treatment plans to help you recover from injuries and improve your overall mobility.",
    benefits: [
      "Injury recovery and rehabilitation",
      "Pain management and prevention",
      "Improved strength and mobility",
      "Postural correction and alignment",
      "Sport-specific conditioning and performance"
    ],
    duration: "45-60 minutes",
    price: "$85-115"
  },
  Osteopathy: {
    image: serviceImages.osteopathy.src,
    imageAlt: serviceImages.osteopathy.alt,
    description:
      "Osteopathy is a treatment approach that focuses on the musculoskeletal system. People who choose to see an Osteopath are usually experiencing pain and have difficulty moving. Our osteopaths use hands-on techniques to restore function and promote healing.",
    benefits: [
      "Holistic approach to pain management",
      "Improved joint mobility and function",
      "Enhanced body mechanics and posture",
      "Reduced inflammation and swelling",
      "Better overall body balance and coordination"
    ],
    duration: "45-60 minutes",
    price: "$90-125"
  },
  "Lymphatic Drainage": {
    image: serviceImages.lymphaticDrainage.src,
    imageAlt: serviceImages.lymphaticDrainage.alt,
    description:
      "Lymphatic drainage massage is a gentle technique that stimulates the lymphatic system to remove toxins and excess fluid. This specialized therapy helps reduce swelling, boost immunity, and promote detoxification.",
    benefits: [
      "Reduced swelling and fluid retention",
      "Enhanced immune system function",
      "Improved detoxification processes",
      "Better skin tone and appearance",
      "Increased energy and vitality"
    ],
    duration: "60-75 minutes",
    price: "$110-140"
  },
};
