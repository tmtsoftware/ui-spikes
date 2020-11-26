import React, { useState } from 'react';
import { Header } from './components/core/Header';
import { Layout } from 'antd';
import { CustomDrawer } from './components/CustomDrawer';
import './App.css';

const { Content, Footer, Sider } = Layout;
interface AppProps {
  children: React.ReactNode
}

const App = ({children}: AppProps) => {
  const [visible, setVisible] = useState(false);
  
  const onClose = () => {
    setVisible(false);
  };

  return (
    <Layout>
      <Header onBack={() => setVisible(true)}/>
      <CustomDrawer onClose={onClose} visible={visible} />
      <Content className="content">
        {children}
      </Content>
      <Footer>{'Some Footer'}</Footer>
    </Layout>
  );
}

export default App;
