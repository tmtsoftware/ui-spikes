import { Input, PageHeader, Space } from "antd";
import React from "react";
import { MenuOutlined } from '@ant-design/icons';
import { Navigation, BreadCrumbNav } from '../Navigation'

interface HeaderProps {
	onBack: () => void
}
export const Header = ({onBack}: HeaderProps) => {

  return (
    <PageHeader
      ghost={false}
      style={{ padding: '0 50px' }}
      title="TMT"
      subTitle={
        <Space direction="horizontal">
          <span style={{ marginRight: '40px' }}>Engineering Apps</span>
          <BreadCrumbNav />
        </Space>
      }
      extra={
        <Input.Search
          style={{ marginTop: '10px' }}
          placeholder="Search within TMT"
        />
      }
      onBack={onBack}
      backIcon={<MenuOutlined />}
    >
      <Navigation />
    </PageHeader>
  );
};
