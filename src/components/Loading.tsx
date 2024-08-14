import { Card, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export const Loading = () => {
  return (
    <div className="container flex flex-col gap-10 py-10 space-y-3">
      <Skeleton className="h-8 w-[250px]" />

      <div className="flex flex-col gap-4 ">
        <Skeleton className="h-4 w-[250px]" />
        <div className="space-y-2">
          <Skeleton className="h-[50px] max-w-3xl rounded-xl" />
        </div>
      </div>
      <div className="flex flex-col gap-4 ">
        <Skeleton className="h-4 w-[250px]" />
        <div className="space-y-2">
          <Skeleton className="h-[50px] max-w-3xl rounded-xl" />
        </div>
      </div>
      <div className="flex flex-col gap-4 ">
        <Skeleton className="h-4 w-[250px]" />
        <div className="space-y-2">
          <Skeleton className="h-[50px] max-w-3xl rounded-xl" />
        </div>
      </div>
      <div className="flex flex-col gap-4 ">
        <Skeleton className="h-4 w-[250px]" />
        <div className="space-y-2">
          <Skeleton className="h-[50px] max-w-3xl rounded-xl" />
        </div>
      </div>
      <div className="flex flex-col gap-4 ">
        <Skeleton className="h-4 w-[250px]" />
        <div className="space-y-2">
          <Skeleton className="h-[50px] max-w-3xl rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export const ChatLoading = () => {
  return (
    <>
      <Card className="w-full border-none shadow-none chat place-content-center chat-end">
        <Skeleton className="h-8 w-[250px] px-5  py-1" />
      </Card>

      <Card className="relative w-full border-none shadow-none chat chat-start">
        <div className="absolute top-0 chat-image avatar">
          <div className="w-12 p-1 rounded-full">
            <Skeleton className="w-[90%] h-[90%] mx-auto" />
          </div>
        </div>
        <CardContent className="w-2/3 mx-10 chat-bubble">
          <Skeleton className="w-full h-8 p-10" />
        </CardContent>
      </Card>
    </>
  );
};
