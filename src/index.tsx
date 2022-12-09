import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css'; // 样式重置
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const root = document.getElementById('root');

// theme={{
//   token: {
//     colorPrimary: '#00b96b',
//   },
// }}

if (root) {
  createRoot(root).render(
    // 全局定制antd
    <ConfigProvider prefixCls="eagle-view">
      <App />
    </ConfigProvider>
  );
}
