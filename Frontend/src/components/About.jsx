import React from "react";
import Navbar from "./Navbar";
import book1 from '../image/book1.jpg';
import book2 from '../image/book2.jpg';

function About() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col items-center">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <h1 className="text-3xl font-bold mb-6">About Us</h1>
          <p className="text-lg leading-relaxed mb-4">
            Welcome to our company! We are a team of passionate professionals
            dedicated to delivering the best products and services to our
            clients. Our journey began with a simple idea: to make a difference
            in the industry by offering innovative solutions and exceptional
            customer service.
          </p>
          <img
            src={book1}
            alt="Our Team"
            className="w-full max-w-md mx-auto rounded-lg mb-6"
          />
          <p className="text-lg leading-relaxed mb-4">
            Over the years, we have grown into a leading firm, known for our
            commitment to quality and our ability to adapt to the ever-changing
            market demands. Our team is composed of experts from various fields
            who work together to ensure that we meet and exceed our clients'
            expectations.
          </p>
          <img
            src={book2}
            alt="Our History"
            className="w-full max-w-md mx-auto rounded-lg mb-6"
          />
          <p className="text-lg leading-relaxed mb-4">
            We believe in the power of collaboration and the importance of
            building lasting relationships with our clients. Our mission is to
            provide top-notch solutions that not only solve problems but also
            create new opportunities for growth and success.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Thank you for choosing us. We look forward to working with you and
            helping you achieve your goals.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-left mx-auto max-w-md">
            <li className="text-lg leading-relaxed mb-2">
              <strong>Integrity:</strong> We operate with honesty and
              transparency in all our dealings.
            </li>
            <li className="text-lg leading-relaxed mb-2">
              <strong>Innovation:</strong> We are committed to continuous
              improvement and staying ahead of industry trends.
            </li>
            <li className="text-lg leading-relaxed mb-2">
              <strong>Customer Focus:</strong> Our clients are at the heart of
              everything we do.
            </li>
            <li className="text-lg leading-relaxed mb-2">
              <strong>Teamwork:</strong> We believe that collaboration leads to
              the best results.
            </li>
            <li className="text-lg leading-relaxed mb-2">
              <strong>Excellence:</strong> We strive for the highest standards
              in all our work.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Our History</h2>
          <p className="text-lg leading-relaxed mb-4">
            Founded in [Year], our company started as a small startup with big
            dreams. Today, we are proud to be a leader in our industry, with a
            reputation for innovation and excellence.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            From our humble beginnings, we have grown and expanded our services,
            always staying true to our mission and values. Our success is a
            testament to the hard work and dedication of our team, as well as
            the trust and loyalty of our clients.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
