// 共享文本工具：跨平台比较时归一化换行符。
// 生成清单始终为 LF；Windows 检出或个别编辑器可能写入 CRLF，
// 字节级比较前必须先归一化，否则会出现“清单未同步”误报。
export const normalizeEol = text => text.replace(/\r\n/g, '\n');
