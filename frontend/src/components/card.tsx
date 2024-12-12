import axios from "axios";
import { DeleteIcon } from "../icons/deleteIcon";
import { ShareIcon } from "../icons/share";
import { TweeterIcon } from "../icons/twitterIcon";
import { YoutubeIcon } from "../icons/youtubeIcon";
import { BACKEND_URL } from "../config";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
  dis?: boolean;
  id?: string;
  refresh?: () => void;
}

export const Card = function ({
  title,
  link,
  type,
  dis,
  id,
  refresh,
}: CardProps) {
  let newlink: string;
  if (type === "youtube") {
    newlink = link.split("&")[0];
  } else {
    newlink = link;
  }

  return (
    <div>
      <div className="p-4 bg-white rounded-md border border-gray-200 max-w-72 min-h-48">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="text-gray-500 pr-2">
              {type === "twitter" ? <TweeterIcon /> : <YoutubeIcon />}
            </div>
            <div className="font-medium">{title}</div>
          </div>
          <div className="flex items-center">
            <div className="text-gray-300 pr-2">
              <a href={link} target="_blank">
                <ShareIcon />
              </a>
            </div>
            <div
              className={`text-gray-300 ${dis ? "hidden" : ""}`}
              onClick={async () => {
                await axios.delete(`${BACKEND_URL}/api/v1/content`, {
                  headers: {
                    Authorization: localStorage.getItem("token"),
                  },
                  data: {
                    contentId: id,
                  },
                });
                if (refresh) refresh();
              }}
            >
              <DeleteIcon />
            </div>
          </div>
        </div>
        <div className="pt-4  ">
          {type === "youtube" && (
            <iframe
              className="w-full  "
              width="560"
              height="315"
              src={newlink.replace("watch", "embed").replace("?v=", "/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
          {type === "twitter" && (
            <blockquote className="twitter-tweet">
              <a href={link.replace("x", "twitter")}></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
};
