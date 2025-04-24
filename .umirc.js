// .umirc.js
import { defineConfig } from 'umi';
import { resolve, join } from 'path';
import fs from 'fs';
import lessToJs from 'less-vars-to-js';

const isDevelopment = process.env.NODE_ENV === 'development';

// Import Ant Design token helper functions.
const { theme } = require('antd/lib');
const { convertLegacyToken } = require('@ant-design/compatible/lib');

const mapToken = theme.defaultAlgorithm(theme.defaultSeed);
const v4Token = convertLegacyToken(mapToken);

// Read your theme LESS variables.
const themeVars = lessToJs(
  fs.readFileSync(join(__dirname, './src/themes/default.less'), 'utf8')
);

export default defineConfig({
  publicPath: isDevelopment ? '/' : 'https://cdn.antd-admin.zuiidea.com/',
  
  // Runtime alias mappings.
  alias: {
    api: resolve(__dirname, './src/services/'),
    components: resolve(__dirname, './src/components'),
    config: resolve(__dirname, './src/utils/config'),
    themes: resolve(__dirname, './src/themes'),
    utils: resolve(__dirname, './src/utils'),
    '@': resolve(__dirname, './src')
  },
  
  antd: false,
  devtool: 'eval',
  
  dva: {
    immer: true
  },
  
  dynamicImport: {
    loading: 'components/Loader/Loader'
  },
  
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false
      },
      'lodash'
    ],
    [
      'import',
      {
        libraryName: '@ant-design/icons',
        libraryDirectory: 'es/icons',
        camel2DashComponentName: false
      },
      'ant-design-icons'
    ],
    ['macros']
  ],
  
  hash: true,
  ignoreMomentLocale: true,
  
  // Use Umi's default node_modules transformation.
  nodeModulesTransform: {
    type: 'none',
    exclude: []
  },
  
  proxy: {
    '/api/v1/weather': {
      target: 'https://api.seniverse.com/',
      changeOrigin: true,
      pathRewrite: { '^/api/v1/weather': '/v3/weather' }
    }
  },
  
  // Customized theme combining Ant Design tokens and your LESS variables.
  theme: {
    ...v4Token,
    ...themeVars
  },
  
  webpack5: {},
  mfsu: {},
  
  chainWebpack(config, { webpack }) {
    if (!isDevelopment) {
      config.merge({
        optimization: {
          minimize: false,
          splitChunks: {
            chunks: 'all',
            minSize: 30000,
            minChunks: 3,
            automaticNameDelimiter: '.',
            cacheGroups: {
              react: {
                name: 'react',
                priority: 20,
                test: /[\\/]node_modules[\\/](react|react-dom|react-dom-router)[\\/]/,
              },
              antd: {
                name: 'antd',
                priority: 20,
                test: /[\\/]node_modules[\\/](antd|@ant-design\/icons)[\\/]/,
              },
              'echarts-gl': {
                name: 'echarts-gl',
                priority: 30,
                test: /[\\/]node_modules[\\/]echarts-gl[\\/]/,
              },
              zrender: {
                name: 'zrender',
                priority: 30,
                test: /[\\/]node_modules[\\/]zrender[\\/]/,
              },
              echarts: {
                name: 'echarts',
                priority: 20,
                test: /[\\/]node_modules[\\/](echarts|echarts-for-react|echarts-liquidfill)[\\/]/,
              },
              highcharts: {
                name: 'highcharts',
                priority: 20,
                test: /[\\/]node_modules[\\/]highcharts[\\/]/,
              },
              recharts: {
                name: 'recharts',
                priority: 20,
                test: /[\\/]node_modules[\\/](recharts)[\\/]/,
              },
              draftjs: {
                name: 'draftjs',
                priority: 30,
                test: /[\\/]node_modules[\\/](draft-js|react-draft-wysiwyg|draftjs-to-html|draftjs-to-markdown)[\\/]/,
              },
              async: {
                chunks: 'async',
                minChunks: 2,
                name: 'async',
                maxInitialRequests: 1,
                minSize: 0,
                priority: 5,
                reuseExistingChunk: true,
              }
            }
          }
        }
      });
    }
  }
});