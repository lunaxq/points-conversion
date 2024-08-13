import { Image } from "antd-mobile";
import headerImageUrl from "@/assets/images/home/header.png";
import { useNavigate } from "umi";
import PageSideBar from "./components/SideBar";
import { CATEGORY_POINTS_CONVERSION } from "@/pages/constants";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col">
      <Image
        src={headerImageUrl}
        className="flex-none"
        onClick={() => navigate("/instructions")}
      />
      <div className="flex-1 overflow-hidden flex">
        <div className="flex-none h-full">
          <PageSideBar items={CATEGORY_POINTS_CONVERSION} />
          {/* TODO: SideBar */}
        </div>
        <div className="flex-1 h-full flex flex-col overflow-hidden">
          <div className="flex-none">{/* TODO: TabsFilter */}</div>
          <div className="flex-1 h-full overflow-y-scroll">
            {/* TODO: MainContent */}
          </div>
        </div>
      </div>
    </div>
  );
}
