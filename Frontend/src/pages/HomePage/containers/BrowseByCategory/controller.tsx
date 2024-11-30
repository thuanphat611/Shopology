import {
  Camera,
  CellPhone,
  Computer,
  GamePad,
  HeadPhone2,
  SmartWatch,
} from "@/assets/svg";

const categoryList = [
  {
    name: "Phones",
    icon: <CellPhone />,
  },
  {
    name: "Computers",
    icon: <Computer />,
  },
  {
    name: "Smart Watch",
    icon: <SmartWatch />,
  },
  {
    name: "Camera",
    icon: <Camera />,
  },
  {
    name: "Headphones",
    icon: <HeadPhone2 />,
  },
  {
    name: "Gaming",
    icon: <GamePad />,
  },
];

export default function useHandler() {
  return { categoryList };
}
