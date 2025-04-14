
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
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/resume"
  },
  {
    "renderMode": 2,
    "route": "/project"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1077, hash: '29878fa5d4b0c406c0fec37458a1311f3c996a619a77a33ee70a6b8ad67251b3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1434, hash: 'db72c9d329a0eb352e2384c0c6dd616b3f032bffdf04699df9929737dc86a6c4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 3101, hash: 'dd287fe36aa11b65fe7fd4706c18767ad27fdbf3d946f446c28d8afc4b2477ab', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 5465, hash: '47c611232af6408e47b257fd93d9044998c950508109e22695b1010dbbce612a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 3097, hash: '1da5d0c684ef11f037ab824773e3d9982cff392ca079cc5439b8a76ba506601b', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'project/index.html': {size: 3100, hash: 'f882435eb1cc12e787e99af3f28d67b192add590606ca9eff617059c64b98b17', text: () => import('./assets-chunks/project_index_html.mjs').then(m => m.default)},
    'styles-DEZSRBOS.css': {size: 31, hash: 'CpoQ9kwzI/Q', text: () => import('./assets-chunks/styles-DEZSRBOS_css.mjs').then(m => m.default)}
  },
};
