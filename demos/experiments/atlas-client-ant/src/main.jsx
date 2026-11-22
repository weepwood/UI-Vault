import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Alert,
  App as AntApp,
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  Col,
  Collapse,
  ConfigProvider,
  DatePicker,
  Descriptions,
  Divider,
  Drawer,
  Dropdown,
  Empty,
  Form,
  Input,
  InputNumber,
  Layout,
  Menu,
  Modal,
  Pagination,
  Popconfirm,
  Progress,
  Radio,
  Rate,
  Row,
  Select,
  Segmented,
  Slider,
  Space,
  Spin,
  Statistic,
  Steps,
  Switch,
  Table,
  Tabs,
  Tag,
  TimePicker,
  Timeline,
  Tooltip,
  Typography,
  message,
} from 'antd';
import zhCN from 'antd/locale/zh_CN';
import {
  AppstoreOutlined,
  BellOutlined,
  CheckCircleOutlined,
  CodeOutlined,
  FormOutlined,
  LayoutOutlined,
  MessageOutlined,
  PlusOutlined,
  SearchOutlined,
  TableOutlined,
} from '@ant-design/icons';
import 'antd/dist/reset.css';
import './app.css';

const { Header, Content, Sider } = Layout;
const { Title, Text, Paragraph } = Typography;
const { RangePicker } = DatePicker;

const catalog = [
  { key: 'overview', label: '组件总览', icon: <AppstoreOutlined /> },
  { key: 'general', label: '通用', icon: <CodeOutlined /> },
  { key: 'entry', label: '数据录入', icon: <FormOutlined /> },
  { key: 'display', label: '数据展示', icon: <TableOutlined /> },
  { key: 'navigation', label: '导航', icon: <LayoutOutlined /> },
  { key: 'feedback', label: '反馈', icon: <MessageOutlined /> },
  { key: 'layout', label: '布局', icon: <LayoutOutlined /> },
];

const tableData = [
  { key: '1', name: '轻量级设计系统', owner: '林晓', status: '进行中', progress: 72 },
  { key: '2', name: '组件文档改版', owner: '周言', status: '待评审', progress: 48 },
  { key: '3', name: '移动端适配', owner: '陈默', status: '已完成', progress: 100 },
];

const tableColumns = [
  { title: '项目名称', dataIndex: 'name', key: 'name' },
  { title: '负责人', dataIndex: 'owner', key: 'owner', width: 86 },
  { title: '状态', dataIndex: 'status', key: 'status', width: 92, render: (status) => <Tag color={status === '已完成' ? 'success' : status === '进行中' ? 'processing' : 'warning'}>{status}</Tag> },
];

function ExampleCard({ title, description, children, className = '' }) {
  return <Card size="small" className={`ant-component-card ${className}`} title={<span>{title}</span>} extra={<Text type="secondary">{description}</Text>}>{children}</Card>;
}

