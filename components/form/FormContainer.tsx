"use client";

import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { actionFunction } from "@/utils/types";

const initialState = {
  message: "",
};

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useFormState(action, initialState);
  const { toast } = useToast;

  useEffect(() => {
    if (state.message) {
      toast({ describtion: state.message });
    }
  }, [state]);

  return <form action={}>{children}</form>;
}

export default FormContainer;
