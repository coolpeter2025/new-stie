import { IconKey } from "@/lib/data/services";
import {
  BeanIcon,
  CalendarIcon,
  ClockIcon,
  CoffeeCupIcon,
  MapPinIcon,
  MilkIcon,
  SteamIcon,
  ThumbsUpIcon,
} from "./Icons";

const baseProps = "h-12 w-12";

export const iconMap: Record<IconKey, JSX.Element> = {
  coffee: <CoffeeCupIcon className={baseProps} />,
  bean: <BeanIcon className={baseProps} />,
  milk: <MilkIcon className={baseProps} />,
  calendar: <CalendarIcon className={baseProps} />,
  map: <MapPinIcon className={baseProps} />,
  clock: <ClockIcon className={baseProps} />,
  thumbs: <ThumbsUpIcon className={baseProps} />,
  steam: <SteamIcon className={baseProps} />,
};
