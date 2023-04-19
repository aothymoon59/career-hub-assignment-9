import React, { useEffect, useState } from "react";
import SingleQuestion from "../SingleQuestion/SingleQuestion";

const Blog = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);
  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto bg-[#F9F9FF]">
        <div className="bg-[url('https://i.ibb.co/pf7qwYs/Vector.png')] bg-no-repeat bg-left-bottom min-h-[300px] flex justify-center items-center">
          <h2 className="font-extrabold text-[32px] text-[#1A1919]">Blog</h2>
        </div>
      </div>

      <div className="w-full max-w-screen-xl mx-auto mt-16 md:mt-32 py-3 md:py-5 px-4 md:px-8">
        {questions.map((singleQues, index) => (
          <SingleQuestion key={index} singleQues={singleQues}></SingleQuestion>
        ))}
      </div>
    </>
  );
};

export default Blog;
