import React from "react";
import "../src/Demo.css";
import { useState, useEffect } from "react";

interface ProfilePicProps {
  changeImage: number;
  name: string;
}

const ProfilePic: React.FunctionComponent<ProfilePicProps> = (
  props: ProfilePicProps
) => {
  const { changeImage, name } = props;
  const [image, setImage] = useState("");
  const [dots, setDots] = useState(true);
  const imageSize: number = 200;

  useEffect(() => {
    fetch(`https://picsum.photos/${imageSize}`)
      .then((payload: any) => {
        setImage(payload.url);
      })
      .catch(error => {
        console.log(error);
      });
    return console.log("componentwillunmount");
  }, [changeImage]);

  useEffect(() => {
    setDots(prevDots => {
      return !prevDots;
    });
  }, [name]);

  return (
    <div>
      <img
        src={image}
        alt="Random"
        className={dots ? "ext-image-border" : "ext-image-margin"}
      />
    </div>
  );
};

export default ProfilePic;
