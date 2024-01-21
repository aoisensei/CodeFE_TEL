import Link from "next/link";
import { redirect } from "next/navigation";
import { HelpCircle, User2 } from "lucide-react";

//import { db } from "@/lib/db";
// import { Hint } from "@/components/hint";
import { Skeleton } from "@/components/ui/skeleton";
import { FormPopover } from "@/components/Form/form-popover";
// import { MAX_FREE_BOARDS } from "@/constants/boards";
// import { getAvailableCount } from "@/lib/org-limit";

const useFakeAuth = () => {
  const user = {
    userId: "1234567890",
    username: "John Doe",
    email: "johndoe@example.com",
  };

  return {
    userId: user.userId,
    username: user.username,
    email: user.email,
    isAuthenticated: true,
    isLoading: false,
    error: null,
  };
};

export const BoardList = async () => {
  const { userId } = useFakeAuth();

  if (userId == '0') {
    return redirect("/select-org");
  }

//   const boards = await db.board.findMany({
//     where: {
//       userId,
//     },
//     orderBy: {
//       createdAt: "desc"
//     }
//   });

  const boards = [
    {
      id: "1",
      title: "Board 1",
      createdAt: new Date(),
      updatedAt: new Date(),
      imageThumbUrl: ""
    },
    {
      id: "2",
      title: "Board 2",
      createdAt: new Date(),
      updatedAt: new Date(),
      imageThumbUrl: ""
    },
    {
      id: "3",
      title: "Board 3",
      createdAt: new Date(),
      updatedAt: new Date(),
      imageThumbUrl: ""
    },
  ];

  // const availableCount = await getAvailableCount();
  const availableCount = 100;
  const isPro = true;

  return (
    <div className="space-y-4">
      <div className="flex items-center font-semibold text-lg text-neutral-700">
        <User2 className="h-6 w-6 mr-2" />
        Your boards
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {boards.map((board) => (
          <Link
            key={board.id}
            href={`/board/${board.id}`}
            className="group relative aspect-video bg-no-repeat bg-center bg-cover bg-sky-700 rounded-sm h-full w-full p-2 overflow-hidden"
            style={{ backgroundImage: `url(${board.imageThumbUrl})` }}
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
            <p className="relative font-semibold text-white">
              {board.title}
            </p>
          </Link>
        ))}
        <FormPopover sideOffset={10} side="right">
          <div
            role="button"
            className="aspect-video relative h-full w-full bg-muted rounded-sm flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition"
          >
            <p className="text-sm">Create new board</p>
            <span className="text-xs">
              {/* {isPro ? "Unlimited" : `${MAX_FREE_BOARDS - availableCount} remaining`} */}
              {isPro ? "Unlimited" : `${100000} remaining`}

            </span>
            {/* <Hint
              sideOffset={40}
              description={`
                Free Workspaces can have up to 5 open boards. For unlimited boards upgrade this workspace.
              `}
            >
              <HelpCircle
                className="absolute bottom-2 right-2 h-[14px] w-[14px]"
              />
            </Hint> */}
          </div>
        </FormPopover>
      </div>
    </div>
  );
};

BoardList.Skeleton = function SkeletonBoardList() {
  return (
    <div className="grid gird-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
    </div>
  );
};