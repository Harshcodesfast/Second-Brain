import { TweeterIcon } from "../icons/twitterIcon";
import { YoutubeIcon } from "../icons/youtubeIcon";

export const ToggleBtn = function ({
  text,
  clk,
}: {
  text: string;
  clk: () => void;
}) {
  enum contentType {
    Youtube = "youtube",
    Twitter = "twitter",
  }
  return (
    <div className="flex justify-center">
      <button
        className={`${
          text === contentType.Twitter ? "bg-blue-300" : "bg-red-300"
        } px-3 py-2 rounded-md `}
        onClick={clk}
      >
        {text === contentType.Twitter ? <TweeterIcon /> : <YoutubeIcon />}
      </button>
    </div>
  );
};
