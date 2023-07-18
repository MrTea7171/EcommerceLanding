import { Suspense, lazy, useEffect, useState } from "react";
const DesktopView = lazy(() => import("./Template/Views/DesktopView"));
const MobileView = lazy(() => import("./Template/Views/MobileView"));
const LoadingPage = lazy(() => import("./Template/Pages/LoadingPage"));
const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 768);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setIsMobile(window.innerWidth < 768);
      });
    };
  }, []);

  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        {!isMobile ? <DesktopView /> : <MobileView />}
      </Suspense>
    </>
  );
};

export default App;
