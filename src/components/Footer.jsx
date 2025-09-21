import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 font-secondary">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-3">
              <img src="/logo.png" alt="Logo" className="h-10" />
              <span className="text-xl font-primary text-sandstone">
                Physio+
              </span>
            </div>
            <p className="max-w-md text-sm text-sandstone/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex flex-col text-sm text-sandstone/80">
              <span>+41 76 123 45 67</span>
              <a href="mailto:">physioplus@example.com</a>
            </div>
            <span className="text-sm text-sandstone/80">
              Bahnhofstrasse 1, 8001 Zürich, Switzerland
            </span>
          </div>

          <div>
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

        <div className="border-t border-sandstone/50 mt-6 pt-6">
          <div className="text-sm flex flex-col md:flex-row justify-between items-center text-sandstone/80">
            <p>© 2025 Physio+. All rights reserved.</p>
            <span>Made with ❤️ by Thalita dos Reis</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
