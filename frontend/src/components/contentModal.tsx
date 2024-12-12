import { useRef, useState } from "react";
import { CrossIcon } from "../icons/crossIcon";
import { Button } from "./button";
import { InputBox } from "./inputBox";
import { ToggleBtn } from "./toggleBtn";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function CreateContentModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  enum contentType {
    Youtube = "youtube",
    Twitter = "twitter",
  }
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [type, setType] = useState(contentType.Youtube);

  const addContent = async function () {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      { link, title, type },
      { headers: { Authorization: localStorage.getItem("token") } }
    );
  };
  return (
    <div>
      {open && (
        <div>
          <div className="w-screen h-screen bg-slate-500 opacity-50 fixed top-0 left-0 flex justify-center "></div>
          <div className="w-screen h-screen fixed top-0 left-0 flex justify-center">
            <div className="flex flex-col justify-center ">
              <span className="bg-white opacity-100 p-4  rounded">
                <div className="flex justify-end">
                  <div onClick={onClose} className="cursor-pointer">
                    <CrossIcon />
                  </div>
                </div>
                <div>
                  <InputBox reference={titleRef} placeholder="Tittle" />
                  <InputBox reference={linkRef} placeholder="link" />
                </div>

                <div className="py-3 flex justify-start pl-3 ">
                  <ToggleBtn
                    text={type}
                    clk={() => {
                      type == contentType.Youtube
                        ? setType(contentType.Twitter)
                        : setType(contentType.Youtube);
                    }}
                  />
                  <div
                    className={`py-3 flex justify-start pl-3 ${
                      type == contentType.Twitter
                        ? "text-blue-500"
                        : " text-red-500"
                    } font-semibold`}
                  >
                    {type == contentType.Youtube ? "Youtube" : "Twitter"}
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button
                    onClick={() => {
                      addContent();
                      onClose();
                    }}
                    variant="primary"
                    text="Submit"
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
