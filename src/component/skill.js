import { GoMarkGithub } from "react-icons/go";
import { IoLogoHtml5 } from "react-icons/io";
import { DiGit } from "react-icons/di";

// Github
// Html
// Git
// Css
// JS
// NPM
// Scss/sass
// React Js
// Axios
const skillClass = "mr-1 inline text-[1.5rem] ";
// eslint-disable-next-line no-unused-vars
const skills = [
  { logo: <GoMarkGithub className={`${skillClass}`} />, name: "Github" },
  { logo: <DiGit className={`${skillClass}`} />, name: "Git" },
  { logo: <IoLogoHtml5 className={`${skillClass}`} />, name: "Html" },
];

export const skill = (
  <>
    {/*skills*/}
    <span className="">
      <div className="block w-80 bg-gray-900 h-80 rounded-lg border border-gray-700">
        <div className="w-[6rem] py-2 p-4 bg-gray-700 rounded-tl-md rounded-br-md font-[600] spacemono shadow-md">
          <p className="text-gray-100 text-center">Skills</p>
        </div>

        {/*FIX: code container */}
        {skills.map((skill) => (
          <div className="w-[5rem] h-[4rem] bg-gray-600 rounded-lg ">
            {skill.name}
          </div>
        ))}
      </div>

    </span>
  </>
);
