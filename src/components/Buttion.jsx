

const Button = ({ generteJoke }) => {
  return (
    <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-lg font-semibod py-3 px-6 rounded-md mt-10 lg:mt-12" onClick={generteJoke}>Get Another Joke</button>
  )
}

export default Button;