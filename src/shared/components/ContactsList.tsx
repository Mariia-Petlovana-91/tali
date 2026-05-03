import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { BsFillTelephoneFill } from 'react-icons/bs';

const ContactsList = () => {
  return (
    <ul className="listContact">
      <li>
        <a
          className="linkContact iconBtn group"
          aria-label="Go to the google mop and view address Talia 2.KO"
          href="https://www.google.com/maps/search/?api=1&query=Górczewska+228A/u7,+01-460+Warszawa"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaMapMarkerAlt className="icon mr-[4px]" />
          Warszawa,Górczewska 228A/u7
        </a>
      </li>
      <li>
        <a
          className="linkContact iconBtn group"
          aria-label="Go to the email and write Talia 2.KO"
          href="mailto:info@devstudio.com"
        >
          <IoMail className="icon mr-[4px]" />
          info@devstudio.com
        </a>
      </li>
      <li>
        <a
          className="linkContact iconBtn group"
          aria-label="Go to the phone and call Talia 2.KO"
          href="tel:+48730685755"
        >
          <BsFillTelephoneFill className="icon mr-[4px]" />
          +48730685755
        </a>
      </li>
    </ul>
  );
};

export default ContactsList;
