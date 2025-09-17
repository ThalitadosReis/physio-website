import { Award, Check } from "lucide-react";

export default function Services() {
  const services = [
    "Personalized physiotherapy sessions",
    "Post-injury rehabilitation",
    "Sports performance optimization",
    "Pain management programs",
    "Mobility & strength training",
    "Preventive care & wellness plans",
  ];

  return (
    <section id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-6 font-secondary">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-sandstone/50 mb-20">
          {/* column 1 */}
          <div className="flex flex-col items-start gap-4 p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              fill="#44312b"
              viewBox="0 0 256 256"
            >
              <path d="M230.33,141.06a24.34,24.34,0,0,0-18.61-4.77C230.5,117.33,240,98.48,240,80c0-26.47-21.29-48-47.46-48A47.58,47.58,0,0,0,156,48.75,47.58,47.58,0,0,0,119.46,32C93.29,32,72,53.53,72,80c0,11,3.24,21.69,10.06,33a31.87,31.87,0,0,0-14.75,8.4L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56ZM119.46,48A31.15,31.15,0,0,1,148.6,67a8,8,0,0,0,14.8,0,31.15,31.15,0,0,1,29.14-19C209.59,48,224,62.65,224,80c0,19.51-15.79,41.58-45.66,63.9l-11.09,2.55A28,28,0,0,0,140,112H100.68C92.05,100.36,88,90.12,88,80,88,62.65,102.41,48,119.46,48ZM16,160H40v40H16Zm203.43,8.21-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9Z"></path>
            </svg>
            <h2 className="text-2xl font-primary text-sandstone">
              Helping since 2000
            </h2>
            <span className="text-sandstone">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.
            </span>
          </div>

          {/* column 2 */}
          <div className="flex flex-col items-start gap-4 p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              fill="#44312b"
              viewBox="0 0 256 256"
            >
              <path d="M254.3,107.91,228.78,56.85a16,16,0,0,0-21.47-7.15L182.44,62.13,130.05,48.27a8.14,8.14,0,0,0-4.1,0L73.56,62.13,48.69,49.7a16,16,0,0,0-21.47,7.15L1.7,107.9a16,16,0,0,0,7.15,21.47l27,13.51,55.49,39.63a8.06,8.06,0,0,0,2.71,1.25l64,16a8,8,0,0,0,7.6-2.1l55.07-55.08,26.42-13.21a16,16,0,0,0,7.15-21.46Zm-54.89,33.37L165,113.72a8,8,0,0,0-10.68.61C136.51,132.27,116.66,130,104,122L147.24,80h31.81l27.21,54.41ZM41.53,64,62,74.22,36.43,125.27,16,115.06Zm116,119.13L99.42,168.61l-49.2-35.14,28-56L128,64.28l9.8,2.59-45,43.68-.08.09a16,16,0,0,0,2.72,24.81c20.56,13.13,45.37,11,64.91-5L188,152.66Zm62-57.87-25.52-51L214.47,64,240,115.06Zm-87.75,92.67a8,8,0,0,1-7.75,6.06,8.13,8.13,0,0,1-1.95-.24L80.41,213.33a7.89,7.89,0,0,1-2.71-1.25L51.35,193.26a8,8,0,0,1,9.3-13l25.11,17.94L126,208.24A8,8,0,0,1,131.82,217.94Z"></path>
            </svg>
            <h2 className="text-2xl font-primary text-sandstone">
              Trusted by the Community
            </h2>
            <span className="text-sandstone">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.
            </span>
          </div>

          {/* column 3 */}
          <div className="flex flex-col items-start gap-4 p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              fill="#44312b"
              viewBox="0 0 256 256"
            >
              <path d="M216,88H168V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V88H40a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16H88v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V168h48a16,16,0,0,0,16-16V104A16,16,0,0,0,216,88Zm0,64H160a8,8,0,0,0-8,8v56H104V160a8,8,0,0,0-8-8H40V104H96a8,8,0,0,0,8-8V40h48V96a8,8,0,0,0,8,8h56Z"></path>
            </svg>
            <h2 className="text-2xl font-primary text-sandstone">
              Covered by Insurance
            </h2>
            <span className="text-sandstone">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.
            </span>
          </div>
        </div>

        {/* main-content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left-content */}
          <div className="space-y-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-primary font-bold text-sandstone">
              Is pain causing you to miss out on life?
            </h1>
            <p className="text-sandstone/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* services list */}
            <ul className="space-y-1">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-sandstone" />
                  <span className="text-sandstone/90">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* right-services image */}
          <div className="relative block">
            <div className="relative mx-auto w-full h-[25vh] lg:h-[50vh] rounded-bl-[20vw] overflow-hidden">
              <img
                src={
                  "https://images.pexels.com/photos/5793787/pexels-photo-5793787.jpeg?_gl=1*qbt5vc*_ga*MTE1NTcwMTQwLjE3NTU4ODU3NjQ.*_ga_8JE65Q40S6*czE3NTgwNDYxNDgkbzYkZzEkdDE3NTgwNDYxNDkkajU5JGwwJGgw"
                }
                alt="Physiotherapist"
                className="w-full h-full object-cover object-[25%_47%] rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
