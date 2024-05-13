"use client";

import React from "react";
import { FilePenLine, Trash } from "lucide-react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import useDashboardLocationFeature from "./hook";

const DashboardLocationFeature = () => {
  const {
    isDialogOpen,
    isDialogDelete,
    isEdit,
    selectedLocation,
    setIsDialogOpen,
    setIsDialogDelete,
    form,
    isLoading,
    data,
    isAddLocationPending,
    handleAddDialog,
    handleEditDialog,
    handleDeleteDialog,
    addLocation,
    updateLocation,
    deleteLocation,
  } = useDashboardLocationFeature();

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-bold text-3xl">Locations</h1>
        <Button size="sm" onClick={handleAddDialog}>
          Add location
        </Button>
      </div>
      <Table>
        <TableCaption>A list of location that you have created.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading
            ? Array.from({ length: 3 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell
                    colSpan={3}
                    className="animate-pulse bg-gray-200 h-10"
                  ></TableCell>
                </TableRow>
              ))
            : data?.data.map((location: any, index: number) => (
                <TableRow key={location.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{location.name}</TableCell>
                  <TableCell className="flex items-center gap-2 justify-end">
                    <TooltipProvider>
                      <Tooltip delayDuration={100}>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleEditDialog(location)}
                          >
                            <FilePenLine className="w-4 h-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="left">
                          <p>Edit</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip delayDuration={100}>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleDeleteDialog(location)}
                          >
                            <Trash className="w-4 h-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="top">
                          <p>Delete</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
      <Dialog
        open={isDialogOpen}
        onOpenChange={(isOpen) => setIsDialogOpen(isOpen)}
      >
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {isEdit ? "Edit Location" : "Add new location"}
            </DialogTitle>
          </DialogHeader>

          <Form {...form}>
            <form
              onSubmit={
                isEdit
                  ? form.handleSubmit((values) => updateLocation(values))
                  : form.handleSubmit((values) => addLocation(values))
              }
              className="space-y-8"
            >
              <div className="grid gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="eg. Surkarta" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isAddLocationPending}
                >
                  {isAddLocationPending ? "Loading..." : "Submit"}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      <AlertDialog
        open={isDialogDelete}
        onOpenChange={(isOpen) => setIsDialogDelete(isOpen)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you absolutely delete {selectedLocation?.name}?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button
                variant="destructive"
                onClick={() => {
                  deleteLocation(selectedLocation?.id as string);
                }}
              >
                Delete
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DashboardLocationFeature;
