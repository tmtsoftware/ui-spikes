import React, {useRef, useState} from 'react';
import {Link, Switch, withRouter} from 'react-router-dom';
import {Menu, MenuItem, Tab, Tabs} from "@material-ui/core";

const breadcrumbNameMap: Record<string, string> = {
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
      <Link to="/config">Config App</Link>
    </li>
    <li>
      <Link to="/agent">Agent App</Link>
    </li>
    <li>
      <Link to="/Sequencer">Sequencers App</Link>
    </li>
  </ul>
);

// export const BreadCrumbNav = withRouter((props) => {
//   const { location } = props;
//
//   const pathSnippets = location.pathname.split('/').filter((i) => i);
//   const extraBreadcrumbItems = pathSnippets.map((_, index) => {
//     const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
//     return (
//       <Breadcrumb.Item key={url}>
//         <Link to={url}>{breadcrumbNameMap[url]}</Link>
//       </Breadcrumb.Item>
//     );
//   });
//
//   const breadcrumbItems = [
//     <Breadcrumb.Item key="home">
//       <Link to="/">Home</Link>
//     </Breadcrumb.Item>,
//   ].concat(extraBreadcrumbItems);
//
//   return <Breadcrumb>{breadcrumbItems}</Breadcrumb>;
// });

interface NavigationProps {
  location: {pathname: string}
}

const Navigation = ({location}: NavigationProps) => {
  const {pathname} = location;

  return (
    <Tabs value={pathname}>
      <Tab label="Config" value={'/config'} component={Link} to={'/config'}/>
      <Tab label="Agent App" value={'/agent'} disabled={true}/>
      <Tab label="Sequencer" value={'/sequencer'} component={Link} to={'/sequencer'}/>
      <Tab label="External" onClick={() => window.open('https://www.google.com', '_blank')} />
    </Tabs>

  )
};


export default withRouter(Navigation)
