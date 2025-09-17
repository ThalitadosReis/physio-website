import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="">
            <div className="flex items-center space-x-2 mb-3">
              <img
                src={
                  "https://res.cloudinary.com/douen1dwv/image/upload/v1758047929/default/lotus_2_zntprp.png"
                }
                alt="Logo"
                className="h-10"
              />
              <span className="text-xl font-primary text-sandstone">
                Physio+
              </span>
            </div>
            <p className="text-sm text-sandstone/80 mb-3">
              Dedicated to helping you achieve optimal physical function and
              improve your quality of life through evidence-based physiotherapy
              treatments and compassionate care.
            </p>

            <div className="flex flex-col text-sm text-sandstone/80 mb-4">
              <a href="mailto:">physioplus@example.com</a>
              <span>076 123 45 67</span>
            </div>
            <div className="flex space-x-4 text-sandstone/80">
              <a href="#">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <div
              className="w-full rounded-2xl overflow-hidden"
              style={{
                filter:
                  "sepia(0.6) saturate(0.2) brightness(0.85) contrast(1.3)",
              }}
            >
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.7321621588594!2d8.537676776380067!3d47.3781457711698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a08cc0e6e41%3A0xf5c698b65f8c52a7!2sZurich%20HB!5e0!3m2!1sen!2sch!4v1758055156998!5m2!1sen!2sch"
                className="w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="text-sm text-sandstone/80 mt-4">
              Bahnhofstrasse 1, 8001 Zürich, Switzerland
            </p>
          </div>
        </div>

        <div className="border-t border-sandstone/50 mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sandstone/80 text-sm">
            <p>© 2025 Physio+. All rights reserved.</p>
            <span>Made with ❤️ by Thalita dos Reis</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
