import { Form } from "@remix-run/react";
import { useState } from "react";

type ChangeStatusProps = {
  status: "published" | "draft";
  className?: string;
  isSubmitting?: true | false;
  postId: string;
};

const STATUS_POST = [
  {
    label: "Cambiar estado de post",
    value: "default",
    disabled: true,
    selected: true,
  },
  {
    label: "Publicado",
    value: "published",
    disabled: false,
    selected: false,
  },
  {
    label: "Borrador",
    value: "draft",
    disabled: false,
    selected: false,
  },
];

export default function ChangeStatus({
  status,
  postId,
  className,
}: ChangeStatusProps) {
  const [selectedStatus, setSelectedStatus] = useState(status);

  const handleStatusChange = (evt: any) => {
    setSelectedStatus(evt.target.value);
  };

  const isDisabled = status === selectedStatus;

  return (
    <Form className="flex items-center gap-4 justify-center" method="PATCH">
      <select
        id="default"
        value={selectedStatus || "default"}
        name="status"
        onChange={handleStatusChange}
        className="my-2 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white outline-none"
      >
        {STATUS_POST.map((item, idx) => (
          <option disabled={item.disabled} value={item.value} key={idx}>
            {item.label}
          </option>
        ))}
      </select>
      <input type="hidden" name="postId" value={postId} />
      <button
        type="submit"
        disabled={isDisabled}
        className={`text-white ${
          isDisabled
            ? "bg-gray-500 hover:bg-gray-600 pointer-events-none"
            : "bg-pink-500 hover:bg-pink-600"
        }   font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex gap-4 items-center`}
      >
        Guardar
      </button>
    </Form>
  );
}
