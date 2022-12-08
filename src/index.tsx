import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(<App />);
}
