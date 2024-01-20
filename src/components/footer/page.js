import Slack from "../../assets/Slack.png";
import Notion from "../../assets/Notion.png";
import Google from "../../assets/logos_google.png";
import Monday from "../../assets/logos_monday.png";
import Trello from "../../assets/Trello-logo-blue 1.png";
import Image from "next/image";

const Footer = () => {
  const images = [Google, Trello, Monday, Notion, Slack];

  return (
    <div className="bg-white justify-center flex gap-44 h-36 items-center  ">
      {images.map((item) => (
        <div>
          <Image src={item} />
        </div>
      ))}
    </div>
  );
};

export default Footer;
