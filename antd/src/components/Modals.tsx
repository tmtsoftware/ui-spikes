import {Button, Modal, Space} from 'antd';
import React from 'react';
import {Datatable} from "./TableComponent";
import DescriptionsItem from "antd/es/descriptions/Item";
import Title from 'antd/lib/typography/Title';

export const Modals = () => {
  const info = () => {
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {
      },
    });
  };

  const success = () => {
    Modal.success({
      content: 'some messages...some messages...',
    });
  };

  const error = () => {
    Modal.error({
      title: 'This is an error message',
      content: 'some messages...some messages...',
    });
  };

  const warning = () => {
    Modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  };

  return (
    <>
      <Datatable/>
      <Title> Modals </Title>
      <Space direction="horizontal" size="small">
        <Button onClick={info}>Info</Button>
        <Button onClick={success}>Success</Button>
        <Button danger onClick={error}>
          Error
        </Button>
        <Button onClick={warning}>Warning</Button>
      </Space>
    </>
  );
};
