import React from "react";
import {Input} from "@nextui-org/react";

export default function InputString({onChange}) {

  return (
    <Input
      isRequired
      type="number"
      label="Number of Copy"
      defaultValue="xyz"
      min={0}
      max={1000}
      className="max-w-xs w-40 h-10 mr-1"
      onChange={onChange}
    />
  );
}
