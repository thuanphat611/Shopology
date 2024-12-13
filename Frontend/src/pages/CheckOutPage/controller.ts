import { useSearchParams } from "react-router-dom";
import { Form } from "antd";

export default function useHandler() {
  const [form] = Form.useForm();
  const [searchParams] = useSearchParams();
  const idList = searchParams.get("ids");
  const quantityList = searchParams.get("quantity");

  return { form };
}
