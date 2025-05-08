const App = () => {
  const products = [
    {
      id: 1,
      title: "Smart Devices",
      description: "Premium smartphones, tablets, and wearables",
      icon: "📱"
    },
    {
      id: 2,
      title: "Home Systems",
      description: "Intelligent IoT solutions",
      icon: "🏠"
    },
    {
      id: 3,
      title: "Pro Tech",
      description: "Enterprise-grade solutions",
      icon: "💻"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-light tracking-tight">TechTrends</div>
          <div className="flex space-x-6 text-sm">
            <a href="#products" className="hover:text-gray-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-gray-600 transition-colors">About</a>
            <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl font-light mb-6 tracking-tight">
            Innovation <span className="text-gray-500">Perfected</span>
          </h1>
          <p className="text-xl text-gray-500 mb-8">
            Elevating technology experiences in Kigali and beyond
          </p>
          <div className="flex justify-center space-x-4">
            <a className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-sm" href="#products">
              View Collection
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light mb-4">Featured Products</h2>
            <p className="text-gray-500">Curated technology for modern living</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-6">{product.icon}</div>
                <h3 className="text-xl font-medium mb-2">{product.title}</h3>
                <p className="text-gray-500">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="md:w-1/2">
              <img 
                src="/images/showroom.jpg" 
                alt="TechTrends Showroom" 
                className="rounded-xl shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-light mb-6">Our Philosophy</h2>
              <p className="text-gray-500 mb-4 leading-relaxed">
                At TechTrends, we believe technology should enhance life without complexity. 
                Based in Kigali, we curate only the most refined electronic solutions, 
                blending cutting-edge innovation with timeless design principles.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Our expert team provides personalized guidance to help you navigate 
                the evolving tech landscape, ensuring seamless integration into your 
                daily life or business operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-md">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4">Contact Us</h2>
            <p className="text-gray-500">Let's discuss your technology needs</p>
          </div>
          <form className="space-y-6">
            <div>
              <input 
                type="text" 
                placeholder="Name"
                className="w-full px-4 py-3 border-b focus:border-black outline-none bg-transparent placeholder-gray-400"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email"
                className="w-full px-4 py-3 border-b focus:border-black outline-none bg-transparent placeholder-gray-400"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 border-b focus:border-black outline-none bg-transparent placeholder-gray-400"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="mt-12">
            <iframe
              title="Google Map - TechTrends"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.158604667693!2d30.064436847984047!3d-1.9440726052193424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6df11ecf591%3A0x16a6a2a6a68f2069!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2srw!4v1686755583301!5m2!1sen!2srw"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl shadow-md"
            ></iframe>
          </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="text-xl font-light mb-4">TechTrends Ltd</div>
            <p className="text-gray-400">KN 4 Avenue, Kigali City</p>
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} TechTrends Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;