import Link from "next/link";
import { useEffect } from "react";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import userData from "../../userData";
import Image from 'next/image';

const Profile = () => {
  useEffect(() => {
    var prevScrollpos = 20;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos < currentScrollPos) {
        document.getElementById("profile")?.classList.add("profileleft");
      } else {
        document.getElementById("profile")?.classList.remove("profileleft");
      }
    };
  }, []);
  return (
    <div
      style={{ minHeight: "14rem" }}
      className="relative w-fit  flex justify-center"
    >
      <div id="profile" className="w-fit">
        <div className="scale-80 flex-col sm:flex-row  gap-y-6 gap-x-8 sm:scale-75 md:scale-90 lg:scale-100 flex justify-between items-center sm:gap-x-16 mt-12">
          {/* eslint-disable @next/next/no-img-element */}
          <img src="./images/pfp.jpg" className="rounded-full w-36" alt="pfp" />
          <div
            id="profileText"
            className="profileText flex flex-col items-center sm:block"
          >
            <h1 className="font-medium text-3xl w-max">zero<span className="
            bg-clip-text
            font-extrabold
            text-transparent
            bg-gradient-to-r 
            from-purple-400
            to-pink-600">floor</span></h1>
            {/* <div className=" text-gray-200 mt-1 mb-4">{userData.bio}</div> */}
            <div className="flex items-center text-xl gap-3 mt-8">
              {userData.twitter && (
                <a href={userData.twitter} target="_blank" rel="noreferrer">
                  <BsTwitter />
                </a>
              )}
              {userData.instagram && (
                <a href={userData.instagram} target="_blank" rel="noreferrer">
                  <BsInstagram />
                </a>
              )}
              {userData.discord && (
                <a href={userData.discord} target="_blank" rel="noreferrer">
                  <SiDiscord />
                </a>
              )}
              {userData.telegram && (
                <a href={userData.telegram} target="_blank" rel="noreferrer">
                  <FaTelegramPlane />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
