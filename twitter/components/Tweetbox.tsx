import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";
import React, { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { Tweet, TweetBody } from "../typings";
import { fetchTweets } from "../utils/fetchTweets";
import toast from "react-hot-toast";

interface Props {
  setTweets: React.Dispatch<React.SetStateAction<Tweet[]>>;
}

function Tweetbox({ setTweets }: Props) {
  const [input, setInput] = useState<string>("");
  const [inputBoxVisible, setInputBoxVisible] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");
  const { data: session } = useSession();

  const imgRef = useRef<HTMLInputElement>(null);
  console.log("cd", image);

  const addImageToTweet = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (!imgRef.current?.value) return;
    setImage(imgRef.current.value);
    imgRef.current.value = "";
    setInputBoxVisible(false);
  };

  const postTweet = async () => {
    const tweetInfo: TweetBody = {
      text: input,
      username: session?.user?.name || "Unknown user",
      profileImg: session?.user?.image || "https://links.papareact.com/gll",
      image: image,
    };

    const result = await fetch(`api/addTweet`, {
      body: JSON.stringify(tweetInfo),
      method: "POST",
    });
    console.log("result", result);
    const json = await result.json();

    const newTweets = await fetchTweets();
    setTweets(newTweets);

    toast("Tweet Posted", {
      icon: "hello",
    });
    return json;
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    postTweet();
    setInput("");
    setImage("");
    setInputBoxVisible(false);
    console.log("clicked");
  };

  return (
    <div className="flex space-x-2 p-5">
      <img
        className="mt-4 h-14 w-14 rounded-full object-cover"
        src={session?.user?.image || "https://links.papareact.com/gll"}
        alt=""
      />

      <div className="flex flex-1 items-center p1-2">
        <form className="flex flex-1 flex-col">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="what's Happening?"
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
          />

          {inputBoxVisible && (
            <form className="flex mt-2 mb-2 bg-blue-50  py-2 px-2 rounded-md">
              <input
                ref={imgRef}
                type="text"
                className="outline-none bg-transparent flex-1 "
                placeholder="image"
              />
              <button
                type="submit"
                onClick={addImageToTweet}
                className="bg-twitter text-white text-sm font-bold rounded-full px-2 py-1"
              >
                Add Image
              </button>
            </form>
          )}
          <div className="flex items-center justify-between">
            <div className="flex flex-1 space-x-1 text-twitter">
              <PhotographIcon
                onClick={() => session && setInputBoxVisible(!inputBoxVisible)}
                className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150"
              />
              <SearchCircleIcon className="h-5 w-5" />
              <EmojiHappyIcon className="h-5 w-5" />
              <CalendarIcon className="h-5 w-5" />
              <LocationMarkerIcon className="h-5 w-5" />
              {/* Icons */}
            </div>

            <button
              onClick={handleSubmit}
              disabled={!input || !session}
              className="bg-twitter px-5 py-2 rounded-full font-bold text-white disabled:opacity-40 "
            >
              Tweet
            </button>
          </div>
          {image && (
            <img
              className="mt-10 h-40 w-full rounded-md object-contain shadow-lg"
              src={image}
            />
          )}
        </form>
      </div>
    </div>
  );
}

export default Tweetbox;
