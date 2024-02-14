import clsx,{ClassValue} from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classess: ClassValue[])=> twMerge(clsx(classess))