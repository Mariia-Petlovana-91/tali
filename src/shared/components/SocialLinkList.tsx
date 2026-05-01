import { FaSquareInstagram } from 'react-icons/fa6';
import { FaSquareFacebook } from 'react-icons/fa6';
import { RiTiktokLine } from 'react-icons/ri';
import { BsLinkedin } from 'react-icons/bs';
import { SiTelegram } from 'react-icons/si';
import { PiWhatsappLogoBold } from 'react-icons/pi';

const SocialLinkList = () => {
  return (
    <ul className="flex justify-center gap-[16px]">
      <li>
        <a
          href="https://instagram.com/yourname"
          aria-label="Go to facebook"
          target="_blank"
          rel="noopener noreferrer"
          className=" bg-sky-700 socialLink"
        >
          <FaSquareFacebook className="text-xl lg:text-3xl text-sky-100" />
        </a>
      </li>
      <li>
        <a
          href="https://instagram.com/yourname"
          aria-label="Go to instagram"
          target="_blank"
          rel="noopener noreferrer"
          className=" bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 socialLink"
        >
          <FaSquareInstagram className="text-xl lg:text-3xl text-pink-100" />
        </a>
      </li>
      <li>
        <a
          href="https://www.tiktok.com/@yourname"
          aria-label="Go to linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="
             bg-sky-700 socialLink"
        >
          <BsLinkedin className="text-xl lg:text-3xl text-white" />
        </a>
      </li>
      <li>
        <a
          href="https://www.tiktok.com/@yourname"
          aria-label="Go to tiktok"
          target="_blank"
          rel="noopener noreferrer"
          className="
          bg-gradient-to-tr from-cyan-400 via-black to-pink-500 socialLink"
        >
          <RiTiktokLine className="text-xl lg:text-3xl text-white" />
        </a>
      </li>

      <li>
        <a
          href="https://www.tiktok.com/@yourname"
          aria-label="Go to telegram"
          target="_blank"
          rel="noopener noreferrer"
          className="
             bg-sky-700 socialLink"
        >
          <SiTelegram className="text-xl lg:text-3xl text-white" />
        </a>
      </li>
      <li>
        <a
          href="https://www.tiktok.com/@yourname"
          aria-label="Go to whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          className="
             bg-[#25D366] socialLink"
        >
          <PiWhatsappLogoBold className="text-xl lg:text-3xl text-white " />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinkList;
