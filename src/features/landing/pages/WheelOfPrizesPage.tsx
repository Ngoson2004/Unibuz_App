import { prizes } from "../data/prizes";
import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { wheel$ } from "../states/wheel-observable";
import { observer } from "@legendapp/state/react";

const WheelOfPrizesPage = observer(function WheelOfPrizesPage() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const { width, height } = useWindowSize();

  const wheelState = wheel$.get();

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * prizes.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const handleSpinStop = () => {
    setMustSpin(false);
    setShowModal(true);
    wheel$.prize.set(prizes[prizeNumber].option);
    wheel$.hasSpinned.set(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#6F66F6] p-4">
      <div className="relative text-center" style={{ zIndex: 1 }}>
        <h1 className="mb-8 text-4xl font-bold tracking-wide text-white">
          Spin & Win! 🎉
        </h1>

        <div className="relative">
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={prizes}
            onStopSpinning={handleSpinStop}
            backgroundColors={prizes.map(
              (prize) => prize.style.backgroundColor,
            )}
            textColors={["#6F66F6"]}
            fontSize={16}
            radiusLineColor={"#ffffff22"}
            radiusLineWidth={1}
            perpendicularText={false}
            textDistance={50}
          />

          {wheelState.hasSpinned && wheelState.prize !== "" && (
            <div className="mt-4 text-xl font-bold text-white">
              Congratulations! You won: {wheelState.prize}!
            </div>
          )}

          <button
            onClick={handleSpinClick}
            disabled={mustSpin || wheelState.hasSpinned}
            className="mt-8 rounded-full bg-white px-8 py-3 text-lg font-semibold text-[#6F66F6] shadow-lg
                     transition-all duration-300 hover:scale-105 hover:bg-purple-50 disabled:cursor-not-allowed
                     disabled:opacity-50"
          >
            {mustSpin
              ? "Spinning..."
              : wheelState.hasSpinned
                ? "Already Spun!"
                : "SPIN NOW!"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <>
            <Confetti
              width={width}
              height={height}
              recycle={false}
              numberOfPieces={500}
              style={{ position: "fixed", top: 0, left: 0, zIndex: 20 }}
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4"
              style={{ zIndex: 50 }}
              onClick={() => setShowModal(false)}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="mb-4 text-3xl font-bold text-[#6F66F6]">
                    Congratulations! 🎉
                  </h2>
                  <p className="mb-6 text-xl text-gray-700">
                    You won a {prizes[prizeNumber].option}!
                  </p>
                  <button
                    onClick={() => setShowModal(false)}
                    className="rounded-full bg-[#6F66F6] px-6 py-2 font-semibold text-white
                             transition-all duration-300 hover:scale-105 hover:bg-[#5951e8]"
                  >
                    Awesome!
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
});

export default WheelOfPrizesPage;
