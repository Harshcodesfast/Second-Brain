import { useNavigate } from "react-router-dom";
import { Button } from "../components/button";
import { MainIcon } from "../icons/mainIcon";
import { IlustrastrationIcon } from "../icons/ilustrasions";

export function Home() {
  const navigate = useNavigate();
  return (
    <div className=" bg-gray-100 h-screen max-h w-screen ">
      <nav className="flex justify-between ">
        <div>
          <div className="flex text-2xl pt-4 pl-2 text-indigo-500 items-center ">
            <MainIcon />
            Second Brain
          </div>
        </div>
        <div className="flex pt-2 pr-2 gap-4 justify-center">
          <Button
            onClick={() => {
              navigate("/signup");
            }}
            variant="primary"
            text="Signup"
            fullWidth={true}
          />
          <Button
            onClick={() => {
              navigate("/signin");
            }}
            variant="tertiary"
            text="Signin"
            fullWidth={true}
          />
        </div>
      </nav>
      <div className="flex justify-center  ">
        <div>
          <h1 className="pt-48 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-8xl hover:text-gray-700">
            Free Up Your Brain Cells
          </h1>
          <h2 className="pt-6 text-2xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text  hover:text-gray-700 ">
            With Second Brain unlock gathering saving backend thoughts into one
            place
          </h2>
        </div>
      </div>
    </div>
  );
}
