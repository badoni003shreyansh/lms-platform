"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { SparkleIcon } from "lucide-react";

function AddNewCourseDialog({ children }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    includeVideo: "",
    noOfChapters: 1,
    category: "",
    level: "",
  });

  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const onGenerate = () => {
    console.log(formData);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Course Using AI</DialogTitle>
          <DialogDescription asChild>
            <div className="flex flex-col gap-4 mt-3">
              <div>
                <label>Course Name</label>
                <Input
                  type="text"
                  placeholder="Course Name"
                  onChange={(event) =>
                    onHandleInputChange("name", event?.target.value)
                  }
                />
              </div>
              <div>
                <label>Course Description</label>
                <Textarea
                  type="text"
                  placeholder="Course Description"
                  onChange={(event) =>
                    onHandleInputChange("description", event?.target.value)
                  }
                />
              </div>
              <div>
                <label>Number of Chapters</label>
                <Input
                  placeholder="Number of Chapters"
                  type="number"
                  onChange={(event) =>
                    onHandleInputChange("noOfChapters", event?.target.value)
                  }
                />
              </div>
              <div className="flex gap-2 items-center">
                <label>Include Video ??</label>
                <Switch
                  onCheckedChange={() =>
                    onHandleInputChange("includeVideo", formData?.includeVideo)
                  }
                />
              </div>
              <div>
                <label>Difficulty Level</label>
                <Select
                  onValueChange={(value) => onHandleInputChange("level", value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Difficulty Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label>Category</label>
                <Input
                  type="text"
                  placeholder="Categories"
                  onChange={(event) =>
                    onHandleInputChange("category", event?.target.value)
                  }
                />
              </div>
              <div className="flex items-center justify-center">
                <Button onClick={onGenerate}>
                  <SparkleIcon /> Generate Course
                </Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default AddNewCourseDialog;
