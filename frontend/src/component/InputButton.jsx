import React from "react";
import {Button} from "@nextui-org/react";

export default function InputButton({onClick}) {
  return (
    <Button color="primary" className="ml-1" onClick={onClick}>
      Summit
    </Button>
  );
}
