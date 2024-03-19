"use client";

import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import { FilterData } from '@/models/filter'
import { Skeleton } from "@/components/ui/skeleton";
import { FetchDataClassEvent } from "@/services/classevent-service";

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

export const ClassEventCreate = () => {
  const { userId } = useFakeAuth();
  if (userId == '0') {
    return redirect("/select-org");
  }

  const filter: FilterData = {
    skip: 0,
    take: 10,
    isNotification: true
  };

  const [classEvents, setClassEvents] = useState<any>();
  const [first, setFirst] = useState<any>(true);
  const [post, setPost] = useState<any>(false);


  useEffect(() => {
    if (first == true) {
      const fetchData = async () => {
        const data = await FetchDataClassEvent(filter);
        setClassEvents(data);
      };
      fetchData();
      setFirst(false);
    }
  }, []);

  return (
      <Card className="w-3/4 p-4 ">
            <CardHeader className="flex gap-3">

              <div>
                <h1 className="ml-25 text-xl font-semibold"></h1>
              </div>
            </CardHeader>
            <hr></hr>
            <CardBody>
              <p className=" relative text-base">

              </p>
            </CardBody>

          </Card>
  );
};
