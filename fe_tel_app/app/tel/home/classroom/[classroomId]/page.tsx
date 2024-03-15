
// Các import và mã của bạn ở đây


import { redirect } from "next/navigation";


import { FetchData } from "@/services/classroom-service";
import { Classroom } from "@/models/classroom";
import { useEffect } from "react";
import { ClassEventList } from "@/components/ComponentsClassroom/ClassEventList";

interface ClassroomIdPageProps {
  params: {
    classroomId: string;
  };
};

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

const ClassroomIdPage = async ({
  params,
}: ClassroomIdPageProps) => {
  const { userId } = useFakeAuth();

  if (!userId) {
    redirect("/select-org");
  }


  return (
    <div className="p-4 h-full overflow-x-auto">
      <ClassEventList />
    </div>
  );
};

export default ClassroomIdPage;