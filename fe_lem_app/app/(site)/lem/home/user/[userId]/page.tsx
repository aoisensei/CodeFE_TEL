import { Suspense } from "react";
import { Info } from "@/components/ComponentsUserPage/Infor";
import { BoardList } from "@/components/ComponentsUserPage/BoardList";

const OrganizationIdPage = async () => {
  const isPro = true;

  return (
    <div className="w-full mb-20">
      <Info isPro={isPro} />
      <hr></hr>
      <div className="px-2 md:px-4">
        <Suspense fallback={<BoardList.Skeleton />}>
          <BoardList />
        </Suspense>
      </div>
    </div>
  );
};

export default OrganizationIdPage;