
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio-site',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio-site"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 510, hash: 'e2dc6117b19f93024b8b6860c71e201aa4a8c24bfa50f40abae1c491da340ca0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1023, hash: '920c2c4d90eca36f602b1e36c3e6beffb3d97175384701004dc3ede40e39e533', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20855, hash: 'e9c3c8075f9316fbe672ebdf92b5c401e07352da1c2cf3a011f4eec3782df680', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
