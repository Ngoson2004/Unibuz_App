import { Button, Card, Checkbox, Label } from "flowbite-react";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PiBookBookmarkFill } from "react-icons/pi";
import Header from "../Components/Header";

export const Guide = () => {
  const navigate = useNavigate();
  // const [toggle, setToggle] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/signin", { state: { showToast: true } });
  };

  return (
    <div className="bg-slate-100">
      <Header />
      <form
        onSubmit={handleSubmit}
        className="sm:px-auto mx-auto grid max-w-4xl grid-rows-1 gap-5 px-5 py-16 lg:py-32"
      >
        <div className="flex flex-col space-y-3">
          <div>
            <PiBookBookmarkFill className="h-10 w-10 text-[#3B4FE6]" />
          </div>
          <div>
            <p className="text-lg font-bold text-black">Good Vibes Guide</p>
          </div>
          <div>
            <p className="text-xs text-black sm:text-sm">
              Unibuz is for everyone. We're united against hate speech,
              discrimination and words that could cause harm.
            </p>
          </div>
        </div>

        <Card>
          <div className="flow-root">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="flex items-center justify-between py-4">
                <div className="flex flex-col">
                  <p className="text-md font-medium text-black dark:text-white">
                    We celebrate diversity
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Your race, ethnicity, religion, gender, or sexuality---here,
                    you're safe and valued.
                  </p>
                </div>
              </li>
              <li className="flex items-center justify-between py-4">
                <div className="flex flex-col">
                  <p className="text-md font-medium text-black dark:text-white">
                    Mind your language
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Encourage inclusitivity and responsibilty in every word.
                    Fun's great, but let's skip the profanity and offensive
                    language.
                  </p>
                </div>
              </li>
              <li className="flex items-center justify-between py-4">
                <div className="flex flex-col">
                  <p className="text-md font-medium text-black dark:text-white">
                    Criticise kindly
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Constructive feedback is welcome, but keep it
                    respectful---no personal attacks or insults.
                  </p>
                </div>
              </li>
              <li className="flex items-center justify-between py-4">
                <div className="flex flex-col">
                  <p className="text-md font-medium text-black dark:text-white">
                    Nothing illegal
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    We want to keep our space safe and sound, so anything that's
                    against the law is a off-limits.
                  </p>
                </div>
              </li>
              <li className="flex items-center justify-between py-4">
                <div className="flex flex-col">
                  <p className="text-md font-medium text-black dark:text-white">
                    Keep it clean
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Our space is all about respectful interactions, so please,
                    no sexual content or explicit images.
                  </p>
                </div>
              </li>
              <li className="flex items-center justify-between py-4">
                <div className="flex flex-col">
                  <p className="text-md font-medium text-black dark:text-white">
                    Creativity, Not Copy-Paste
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    We love originality. So remember, if it's not yours, give a
                    shout-out to the creator or better yet simply share your own
                    stuff.
                  </p>
                </div>
              </li>
              <li className="flex items-center justify-between py-4">
                <div className="flex flex-col">
                  <p className="text-md font-medium text-black dark:text-white">
                    Privacy is Key
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    We're all trust here. Share your own stories, but let's not
                    spill the beans on someone else's details without an 'okay'
                    from them.
                  </p>
                </div>
              </li>
              <li className="flex items-center justify-between py-4">
                <div className="flex flex-col">
                  <p className="text-md font-medium text-black dark:text-white">
                    Flag the Foul Plays
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Spot something that shouldn't be here? Report it to the
                    mods, and we'll take a look.
                  </p>
                </div>
              </li>
              <li className="flex items-center justify-between py-4">
                <div className="flex flex-col">
                  <p className="text-md font-medium text-black dark:text-white">
                    Door, Open Hearts
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    This is a place for all voices and views. Let's embrace the
                    mix and without any 'us' vs. 'them' --- everyone's welcome.
                  </p>
                </div>
              </li>
              <li className="flex items-center justify-between py-4">
                <div className="flex flex-col">
                  <p className="text-md font-medium text-black dark:text-white">
                    Play by the House Rules
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Stick to the rules set by the house, including the community
                    guidelines and terms of service. They're here to make sure
                    we all have a good time.
                  </p>
                </div>
              </li>
              <li className="flex items-center justify-between py-4">
                <div className="flex flex-col">
                  <p className="text-md font-medium text-black dark:text-white">
                    Keep it Real
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Facts are our friends. If you've heard misinformation, let's
                    not spread it out. If you have to share, make sure you have
                    the source to verify.
                  </p>
                </div>
              </li>
              <li className="flex items-center justify-between py-4">
                <div className="flex flex-col">
                  <p className="text-md font-medium text-black dark:text-white">
                    Promote Responsibly
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Promotion is okay in moderation. Just remember, no
                    spamming---keep adverts to the designated spaces and stay on
                    topic.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </Card>

        <div className="flex items-center gap-2">
          <Checkbox id="Terms and Condition" required />
          <Label
            htmlFor="Terms and Condition"
            value="I agree to the terms and conditions"
          />
        </div>

        <Button
          type="submit"
          className="rounded-lg bg-blue-700 text-lime-200 hover:bg-lime-200 hover:text-white"
        >
          Continue
        </Button>
      </form>
    </div>
  );
};
