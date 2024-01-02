import { type ChangeEvent } from "react";

export const handleFieldChange = (
  fieldName: string,
  setMetas: any,
  value: string | ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
) => {
  const fieldValue = typeof value === "string" ? value : value.target.value;

  setMetas((prevMetas: any) => {
    const updatedOpenGraph = prevMetas.openGraph.map(
      (meta: { name: string }) =>
        meta.name === fieldName ? { ...meta, content: fieldValue } : meta,
    );

    const updatedOpenGraphWithGeneralValues = updatedOpenGraph.map(
      (meta: { name: any }) =>
        prevMetas.general.find(
          (generalMeta: { name: any }) => generalMeta.name === meta.name,
        )
          ? { ...meta, content: fieldValue }
          : meta,
    );

    return {
      ...prevMetas,
      general: prevMetas.general.map((meta: { name: string }) =>
        meta.name === fieldName ? { ...meta, content: fieldValue } : meta,
      ),
      openGraph: updatedOpenGraphWithGeneralValues,
      twitter: prevMetas.twitter.map((meta: { name: string }) =>
        meta.name === fieldName ? { ...meta, content: fieldValue } : meta,
      ),
    };
  });
};
