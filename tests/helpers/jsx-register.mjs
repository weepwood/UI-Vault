// 使用方式：node --test --import ./tests/helpers/jsx-register.mjs tests/*.test.mjs
// 在任何 .jsx 模块被导入之前注册转换钩子。
import { register } from 'node:module';

register(new URL('./jsx-loader.mjs', import.meta.url), import.meta.url);
