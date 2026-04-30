import { FaSquareInstagram } from 'react-icons/fa6';
import { FaSquareFacebook } from 'react-icons/fa6';
import { RiTiktokLine } from 'react-icons/ri';
import { BsLinkedin } from 'react-icons/bs';
import { SiTelegram } from 'react-icons/si';
import { PiWhatsappLogoBold } from 'react-icons/pi';

const SocialLinkList = () => {
  return (
    <ul>
      <li>
        <a
          href="https://instagram.com/yourname"
          target="_blank"
          rel="noopener noreferrer"
          className=" bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"
        >
          <FaSquareInstagram className="text-xl text-pink-100" />
        </a>
      </li>
      <li>
        <a href="https://instagram.com/yourname" target="_blank" rel="noopener noreferrer" className=" bg-sky-700">
          <FaSquareFacebook className="text-xl text-sky-100" />
        </a>
      </li>
      <li>
        <a
          href="https://www.tiktok.com/@yourname"
          target="_blank"
          rel="noopener noreferrer"
          className="
             bg-gradient-to-tr from-cyan-400 via-black to-pink-500"
        >
          <RiTiktokLine className="text-xl text-white" />
        </a>
      </li>
      <li>
        <a
          href="https://www.tiktok.com/@yourname"
          target="_blank"
          rel="noopener noreferrer"
          className="
             bg-sky-700"
        >
          <BsLinkedin className="text-xl text-white" />
        </a>
      </li>
      <li>
        <a
          href="https://www.tiktok.com/@yourname"
          target="_blank"
          rel="noopener noreferrer"
          className="
             bg-sky-700"
        >
          <SiTelegram className="text-xl text-white" />
        </a>
      </li>
      <li>
        <a
          href="https://www.tiktok.com/@yourname"
          target="_blank"
          rel="noopener noreferrer"
          className="
             bg-[#25D366]"
        >
          <PiWhatsappLogoBold className="text-xl text-white" />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinkList;
