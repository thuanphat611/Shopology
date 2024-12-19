import { useParams } from "react-router-dom";

export default function useHandler() {
  const { id } = useParams();

  console.log(id);
}
