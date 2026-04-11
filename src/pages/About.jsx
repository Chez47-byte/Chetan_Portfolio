import Container from "../components/common/Container";

const About = () => {
  return (
    <section className="py-20 bg-white text-black">
      <Container>

        {/* HEADING */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          About Me
        </h1>

        {/* CONTENT */}
        <div className="max-w-3xl space-y-5 text-gray-600 leading-relaxed">
          <p>
            I am a backend-focused developer specializing in building scalable,
            efficient, and secure server-side applications using Node.js and Java.
          </p>

          <p>
            My focus is on designing clean APIs, optimizing database performance,
            and structuring applications for maintainability and scalability.
          </p>

        </div>

        {/* 🔥 ADDRESS (OUTSIDE BLOCK) */}
        <div className="mt-8 text-sm text-gray-500 space-y-1">
          <p> At. Dhamangoan Railway, Amravati</p>
          <p> Maharashtra, India 444-711</p>
          <p> Mob. 8793612445</p>
          <p>📧 1718chez@gmail.com</p>
        </div>

        {/* RESUME SECTION */}
        <div className="mt-12 border border-gray-200 p-8 rounded-2xl hover:shadow-md transition">

          <h2 className="text-2xl font-semibold mb-4">
            My Resume
          </h2>

          <p className="text-gray-600 mb-6 max-w-xl">
            Want to know more about my skills, experience, and projects? Download or view my resume below.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="/chetanResume.pdf"
              download
              className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
            >
              Download Resume
            </a>

            <a
              href="/chetanResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black px-6 py-3 rounded-xl hover:bg-black hover:text-white transition"
            >
              View Resume
            </a>
          </div>

        </div>

      </Container>
    </section>
  );
};

export default About;