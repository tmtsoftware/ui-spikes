import { Breadcrumb, Menu, Affix } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

const { SubMenu } = Menu;


const breadcrumbNameMap: Record<string,string> = {
  '/apps': 'Application List',
  '/apps/1': 'Config App',
  '/apps/2': 'Sequencer App',
  '/apps/2/OCS/DarkNight': 'DarkNight',
  '/apps/2/Iris/DarkNight': 'DarkNight',
  '/apps/2/OCS/ClearSky': 'ClearSky',
  '/apps/2/Iris/ClearSky': 'ClearSky',
};

export const Apps = () => (
  <ul>
    <li>
      <Link to="/apps/1/">Config App</Link>
    </li>
    <li>
      <Link to="/apps/2/">Agent App</Link>
    </li>
    <li>
      <Link to="/apps/2/Sequencers">Sequencers App</Link>
    </li>
  </ul>
);

export const BreadCrumbNav = withRouter((props) => {
  const { location } = props;

  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return <Breadcrumb>{breadcrumbItems}</Breadcrumb>;
});

export const Navigation = () => {
  const [current, setCurrent] = useState<string>('config');
	const [top] = useState(10);

  return (
    <Affix offsetTop={top}>
      <Menu onClick={(e) => setCurrent(e.key.toString())} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="config" icon={<SettingOutlined />}>
          <Link to={'/config'}>Config App</Link>
        </Menu.Item>
        <Menu.Item key="app" disabled>
          Agent App
        </Menu.Item>
        <SubMenu key="SubMenu" title="Sequencers">
          <Menu.ItemGroup title="OCS">
            <Menu.Item key="setting:1">
              <Link to={'/apps/2/OCS/ClearSky'}>ClearSky</Link>
            </Menu.Item>
            <Menu.Item key="setting:2">
              <Link to={'/apps/2/OCS/DarkNight'}>DarkNight</Link>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="IRIS">
            <Menu.Item key="setting:3">
              <Link to={'/apps/2/Iris/ClearSky'}>ClearSky</Link>
            </Menu.Item>
            <Menu.Item key="setting:4">
              <Link to={'/apps/2/Iris/DarkNight'}>DarkNight</Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="ddd">
          <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            External Link
          </a>
        </Menu.Item>
      </Menu>
    </Affix>
  );
};
