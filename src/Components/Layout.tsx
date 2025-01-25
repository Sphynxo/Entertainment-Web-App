import { Outlet } from "react-router";
import Header from "./Header";
import Search from "./Search";
export default function Layout() {
  

  return (
    <div className="md:p-[2.4rem] xl:flex gap-[3.6rem] xl:h-[100vh] xl:overflow-y-hidden">
      <Header />
      <div className="px-[1.6rem] py-[2.4rem] xl:w-full xl:pr-[2.4rem]  xl:p-0 xl:overflow-y-auto">
        <Search />
        <div className="mt-[2.4rem]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
