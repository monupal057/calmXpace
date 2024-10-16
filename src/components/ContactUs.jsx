const ContactUs = () => {
    return (
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
          <form className="mt-8 space-y-4">
            <input type="text" className="block w-full px-4 py-2" placeholder="Your Name" />
            <input type="email" className="block w-full px-4 py-2" placeholder="Your Email" />
            <textarea className="block w-full px-4 py-2" rows="5" placeholder="Your Message"></textarea>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">Send Message</button>
          </form>
        </div>
      </section>
    );
  };
  
  export default ContactUs;
  