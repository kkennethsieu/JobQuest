import { Outlet } from "react-router-dom";
import LoginLeft from "./LoginLeft";

function LoginLayout() {
  return (
    <div className="bg-stone-200 dark:bg-gray-700 flex h-dvh w-full p-6 md:p-10">
      <LoginLeft />
      <main className="w-full md:w-1/2 flex flex-col justify-center">
        <Outlet />
      </main>
    </div>
  );
}

export default LoginLayout;