function ComponentGallery() {
  const [query, setQuery] = useState('');
  const [activeNav, setActiveNav] = useState('overview');
  const [switchOn, setSwitchOn] = useState(true);
  const [checked, setChecked] = useState(true);
  const [radio, setRadio] = useState('日');
  const [rating, setRating] = useState(4);
  const [slider, setSlider] = useState(62);
  const [segmented, setSegmented] = useState('全部');
  const [tab, setTab] = useState('1');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [form] = Form.useForm();
  const { message: messageApi, notification: notificationApi } = AntApp.useApp();

  let visibleExamples = 0;
  const matches = (terms) => {
    const matched = !query.trim() || terms.toLowerCase().includes(query.trim().toLowerCase());
    if (matched) visibleExamples += 1;
    return matched;
  };
  const navItems = useMemo(() => catalog.map(({ key, label, icon }) => ({ key, label, icon })), []);
  const scrollToSection = (key) => {
    setActiveNav(key);
    document.getElementById(key)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  };
  const submitDemoForm = (values) => messageApi.success(`已提交：${values.name}`);

  const section = (key, title, subtitle, children) => (
    <section id={key} className="ant-catalog-section">
      <div className="ant-section-heading"><div><Text className="ant-section-kicker">COMPONENTS / {key.toUpperCase()}</Text><Title level={4}>{title}</Title></div><Text type="secondary">{subtitle}</Text></div>
      <div className="ant-component-grid">{children}</div>
    </section>
  );

  return (
    <Layout className="ant-catalog-layout">
      <Sider className="ant-catalog-sider" width={188}>
        <div className="ant-catalog-brand"><span className="ant-brand-mark">A</span><div><strong>Ant Design</strong><Text type="secondary">组件图鉴</Text></div></div>
        <Menu mode="inline" selectedKeys={[activeNav]} items={navItems} onClick={({ key }) => scrollToSection(key)} />
        <div className="ant-catalog-sider-note"><CheckCircleOutlined /> 官方组件 · 本地运行</div>
      </Sider>
      <Layout className="ant-catalog-main">
        <Header className="ant-catalog-topbar">
          <Space><Breadcrumb items={[{ title: 'Ant Design' }, { title: '组件图鉴' }]} /></Space>
          <Space><Text className="ant-catalog-version">Ant Design 6</Text><Button type="text" aria-label="通知" icon={<BellOutlined />} onClick={() => notificationApi.info({ message: '组件通知', description: '这是由 Ant Design Notification 组件显示的本地演示。' })} /></Space>
        </Header>
        <nav className="ant-mobile-categories" aria-label="组件分类">
          <Menu mode="horizontal" selectedKeys={[activeNav]} items={navItems} onClick={({ key }) => scrollToSection(key)} />
        </nav>
        <Content className="ant-catalog-content">
          <section id="overview" className="ant-catalog-hero">
            <div className="ant-hero-copy"><Text className="ant-section-kicker">DESIGN SYSTEM / COMPONENTS</Text><Title level={2}>Ant Design 组件图鉴</Title><Paragraph type="secondary">从基础操作到数据反馈，浏览常用组件的真实样式、组合方式和交互状态。</Paragraph></div>
            <Input allowClear prefix={<SearchOutlined />} placeholder="搜索组件，例如 Button、表格、反馈" value={query} onChange={(event) => setQuery(event.target.value)} />
          </section>
          <Row gutter={[12, 12]} className="ant-catalog-stats">
            <Col xs={8}><Card size="small"><Statistic title="组件分类" value={6} suffix="类" /></Card></Col>
            <Col xs={8}><Card size="small"><Statistic title="组件示例" value={24} suffix="+" /></Card></Col>
            <Col xs={8}><Card size="small"><Statistic title="运行方式" value="本地" /></Card></Col>
          </Row>

          {section('general', '通用', '按钮、文字、状态标记与基础操作', <>
            {matches('按钮 Button primary default dashed text link danger loading') && <ExampleCard title="Button 按钮" description="多种层级与状态"><Space wrap><Button type="primary">主按钮</Button><Button>次按钮</Button><Button type="dashed">虚线按钮</Button><Button type="text">文本按钮</Button><Button type="link">链接按钮</Button><Button type="primary" danger>危险操作</Button><Button type="primary" icon={<PlusOutlined />}>新建</Button></Space></ExampleCard>}
            {matches('Typography 文字 标题 段落 文本') && <ExampleCard title="Typography 排版" description="标题、正文与文本状态"><Title level={5}>设计系统让界面保持一致</Title><Paragraph className="ant-demo-paragraph">使用明确的层级呈现信息。<Text strong>重点内容</Text>、<Text type="secondary">辅助信息</Text>和<Text type="success">成功状态</Text>共享同一套排版规则。</Paragraph><Text code>npm install antd</Text></ExampleCard>}
            {matches('Tag Badge 标签 徽标 头像 Avatar') && <ExampleCard title="Tag · Badge · Avatar" description="状态、计数与身份"><Space wrap><Tag>默认</Tag><Tag color="processing">进行中</Tag><Tag color="success">已完成</Tag><Tag color="warning">待处理</Tag><Badge count={5}><Button>待办事项</Button></Badge><Badge dot><Avatar style={{ background: '#1677ff' }}>林</Avatar></Badge><Avatar.Group><Avatar style={{ background: '#1677ff' }}>林</Avatar><Avatar style={{ background: '#13c2c2' }}>周</Avatar><Avatar style={{ background: '#9254de' }}>陈</Avatar><Avatar style={{ background: '#d9d9d9', color: '#555' }}>+2</Avatar></Avatar.Group></Space></ExampleCard>}
          </>)}

          {section('entry', '数据录入', '输入、选择、日期和表单校验', <>
            {matches('Input 输入框 Search Password InputNumber Select 下拉') && <ExampleCard title="Input · InputNumber · Select" description="文本与选项录入"><Space direction="vertical" className="ant-demo-stretch"><Input placeholder="输入项目名称" allowClear /><Space wrap><Input.Search placeholder="搜索设计资源" enterButton onSearch={(value) => messageApi.info(`搜索：${value || '全部资源'}`)} /><InputNumber min={0} max={999} defaultValue={24} addonAfter="px" /></Space><Select defaultValue="design" options={[{ value: 'design', label: '设计系统' }, { value: 'components', label: '组件文档' }, { value: 'motion', label: '动效规范' }]} /></Space></ExampleCard>}
            {matches('Radio Checkbox Switch Slider Rate 单选 多选 开关 评分') && <ExampleCard title="Radio · Checkbox · Switch" description="偏好与状态切换"><Space direction="vertical"><Radio.Group value={radio} onChange={(event) => setRadio(event.target.value)} options={['日', '周', '月']} optionType="button" /><Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)}>订阅更新提醒</Checkbox><Space><Switch checked={switchOn} onChange={setSwitchOn} checkedChildren="开启" unCheckedChildren="关闭" /><Rate value={rating} onChange={setRating} /></Space><Slider value={slider} onChange={setSlider} tooltip={{ formatter: (value) => `${value}%` }} /></Space></ExampleCard>}
            {matches('DatePicker TimePicker 日期 时间') && <ExampleCard title="DatePicker · TimePicker" description="日期与时间选择"><Space wrap><DatePicker placeholder="选择日期" /><TimePicker placeholder="选择时间" /><RangePicker /></Space></ExampleCard>}
            {matches('Form 表单 校验 Form.Item') && <ExampleCard title="Form 表单" description="布局、规则与提交反馈"><Form form={form} layout="vertical" onFinish={submitDemoForm} className="ant-demo-form"><Form.Item name="name" label="项目名称" rules={[{ required: true, message: '请输入项目名称' }]}><Input placeholder="例如：组件文档改版" /></Form.Item><Form.Item name="type" label="项目类型" rules={[{ required: true, message: '请选择项目类型' }]}><Select placeholder="选择分类" options={[{ value: 'web', label: 'Web 应用' }, { value: 'mobile', label: '移动端' }]} /></Form.Item><Button type="primary" htmlType="submit">提交表单</Button></Form></ExampleCard>}
          </>)}

          {section('display', '数据展示', '表格、统计、进度、描述与时间线', <>
            {matches('Table 表格 数据列表 表头') && <ExampleCard title="Table 表格" description="排序、状态与紧凑密度" className="ant-demo-table-card"><Table size="small" rowKey="key" columns={tableColumns} dataSource={tableData} pagination={false} /></ExampleCard>}
            {matches('Statistic Progress 统计 进度') && <ExampleCard title="Statistic · Progress" description="指标和完成情况"><Row gutter={16}><Col span={12}><Statistic title="本周访问" value={12864} /></Col><Col span={12}><Statistic title="环比增长" value={12.8} suffix="%" valueStyle={{ color: '#389e0d' }} /></Col></Row><Divider /><Space direction="vertical" className="ant-demo-stretch"><Progress percent={72} status="active" /><Progress percent={100} status="success" /><Progress type="circle" percent={84} size={76} /></Space></ExampleCard>}
            {matches('Descriptions Timeline 描述 时间线') && <ExampleCard title="Descriptions · Timeline" description="结构化信息与过程记录"><Descriptions size="small" column={1} items={[{ key: 'owner', label: '负责人', children: '林晓' }, { key: 'team', label: '所属团队', children: '体验设计组' }, { key: 'updated', label: '最后更新', children: '2026-11-22 09:24' }]} /><Divider /><Timeline items={[{ children: '需求已确认', color: 'green' }, { children: '交互稿评审中', color: 'blue' }, { children: '等待开发排期' }]} /></ExampleCard>}
          </>)}

          {section('navigation', '导航', '菜单、面包屑、标签页、步骤和分页', <>
            {matches('Menu Breadcrumb 菜单 面包屑') && <ExampleCard title="Menu · Breadcrumb" description="页面层级与模块导航"><Breadcrumb items={[{ title: '工作台' }, { title: '设计系统' }, { title: '组件规范' }]} /><Divider /><Menu mode="horizontal" selectedKeys={['overview']} items={[{ key: 'overview', label: '概览' }, { key: 'components', label: '组件' }, { key: 'tokens', label: '设计变量' }]} /></ExampleCard>}
            {matches('Tabs Segmented 标签页 分段控制器') && <ExampleCard title="Tabs · Segmented" description="视图切换"><Segmented value={segmented} onChange={setSegmented} options={['全部', '进行中', '已完成']} /><Divider /><Tabs activeKey={tab} onChange={setTab} items={[{ key: '1', label: '设计概览', children: <Text type="secondary">整合规范、模式与可复用组件。</Text> }, { key: '2', label: '开发指南', children: <Text type="secondary">查看代码示例与集成说明。</Text> }, { key: '3', label: '更新记录', children: <Text type="secondary">组件库最近一次更新于今天。</Text> }]} /></ExampleCard>}
            {matches('Steps Pagination 步骤 分页') && <ExampleCard title="Steps · Pagination" description="流程进度与数据翻页"><Steps size="small" current={1} items={[{ title: '填写信息' }, { title: '确认内容' }, { title: '完成创建' }]} /><Divider /><Pagination size="small" defaultCurrent={2} total={50} showSizeChanger={false} /></ExampleCard>}
          </>)}

          {section('feedback', '反馈', '状态提示、通知、对话框、抽屉与悬浮提示', <>
            {matches('Alert 警告 成功 错误 信息') && <ExampleCard title="Alert 警告提示" description="上下文内状态说明"><Space direction="vertical" className="ant-demo-stretch"><Alert message="操作成功" description="项目已保存到你的工作区。" type="success" showIcon /><Alert message="请检查输入内容" type="warning" showIcon /><Alert message="服务暂时不可用" type="error" showIcon /></Space></ExampleCard>}
            {matches('message notification 消息 通知 提醒') && <ExampleCard title="Message · Notification" description="轻量反馈与系统通知"><Space wrap><Button onClick={() => messageApi.success('保存成功')}>成功消息</Button><Button onClick={() => messageApi.warning('请先填写必填项')}>警告消息</Button><Button onClick={() => notificationApi.open({ message: '有一条新评论', description: '周言评论了「组件文档改版」设计稿。', icon: <BellOutlined style={{ color: '#1677ff' }} /> })}>打开通知</Button></Space></ExampleCard>}
            {matches('Modal Drawer Popconfirm Tooltip 对话框 抽屉 气泡') && <ExampleCard title="Modal · Drawer · Tooltip" description="浮层与二次确认"><Space wrap><Button onClick={() => setModalOpen(true)}>打开 Modal</Button><Modal title="确认发布" open={modalOpen} onOk={() => { setModalOpen(false); messageApi.success('已发布到工作区'); }} onCancel={() => setModalOpen(false)} okText="确认发布" cancelText="再检查一下"><Paragraph>发布后，团队成员都可以查看这个组件规范。</Paragraph></Modal><Button onClick={() => setDrawerOpen(true)}>打开 Drawer</Button><Drawer title="组件说明" open={drawerOpen} onClose={() => setDrawerOpen(false)} width={320}><Paragraph>Drawer 适合承载与当前任务相关的补充信息和表单。</Paragraph><Descriptions size="small" column={1} items={[{ key: 'component', label: '组件', children: 'Drawer 抽屉' }, { key: 'state', label: '状态', children: '可关闭' }]} /></Drawer><Tooltip title="悬浮提示会补充简短说明"><Button>悬浮查看 Tooltip</Button></Tooltip><Popconfirm title="移除这个示例？" description="此操作仅影响当前演示。" okText="移除" cancelText="取消" onConfirm={() => messageApi.success('示例已移除（演示）')}><Button danger>Popconfirm</Button></Popconfirm></Space></ExampleCard>}
            {matches('Spin Loading 加载 Empty 空状态 Collapse 折叠') && <ExampleCard title="Spin · Empty · Collapse" description="加载、空状态和折叠内容"><Space direction="vertical" className="ant-demo-stretch"><Spin tip="正在加载组件数据…"><div className="ant-spin-placeholder">组件内容区域</div></Spin><Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="这里暂时没有数据" /><Collapse size="small" items={[{ key: '1', label: '为什么使用反馈组件？', children: <Text type="secondary">帮助用户理解操作结果，减少等待和不确定感。</Text> }, { key: '2', label: '如何选择反馈方式？', children: <Text type="secondary">按影响范围选择行内提示、轻提示或模态交互。</Text> }]} /></Space></ExampleCard>}
          </>)}

          {section('layout', '布局', '栅格、卡片、分割线和组合排版', <>
            {matches('Grid Row Col 栅格 布局') && <ExampleCard title="Grid 栅格" description="响应式列与间距"><Row gutter={[8, 8]}>{['span 12', 'span 12', 'span 8', 'span 8', 'span 8'].map((label, index) => <Col key={index} span={index < 2 ? 12 : 8}><div className="ant-grid-cell">{label}</div></Col>)}</Row></ExampleCard>}
            {matches('Card Divider Space 卡片 分割 空间') && <ExampleCard title="Card · Divider · Space" description="信息容器与间距"><Card size="small" title="设计系统更新" extra={<Button type="link" size="small">查看</Button>}><Space direction="vertical"><Text>新增 4 个常用组件示例</Text><Text type="secondary">今天 09:24 · 体验设计组</Text></Space></Card><Divider plain>分割内容</Divider><Space wrap><Tag color="blue">可组合</Tag><Tag color="cyan">响应式</Tag><Tag color="purple">可访问</Tag></Space></ExampleCard>}
          </>)}
          {query && !visibleExamples && <Empty className="ant-catalog-no-results" description={`没有找到「${query}」相关组件`} />}
          <footer className="ant-catalog-footer"><Text type="secondary">示例均由官方 Ant Design React 组件本地构建 · MIT License</Text><Dropdown menu={{ items: [{ key: 'docs', label: 'Ant Design 官方文档', onClick: () => window.open('https://ant.design/components/overview/', '_blank', 'noopener,noreferrer') }, { key: 'github', label: 'GitHub 仓库', onClick: () => window.open('https://github.com/ant-design/ant-design', '_blank', 'noopener,noreferrer') }] }}><Button type="link">学习更多</Button></Dropdown></footer>
        </Content>
      </Layout>
    </Layout>
  );
}

function Root() {
  return <ConfigProvider locale={zhCN} theme={{ token: { colorPrimary: '#1677ff', colorBgLayout: '#f5f7fa', borderRadius: 7, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", sans-serif', controlHeight: 34 }, components: { Menu: { itemHeight: 38, itemBorderRadius: 6 }, Card: { headerFontSizeSM: 13 } } }}><AntApp><ComponentGallery /></AntApp></ConfigProvider>;
}

createRoot(document.getElementById('ant-demo-root')).render(<Root />);
