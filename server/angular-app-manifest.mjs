
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/calculator"
  },
  {
    "renderMode": 2,
    "route": "/websocket"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23588, hash: '8bf228fefe164135cb25af4193db035a6908e8f38a0e46f1b352e2fe9d672f09', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17137, hash: '0f4409f2b8179f0dedde791979619f50322a9e1d3f7d6236741a286fbc2944d0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'calculator/index.html': {size: 78521, hash: '7fc0e83a0e0d2042031c70af0634ed82e01fd8b980754e48a26846e71f984fe7', text: () => import('./assets-chunks/calculator_index_html.mjs').then(m => m.default)},
    'websocket/index.html': {size: 27965, hash: '3f31a9ed5b37ec9385de3ed332250648cc312c28b1d9a3d2fd8cd58be6bce56d', text: () => import('./assets-chunks/websocket_index_html.mjs').then(m => m.default)},
    'index.html': {size: 89245, hash: 'e235aa43b9c0285c93c3373ab4b7e6c39d2839282b322447269837ea85d35cc9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 99435, hash: 'd22d99f4f51f85b655825f7ff3eba50ad304eaa6b6a2cfc9fd7a93591e60ca09', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-7TKXAKHI.css': {size: 7004, hash: 'oFJvwbNlaJ0', text: () => import('./assets-chunks/styles-7TKXAKHI_css.mjs').then(m => m.default)}
  },
};
