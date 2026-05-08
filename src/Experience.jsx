import { Link } from "react-router";

function Experience() {
  return (
    <>
      <section>
        <div>
          <Link to="/">
            <h1 className="ml-50 max-sm:ml-3 mt-5 text-gray-500">←Back</h1>
          </Link>
          <p className="text-4xl ml-50 max-sm:ml-3 mt-7">Experience</p>
          <div className="h-auto border-l-4 border-gray-500 ml-50 max-sm:ml-3 mt-5 mb-5">
            <div>
              {/* <span className="h-1 w-1 border-gray-500 border-l-20 rounded-full"></span> */}
              <h1 className="ml-5 mt-3 text-2xl font-semibold">
                FrontEnd Intern
              </h1>
              <p className="ml-5 mt-1 text-xl">GrowByData</p>
              <h3 className="ml-5 text-gray-500">
                September 2024 - December 2024
              </h3>
              <p className="ml-5 mt-7 font-semibold">Responsibilities</p>
              <p className="mt-2 ml-5 text-gray-500">
                • Designed and developed a mock e-commerce platform with a
                signup and login system using react.js, express.js, and MySQL
                <br />
                <br />
                • Worked with RESTful APIs<br />
                <br />
                • Worked with react routing and redux toolkit <br />
              </p>
            </div>
            <h1 className="ml-5 mt-20 text-2xl font-semibold">
              Backend Intern
            </h1>
            <p className="ml-5 mt-1 text-xl">Ilika Nepal</p>
            <h3 className="ml-5 text-gray-500">January 2025 - February 2024</h3>
            <p className="ml-5 mt-7 font-semibold">Responsibilities</p>
            <p className="mt-2 ml-5 text-gray-500">
              • Worked on a student information app developing user interface
              and setting up APIs
              <br />
              <br />
              • Worked on authentication and authorization using nest.js
              <br />
            </p>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
