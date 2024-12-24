import Frame from '../assets/Frame.svg';
import ConnectButton from '../features/ConnectButton.tsx';

const Header = () => {
  return (
    <div className="w-full border-b border-stroke">
      <header className="min-h-[70px] w-[90%] mx-auto tablet:grid tablet:grid-cols-3 flex flex-row gap-10 justify-between items-center">
        <div className="tablet:w-full tablet:block hidden"></div>
        <div className="flex justify-center items-center">
          <img
            src={Frame}
            alt="SFXDX"
            className="w-[98px] tablet:w-auto tablet:min-h-[auto]"
          />
        </div>
        <div className="flex justify-end items-center">
          <ConnectButton />
        </div>
      </header>
    </div>
  );
};

export default Header;
