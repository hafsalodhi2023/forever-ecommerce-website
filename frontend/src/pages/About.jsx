import Title from "../components/Title";
import { assets } from "../assets/assets";

function About() {
  return (
    <div>
      <div className="pt-8 text-4xl text-center border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="flex flex-col gap-16 my-10 md:flex-row">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 text-gray-600 md:w-2/4"></div>
      </div>
    </div>
  );
}

export default About;
