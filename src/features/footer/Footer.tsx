import { SocialListLink, ContactsList, Logo, HeroBtn } from '@/shared';

const Footer = () => {
  return (
    <footer className="relative py-[24px] lg:py-[32px] border-t border-t-accent-dark-gold">
      <Logo />
      <ContactsList />
      <SocialListLink />
      <HeroBtn />
    </footer>
  );
};

export default Footer;
