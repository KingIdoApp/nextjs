import { KeyboardArrowDownSharp } from "@material-ui/icons"
import { init } from "ityped"
import { useEffect, useRef } from "react";
import Image from 'next/image'
import profilePic from '../../../public/weman.png'
export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1800,
      strings: [" ดูแลคุณและครอบครัว", "มอบความมั่นใจ ความมั่นคงให้กับคุณ"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          {/* <img src="assets/weman.png" alt="" /> */}
          <Image src={profilePic} alt="Picture of the author"></Image>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>สวัสดีครับทุกท่าน</h2>
          <h1>ศรีรัตน์ ประกันภัย</h1>
          <h3>
            ให้เรา <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDownSharp className="icon" />
        </a>
      </div>
    </div>
  );
}
