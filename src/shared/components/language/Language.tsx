import i18n from 'i18next';

const Language = () => {
  return (
    <div className="flex gap-[8px]">
      <button
        type="button"
        className="btnLanguage"
        aria-label="Set UA language"
        onClick={() => {
          i18n.changeLanguage('ua');
        }}
      >
        UA
      </button>
      <button
        type="button"
        className="btnLanguage"
        aria-label="Set PL language"
        onClick={() => {
          i18n.changeLanguage('pl');
        }}
      >
        PL
      </button>
    </div>
  );
};

export default Language;
