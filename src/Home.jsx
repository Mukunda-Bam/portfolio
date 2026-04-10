import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import "./Home.css";

function Home() {
  return (
    <>
      <section className="left">
        <div className="ml-50">
          <h1 className="text-5xl">Mukunda Bam</h1>
          <h4 className="mt-4 text-gray-500 text-xl">Frontend Engineer </h4>
          <p className="mt-12">
            I like to experiment with CSS. Hopefully want to convert to
            fullstack in the future.
            <br />
          </p>
        </div>
      </section>

      <section id="next-steps">
        <div className="flex ml-47" id="social">
          <ul>
            <li>
              <a href="https://github.com/Mukunda-Bam" target="_blank">
                <FaGithub />
                GitHub
              </a>
            </li>
            <li>
              <a href="mailto:bammukunda1@gmail.com" target="_blank">
                <MdOutlineMail />
                Email
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* <aside className="ml-50">
        <h1 className="text-2xl font-semibold">Tech stack</h1>
        <p>⚫HTML5/CSS3</p>
        <p>⚫Javascript</p><p>⚫React.js</p><p>⚫Nest.js</p><p>⚫Typescript</p><p>⚫Node.js</p>
        <p>⚫MySQL</p><p>⚫PostgreSQL</p><p>⚫Prisma ORM</p><p>⚫Git/GitHub</p><p>⚫PostMan</p>
        
      </aside> */}

      <Link to="/experience">
        <u>
          <p className="ml-50 mt-10 font-semibold text-gray-600">Experiences</p>
        </u>
      </Link>
    </>
  );
}

export default Home;
