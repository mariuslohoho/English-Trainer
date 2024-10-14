import React from "react";
import { Button, ButtonProps, Text, View } from "react-native";

interface EButtonProps extends ButtonProps {}

export default function EButton(props: EButtonProps) {
  return <Button {...props} />;
}
