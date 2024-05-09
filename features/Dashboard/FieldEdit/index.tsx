"use client";

import React from "react";
import Image from "next/image";
import { toast } from "sonner";

import { UploadButton } from "@/lib/uploadthings";
import ActionBack from "@/components/common/action-back";
import ActionChangeImage from "@/components/common/action-change-image";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ILocationSchema } from "../Location/hook";
import useDashboardFieldEditFeature from "./hook";

const DashboardFieldEditFeature = ({
  params,
}: {
  params: { slug: string };
}) => {
  const {
    router,
    image,
    setImage,
    isImageUpload,
    setIsImageUpload,
    data,
    isLoading,
    dataLocation,
    dataLocationLoading,
    form,
    editField,
    editFieldPending,
    handleImageUpload,
  } = useDashboardFieldEditFeature(params.slug);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="relative">
      <h1 className="font-bold text-3xl mb-3">Edit {data?.data.name}</h1>
      <ScrollArea className="h-[80vh]">
        <Form {...form}>
          <form
            className="space-y-4 mx-2"
            onSubmit={form.handleSubmit((data) => {
              editField(data);
            })}
          >
            <div className="grid gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="eg. Papa Ganteng Futsal" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>
                <FormLabel>Image</FormLabel>
                <div>
                  {image === "" ? (
                    <div className="rounded-lg border border-dashed py-10">
                      <UploadButton
                        endpoint="imageUploader"
                        onUploadBegin={handleImageUpload}
                        onClientUploadComplete={(res) => {
                          setImage(res[0].url);
                          setIsImageUpload(false);
                          toast.success("Image uploaded successfully");
                        }}
                        onUploadError={() => {
                          setIsImageUpload(false);
                          toast.error("Failed to upload image");
                        }}
                      />
                    </div>
                  ) : (
                    <div className="relative flex gap-2">
                      <Image
                        src={image || "/images/placeholder.jpg"}
                        alt="field"
                        width={400}
                        height={400}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute right-0 top-0 m-2">
                        <ActionChangeImage
                          action={(e) => {
                            e.preventDefault();
                            setImage("");
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price / Hours</FormLabel>
                    <FormControl>
                      <Input placeholder="eg. 50000" type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={data?.data.location.name} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {dataLocationLoading ? (
                          <SelectItem value="loading">Loading...</SelectItem>
                        ) : (
                          dataLocation?.data.map(
                            (location: ILocationSchema) => (
                              <SelectItem
                                key={location.id}
                                value={location.id || ""}
                              >
                                {location.name}
                              </SelectItem>
                            )
                          )
                        )}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Address</FormLabel>
                    <FormControl>
                      <Input placeholder="eg. Jln Nur Sidnuri" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="eg. Futsal with 2 fields"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full"
                disabled={editFieldPending || isImageUpload}
              >
                {editFieldPending ? "Loading..." : "Submit Edit"}
              </Button>
            </div>
          </form>
        </Form>
      </ScrollArea>
      <div className="absolute top-0 right-0">
        <ActionBack href="/dashboard/field" />
      </div>
    </div>
  );
};

export default DashboardFieldEditFeature;
