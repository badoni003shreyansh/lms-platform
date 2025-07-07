"use client";
import { Button } from "@/components/ui/button";
import { FileQuestionMarkIcon } from "lucide-react";
import React, { useState } from "react";
import AddNewCourseDialog from "./AddNewCourseDialog";

function CourseList() {
  const [courseList, setCourseList] = useState([]);
  return (
    <div className="mt-10">
      <h2 className="font-bold text-3xl">CourseList</h2>
      {courseList?.length === 0 ? (
        <div className="flex flex-col p-7 items-center justify-center border rounded-xl mt-2 bg-secondary">
          <FileQuestionMarkIcon />
          <h2 className="my-2 text-lg font-bold">
            Looks like you have not created any courses yet...
          </h2>
          <AddNewCourseDialog>
            <Button>+ Create your first course</Button>
          </AddNewCourseDialog>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default CourseList;
