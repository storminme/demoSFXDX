import AnimatedBackground from '../../shared/AnimatedBackground.tsx';
import Header from '../../widgets/Header.tsx';
import Footer from '../../widgets/Footer.tsx';
import PrimaryMain from '../../widgets/PrimaryMain.tsx';

function Index() {
  return (
    <>
      <div className="relative">
        <AnimatedBackground />
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Header />
            <PrimaryMain />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Index;
