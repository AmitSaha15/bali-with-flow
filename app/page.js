import BookingForm from "@/components/BookingForm";
import ComparisonSection from "@/components/ComparisonSection";
import CTASection from "@/components/CTASection";
import ExperienceDetails from "@/components/ExperienceDetails";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="bg-[#F8F8F7] min-h-screen w-auto font-sans">
      <Navbar />
      <HeroSection />
      <div className="lg:grid lg:grid-cols-12 lg:gap-12 py-5 mt-8 mx-auto max-w-7xl">
        <div className="lg:col-span-7">
          <ExperienceDetails />
        </div>

        <div className="lg:col-span-5 mt-8 lg:mt-0">
          <div className="sticky top-8">
            <BookingForm />
          </div>
        </div>
      </div>
      <CTASection />
      <Testimonial />
      <ComparisonSection />
      <Footer />
    </div>
  );
}
