// ESLint 10 扁平配置（Phase 2 质量基建）。
// 范围原则：主站唯一状态协调点（src/）与核心纯函数/外壳（assets/）使用浏览器全局；
// 构建脚本与测试使用 Node 全局；独立 Demo、子项目与第三方镜像（demos/、subprojects/）
// 不加入主站构建，也不在本配置的检查范围内（见 AGENTS.md 架构边界）。
import js from '@eslint/js';
import hooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'assets/fonts/**',            // 字体构建产物（不入库）
      '.cache/**',
      'visual-output/**',
      'assets/react-workbench.js', // esbuild 生成的主站运行时
      'assets/source-highlight-worker.js', // esbuild 生成的 Worker（源文件仍检查）
      'assets/showcase/**',        // esbuild 生成的组件展厅运行时
      'assets/style-atlas/**',     // esbuild 生成的图鉴运行时
      'demos/**',                   // 独立 Demo（含第三方实现），不加入主站构建
      'subprojects/**',             // 独立子项目，自带工程约束
    ],
  },
  js.configs.recommended,
  {
    rules: {
      // 本仓库大量使用 `catch {}` 表达"预期中的可忽略失败"，允许空 catch 块。
      'no-empty': ['error', { allowEmptyCatch: true }],
      // 界面文案允许全角标点：JSX 文本与字符串中的 CJK 排版空白不视为违规。
      'no-irregular-whitespace': ['error', { skipStrings: true, skipJSXText: true }],
    },
  },
  {
    // 主站 React 层：解析 JSX 并启用 React Hooks 规则（ROADMAP P1）。
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser },
    },
    plugins: { 'react-hooks': hooks },
    rules: {
      ...hooks.configs.recommended.rules,
      // React Compiler 语义类规则：2026-11-24 已把既有约 30 处全部收敛（ROADMAP P1）。
      // 这三条曾经集中的规则改为 error 作棘轮，防止新代码重新引入；
      // 确需「在 effect 内直接同步挂载区 DOM」或「故意保持陈旧依赖」时，
      // 按仓库惯例写 eslint-disable-next-line + 中文原因（AGENTS.md 第 9-12 条）。
      'react-hooks/set-state-in-effect': 'error',
      'react-hooks/immutability': 'error',
      'react-hooks/exhaustive-deps': 'error',
      // 其余 Compiler 语义规则当前零违规，仍留 warn 以便新场景逐步收敛。
      'react-hooks/purity': 'warn',
      'react-hooks/preserve-manual-memoization': 'warn',
      'react-hooks/refs': 'warn',
      'react-hooks/globals': 'warn',
      'react-hooks/error-boundaries': 'warn',
      'react-hooks/static-components': 'warn',
    },
  },
  {
    // 浏览器运行的核心纯函数与静态外壳。
    files: ['assets/**/*.js'],
    languageOptions: { globals: { ...globals.browser } },
  },
  {
    // Node 环境：构建脚本与测试。
    files: ['scripts/**/*.{js,mjs}', 'tests/**/*.{js,mjs}'],
    languageOptions: { globals: { ...globals.node } },
  },
  {
    // React 行为测试基架：运行在 happy-dom 提供的浏览器全局下。
    files: ['tests/helpers/react-harness.mjs'],
    languageOptions: { globals: { ...globals.node, ...globals.browser } },
  },
  {
    // React 行为测试用例（tests/react-behavior.cases.jsx）运行在 happy-dom 环境。
    files: ['tests/**/*.jsx'],
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser },
    },
  },
];
