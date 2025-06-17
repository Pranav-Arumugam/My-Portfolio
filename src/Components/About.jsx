import React from "react"
import { questions } from "../data"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Confetti from "react-confetti"
import { useWindowSize } from "@react-hook/window-size"

const About = () => {
  const [current, setCurrent] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [width, height] = useWindowSize()

  const handleAnswer = () => {
    if (selected === null) return

    if (selected === questions[current].answer) {
      setScore(score + 1)
    }
    setShowAnswer(true)
  }

  const nextQuestion = () => {
    setSelected(null)
    setShowAnswer(false)
    setCurrent((prev) => prev + 1)
  }

  const restart = () => {
    setCurrent(0)
    setScore(0)
    setShowAnswer(false)
    setSelected(null)
  }

  return (
    <section className='min-h-screen bg-gray-5 text-center px-4 py-8'>
      <AnimatePresence className='max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6'>
        {current < questions.length ? (
          <>
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h2>Hi , There !</h2>
              <p>Lets Play a quick game to know me better</p>
              <div className='mb-4'>
                <div className='text-sm text-gray-400 '>{`${current + 1} / ${
                  questions.length
                }`}</div>
                <div className='w-full h-2 bg-gray-200 rounded mt-1'>
                  <div
                    className='h-full bg-teal-500 rounded transition-all'
                    style={{
                      width: `${((current + 1) / questions.length) * 100}%`,
                    }}
                  ></div>
                </div>

                <h3 className='mt-8 text-2xl font-bold text-cyan-950'>
                  {questions[current].question}
                </h3>

                <div className='mt-4'>
                  <motion.div
                    className='mt-4'
                    initial='hidden'
                    animate='visible'
                    variants={{
                      visible: { transition: { staggerChildren: 0.1 } },
                    }}
                  >
                    {questions[current].options.map((opt) => {
                      return (
                        <motion.button
                          key={opt}
                          variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          onClick={() => {
                            setSelected(opt)
                          }}
                          className={`p-4 m-2 w-full md:w-2xl rounded text-black font-bold
                        ${
                          selected === opt
                            ? "bg-cyan-600 text-white"
                            : "bg-gray-100 hover:bg-gray-200 "
                        }
                        `}
                        >
                          {opt}
                        </motion.button>
                      )
                    })}
                  </motion.div>
                </div>
                {!showAnswer ? (
                  <button
                    onClick={handleAnswer}
                    className={
                      "mt-2 px-4 py-2 rounded bg-cyan-950 text-white hover:bg-teal-600 text-sm transition "
                    }
                  >
                    Check your answer
                  </button>
                ) : (
                  <motion.div
                    className='mt-4 text-sm text-gray-600 '
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className='mb-2'>
                      {selected === questions[current].answer
                        ? "✅ Correct!"
                        : "❌ Oops!"}
                    </p>
                    <p>{questions[current].explanation}</p>
                    <button
                      onClick={nextQuestion}
                      className='mt-4 w-full px-4 py-2 rounded bg-cyan-500 text-white hover:bg-cyan-950 text-sm font-bold'
                    >
                      next
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </>
        ) : (
          <div className='m-0 text-center bg-cyan-950 rounded relative '>
            <div className='absolute inset-0 pointer-events-none z-10'>
              {" "}
              <Confetti
                width={width}
                height={height}
                numberOfPieces={150}
                recycle={false}
              />
            </div>

            <motion.div
              key='result'
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className='m-0 text-center bg-cyan-950 rounded relative z-20 '
            >
              <h3 className='mt-8 text-2xl font-bold text-white'>Game Over!</h3>
              <p className='m-2 capitalize text-white'>
                you got {score} out of {questions.length} right 🎉
              </p>
              <button
                onClick={restart}
                className='m-8 px-4 py-2 bg-cyan-500 text-white rounded hover:bg-teal-900 text-sm'
              >
                Play Again
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default About
