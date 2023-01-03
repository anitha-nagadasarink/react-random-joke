// Om Ganapathi Siddhi Buddhu
// OMshakthi amma Shivappa
// Vishnu Lakshmi
// Brahma Saraswathi
// Dakshina murthy Haygriva
// Sri Venakwateshwara Sri Vidya Vijaya Gnana Dhrya Aurogya Samayaspoorthy Lakshmi devi


import React, { useState, useEffect } from "react";
import Button from "./Buttion";

const Jokecontainer = () => {

  const [joke, setJoke] = useState("");
  const [jokePuchLine, setJokePuchLine] = useState("");




  const generteJoke = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(response => response.json())
      .then(data => {
        setJoke(data.setup);
        setJokePuchLine(" ")
        setTimeout(() => {
          setJokePuchLine(`- ${data.punchline} 😂`)
        }, 2000);
      })
      .catch((err) => {
        console.error(`An error occured while feteching the joke ${err}`);
      })
  }

  useEffect(() => {
    generteJoke();

  }, [])

  return (
    <section className="bg-white w-4/5 lg:w-1/2 mx-auto text-center p-8 lg:p-12 rounded-md">
      <h1 className="font-xs font-bold text-gray-500">Don't Laugh Challenge</h1>
      <div className="pt-4 lg:pt-8">
        <h3 className="text-2xl font-semibold"> {joke}</h3>
        <h6 className="mt-5 font-semibold">{jokePuchLine}</h6>

        <Button generteJoke={generteJoke} />
      </div>

    </section>

  )
}

export default Jokecontainer;