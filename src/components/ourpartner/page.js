import Slack from "../../assets/Slack.png";
import Notion from "../../assets/Notion.png";
import Google from "../../assets/logos_google.png";
import Monday from "../../assets/logos_monday.png";
import Trello from "../../assets/Trello-logo-blue 1.png";
import Image from "next/image";

const OurPartners = () => {
  const images = [Google, Trello, Monday, Notion, Slack];

  return (
    <div className="bg-green_primary h-40">
      <div className="max-w-screen-xxl bg-white">
        <div className="max-w-screen-xl m-auto justify-center flex gap-44 h-32 items-center">
          {images.map((item, index) => (
            <div key={index}>
              <Image src={item} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
