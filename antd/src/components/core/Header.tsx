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
          <span className={'subtitle'}>Engineering Apps</span>
          <BreadCrumbNav />
        </Space>
      }
      extra={
        <Input.Search
          className={'search'}
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
