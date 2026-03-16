import { Link } from "react-router-dom";
import Reveal from "../Reveal";
import Button from "../ui/Button";
import { ArrowRightIcon } from "@phosphor-icons/react";
import PageHeader from "../ui/PageHeader";

export default function Contact() {
  return (
    <section className="bg-mauve-100 py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal className="flex flex-col items-center" delay={0.1}>
          <PageHeader
            showLogo={false}
            title="Ready to take the next step?"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
          />
          <Button as={Link} to="/contact" variant="primary" showIcon>
            Get in Touch
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
