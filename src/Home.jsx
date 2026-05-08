import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import Resume from "./assets/Resume.pdf";
import "./Home.css";

function Home() {
  return (
    <>
      <section className="left">
        <div className="ml-50 max-sm:ml-3 max-lg:ml-3">
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
        <div className="flex ml-47 max-sm:ml-3 max-lg:ml-3" id="social">
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

      <aside className="grid grid-cols-[auto_auto] sm:grid-cols-[auto_auto] md:grid-cols-[auto_auto] mt-4">
        <div className="ml-50 max-sm:ml-3 max-lg:ml-3">
          <h1 className="text-2xl mb-3 font-semibold">
            <u>Tech stack</u>
          </h1>
          <p>⚫HTML5/CSS3</p>
          <p>⚫Javascript</p>
          <p>⚫React.js</p>
          <p>⚫Nest.js</p>
          <p>⚫Typescript</p>
          <p>⚫Node.js</p>
          <p>⚫MySQL</p>
          <p>⚫PostgreSQL</p>
          <p>⚫Prisma ORM</p>
          <p>⚫Git/GitHub</p>
          <p>⚫PostMan</p>
          <p>⚫TailwindCSS</p>
        </div>
        <div className="bg-gray-700 rounded-sm justify-self-end mr-10 h-10 self-end cursor-pointer">
          <a href={Resume}>
            <p className="text-gray-400 m-2">Download my CV</p>
          </a>
        </div>
      </aside>

      <Link to="/experience">
        <u>
          <p className="ml-50 max-sm:ml-3 max-lg:ml-3 mt-10 mb-4 font-semibold text-gray-600">
            Experiences
          </p>
        </u>
      </Link>
    </>
  );
}

export default Home;
