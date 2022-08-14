import React from 'react';
import gym from "../images/d-3.png";
const Banner = () => {
    return (
      <section
        style={{
          background: "#000000",
        }}
        className="flex justify-center items-center mt-10"
      >
        <div className="flex-1">
          <img className="mt-[-100px]" src={gym} alt="" />
        </div>
        <div className="flex-1 ">
          <h5 className="text-base-100 uppercase font-bold mb-5">small group and coaching</h5>
          <div className="text-white">
            <h2 className="text-5xl text-accent font-bold uppercase mt-3">
              Personal training in <br /> milton keynes
            </h2>
            <p className="leading-loose mt-10">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
          </div>
          <button className="btn btn-secondary uppercase">
            start here
          </button>
        </div>
      </section>
    );
};

export default Banner;