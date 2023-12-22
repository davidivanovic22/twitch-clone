import { Check } from "lucide-react";

export const VerifiedMark = () => {
  return (
    <div className="pl-[1px] flex items-center justify-center h-4 w-4 rounded-full bg-blue-600">
      <Check className="h-[10px] w-[10px] text-primary stroke-[4px]" />
    </div>
  )
}