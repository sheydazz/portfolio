export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-green-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Shall we work together?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          I'm available for freelance projects and job opportunities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:sheyladazat@gmail.com"
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
          >
             Send email
          </a>
          <a
            href="https://wa.link/0xeif6"
            className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
