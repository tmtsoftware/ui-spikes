import { Drawer } from "antd";
import React from "react";
interface DrawerProps { 
    visible: boolean
    onClose: () => void
}
export const CustomDrawer = (props: DrawerProps) => {
 
  return (
    <Drawer
      title="Basic Drawer"
      placement="left"
      closable={false}
      onClose={props.onClose}
      visible={props.visible}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};
