import { notFound, redirect } from "next/navigation";

import Navbar from "@/components/ComponentsUserPage/Navbar";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

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

export async function generateMetadata({ params }: { params: { classroomId: string; }; }) {
    const { userId } = useFakeAuth();

    if (!userId) {
        return {
            title: "Classroom",
        };
    }
    const classroom = {
        id: "1",
        title: "Classroom 1",
        createdAt: new Date(),
        updatedAt: new Date(),

    };

    return {
        title: classroom?.title || "Classroom 1",
    };
}

const ClassroomIdLayout = async ({ children, params, }: { children: React.ReactNode; params: { classroomId: string; }; }) => {
    const { userId } = useFakeAuth();

    if (!userId) {
        redirect("/select-org");
    }

    const classroom = {
        id: "1",
        title: "Classroom 1",
        createdAt: new Date(),
        updatedAt: new Date(),

    };

    if (!classroom) {
        notFound();
    }

    return (
        <div
            className="relative h-full bg-no-repeat bg-cover bg-center"
        >
            <Navbar />
            <div className="absolute inset-0 " />
            <Image
                width={300}
                alt="NextUI hero Image"
                src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
            />
            <main className="relative pt-28 h-full">
                {children}
            </main>
        </div>
    );
};

export default ClassroomIdLayout;