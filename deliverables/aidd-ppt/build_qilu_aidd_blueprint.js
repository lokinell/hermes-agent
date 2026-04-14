const pptxgen = require('pptxgenjs');

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_16x9';
pptx.author = 'LokiBot';
pptx.company = 'LokiBot';
pptx.subject = '齐鲁制药 AIDD 数智化设计蓝图';
pptx.title = '齐鲁制药 AIDD 数智化设计蓝图';
pptx.lang = 'zh-CN';
pptx.theme = {
  headFontFace: 'Aptos Display',
  bodyFontFace: 'Aptos',
  lang: 'zh-CN'
};
pptx.defineLayout({ name: 'CUSTOM', width: 13.333, height: 7.5 });
pptx.layout = 'CUSTOM';

const C = {
  navy: '13294B',
  blue: '1F4E79',
  teal: '0E7490',
  cyan: 'DCEFFC',
  mint: 'D9F3F0',
  cream: 'F7F9FC',
  text: '1F2937',
  subtext: '5B6575',
  border: 'D7DFEA',
  green: '2E8B57',
  amber: 'C58A15',
  red: 'C24141',
  white: 'FFFFFF',
  lightBlue: 'EAF3FF'
};

function addHeader(slide, title, kicker='Qilu Pharmaceutical · AIDD Blueprint') {
  slide.addText(kicker, { x:0.6, y:0.3, w:4.2, h:0.25, fontSize:11, color:C.teal, bold:true, charSpacing:1.2, margin:0 });
  slide.addText(title, { x:0.6, y:0.55, w:8.8, h:0.55, fontSize:26, bold:true, color:C.navy, margin:0 });
  slide.addShape(pptx.ShapeType.line, { x:0.6, y:1.18, w:12.1, h:0, line:{ color:C.border, width:1.2 } });
}

function addFooter(slide, pageNo) {
  slide.addShape(pptx.ShapeType.rect, { x:0, y:7.15, w:13.333, h:0.35, line:{ color:C.navy, transparency:100 }, fill:{ color:C.navy } });
  slide.addText('Confidential · Qilu Pharmaceutical AIDD Transformation Blueprint', { x:0.5, y:7.2, w:6.8, h:0.16, fontSize:9, color:C.white, margin:0 });
  slide.addText(String(pageNo), { x:12.4, y:7.18, w:0.3, h:0.18, fontSize:10, color:C.white, bold:true, align:'right', margin:0 });
}

function addPill(slide, text, x, y, w, fill=C.lightBlue, color=C.blue) {
  slide.addShape(pptx.ShapeType.roundRect, { x, y, w, h:0.34, rectRadius:0.08, line:{ color:fill }, fill:{ color:fill } });
  slide.addText(text, { x:x+0.1, y:y+0.065, w:w-0.2, h:0.18, fontSize:11, color, bold:true, align:'center', margin:0 });
}

function addCard(slide, {x,y,w,h,title,body,accent=C.teal, fill='FFFFFF', titleColor=C.navy, bodyColor=C.subtext}) {
  slide.addShape(pptx.ShapeType.roundRect, { x, y, w, h, rectRadius:0.06, line:{ color:C.border, width:1 }, fill:{ color:fill }, shadow:{ type:'outer', color:'8795A1', blur:2, offset:1, angle:45, opacity:0.12 } });
  slide.addShape(pptx.ShapeType.rect, { x, y, w:0.12, h, line:{ color:accent, transparency:100 }, fill:{ color:accent } });
  slide.addText(title, { x:x+0.22, y:y+0.18, w:w-0.35, h:0.28, fontSize:18, bold:true, color:titleColor, margin:0 });
  slide.addText(body, { x:x+0.22, y:y+0.55, w:w-0.35, h:h-0.72, fontSize:11.5, color:bodyColor, breakLine:false, valign:'top', margin:0.02, fit:'shrink' });
}

function addBulletBlock(slide, title, bullets, x, y, w, h, accent=C.teal) {
  slide.addShape(pptx.ShapeType.roundRect, { x, y, w, h, rectRadius:0.05, line:{ color:C.border, width:1 }, fill:{ color:'FFFFFF' } });
  slide.addText(title, { x:x+0.18, y:y+0.14, w:w-0.3, h:0.26, fontSize:16, color:C.navy, bold:true, margin:0 });
  const runs = [];
  bullets.forEach((b, idx) => {
    runs.push({ text:b, options:{ bullet:true, breakLine: idx !== bullets.length-1 } });
  });
  slide.addText(runs, { x:x+0.22, y:y+0.48, w:w-0.35, h:h-0.6, fontSize:11.5, color:C.text, paraSpaceAfterPt:9, breakLine:false, fit:'shrink' });
  slide.addShape(pptx.ShapeType.rect, { x:x+0.16, y:y+0.15, w:0.06, h:0.22, line:{ color:accent, transparency:100 }, fill:{ color:accent } });
}

// Slide 1 Cover
{
  const s = pptx.addSlide();
  s.background = { color: C.navy };
  s.addShape(pptx.ShapeType.rect, { x:8.3, y:0, w:5.05, h:7.5, line:{ color:C.teal, transparency:100 }, fill:{ color:C.teal, transparency:10 } });
  s.addShape(pptx.ShapeType.rect, { x:9.4, y:-0.2, w:4.5, h:7.8, line:{ color:C.white, transparency:100 }, fill:{ color:C.white, transparency:92 } });
  s.addText('齐鲁制药', { x:0.75, y:1.22, w:2.2, h:0.35, fontSize:20, color:C.cyan, bold:true, margin:0 });
  s.addText('AIDD数智化设计蓝图', { x:0.75, y:1.82, w:5.95, h:0.62, fontSize:28, color:C.white, bold:true, margin:0, fit:'shrink' });
  s.addText('以研发数据底座、知识中台与 AI 平台能力为核心，构建可落地、可审计、可扩展的医药研发数智化体系。', { x:0.78, y:3.02, w:5.35, h:0.76, fontSize:14.2, color:'D9E5F3', margin:0, fit:'shrink' });
  addPill(s, 'Knowledge-Driven', 0.8, 4.6, 1.65, '24476C', C.white);
  addPill(s, 'AIDD Ready', 2.55, 4.6, 1.45, '24476C', C.white);
  addPill(s, 'Enterprise Grade', 4.1, 4.6, 1.8, '24476C', C.white);
  // right-side motif
  const boxes = [
    {x:8.1,y:1.2,w:1.7,h:1.0,c:'DCEFFC',t:'研发\n数据底座'},
    {x:10.15,y:1.2,w:1.9,h:1.0,c:'D9F3F0',t:'知识\n中台'},
    {x:8.1,y:2.55,w:1.7,h:1.0,c:'EAF3FF',t:'AI\n中台'},
    {x:10.15,y:2.55,w:1.9,h:1.0,c:'E6F7F5',t:'场景化\n应用'},
    {x:8.1,y:3.9,w:3.95,h:1.05,c:'F7F9FC',t:'安全合规 · 权限隔离 · 审计追踪 · 价值闭环'}
  ];
  boxes.forEach(b=>{
    s.addShape(pptx.ShapeType.roundRect, { x:b.x, y:b.y, w:b.w, h:b.h, rectRadius:0.06, line:{ color:'B7C8DB', width:1 }, fill:{ color:b.c } });
    s.addText(b.t,{ x:b.x+0.12, y:b.y+0.18, w:b.w-0.24, h:b.h-0.2, fontSize:16, bold:true, align:'center', valign:'mid', color:C.navy, fit:'shrink', margin:0 });
  });
  s.addText('战略架构方案 · Management Briefing Edition', { x:0.8, y:6.75, w:4.8, h:0.2, fontSize:10.5, color:'C4D2E3', italic:true, margin:0 });
  addFooter(s, 1);
}

// Slide 2 Executive Summary
{
  const s = pptx.addSlide();
  s.background = { color: C.cream };
  addHeader(s, '执行摘要：齐鲁制药 AIDD 建设的总体判断');
  addCard(s, { x:0.7, y:1.45, w:4.0, h:2.1, accent:C.teal, title:'战略判断', body:'AIDD 落地不是“先上大模型”，而是先完成研发数据与知识资产化，再通过 AI 中台把检索、综述、分析、辅助决策能力产品化。'});
  addCard(s, { x:4.95, y:1.45, w:3.7, h:2.1, accent:C.blue, title:'核心目标', body:'构建“数据可用、知识可用、AI 可用、价值可衡量”的企业级能力体系，形成研发效率、知识复用与决策质量的同步提升。'});
  addCard(s, { x:8.9, y:1.45, w:3.75, h:2.1, accent:C.green, title:'建议路径', body:'先做知识型高价值场景，形成组织信任与使用习惯；再向靶点、分子、预测模型和 AIDD 决策深水区演进。'});
  addBulletBlock(s, '首批优先建设方向', [
    '文献智能检索与综述助手',
    '专利情报分析助手',
    'SOP / 规范智能问答',
    '项目资料统一搜索与问答'
  ], 0.7, 3.95, 5.2, 2.55, C.teal);
  addBulletBlock(s, '企业级平台必须具备', [
    '统一权限与 SSO，支持研发数据分级隔离',
    '模型调用审计与证据链追溯',
    '多模型路由、Prompt 管理和效果评测',
    'RAG、Agent、Workflow 的统一编排能力'
  ], 6.1, 3.95, 6.55, 2.55, C.blue);
  addFooter(s, 2);
}

// Slide 3 challenge and opportunity
{
  const s = pptx.addSlide();
  s.background = { color: 'FFFFFF' };
  addHeader(s, '建设背景：研发数据、知识与决策链条的核心痛点');
  const items = [
    ['数据分散', 'LIMS、ELN、文档、网盘、项目材料、外部数据库彼此割裂，跨系统检索成本高。', C.red],
    ['知识沉没', '研究结论、方法经验、失败教训更多停留在人和文档里，无法标准化复用。', C.amber],
    ['决策低效', '立项、靶点评估、专利分析依赖人工拼接信息，速度慢且证据链不完整。', C.blue],
    ['AI 难上线', '如果缺少权限、审计、治理与评测，AI 很容易停留在 demo，无法成为生产力工具。', C.green]
  ];
  items.forEach((it, idx) => {
    const x = 0.8 + (idx%2)*6.2;
    const y = 1.55 + Math.floor(idx/2)*2.35;
    addCard(s, { x, y, w:5.55, h:1.8, accent:it[2], title:it[0], body:it[1] });
  });
  s.addShape(pptx.ShapeType.roundRect, { x:3.3, y:6.4, w:6.7, h:0.46, rectRadius:0.06, line:{ color:'D6E6F5', width:1 }, fill:{ color:'EEF6FF' } });
  s.addText('结论：齐鲁制药需要的是“企业级 AIDD 体系”，不是孤立工具；平台能力要和真实研发流程一起设计。', { x:3.48, y:6.52, w:6.3, h:0.16, fontSize:12, color:C.navy, bold:true, align:'center', margin:0 });
  addFooter(s, 3);
}

// Slide 4 blueprint architecture
{
  const s = pptx.addSlide();
  s.background = { color: C.cream };
  addHeader(s, '总体蓝图：五层架构支撑齐鲁制药 AIDD 数智化');
  const layers = [
    {y:1.45,h:0.78,title:'应用层', color:'DCEFFC', text:'文献助手 · 专利助手 · SOP 助手 · 项目问答 · 靶点情报 · 竞品分析 · 报告生成 · 研发 Copilot'},
    {y:2.4,h:0.85,title:'AI 中台', color:'D9F3F0', text:'LLM 网关 · RAG · Agent · Workflow · Prompt 管理 · 评测监控 · 多模型路由 · 成本控制'},
    {y:3.42,h:0.95,title:'知识层', color:'EAF3FF', text:'文献知识库 · 专利知识库 · 项目知识库 · 靶点/分子知识图谱 · 术语库 · 规则库 · 向量索引'},
    {y:4.58,h:1.0,title:'数据层', color:'F7F9FC', text:'LIMS · ELN · ERP · OA · 项目系统 · 文档/网盘 · PubMed · 专利库 · 公共药研数据库'},
    {y:5.82,h:0.72,title:'治理层', color:'E8EEF7', text:'SSO / 权限隔离 · 审计追踪 · 合规留痕 · 版本管理 · 数据质量 · 安全边界'}
  ];
  layers.forEach(l=>{
    s.addShape(pptx.ShapeType.roundRect, { x:1.05, y:l.y, w:11.2, h:l.h, rectRadius:0.05, line:{ color:C.border, width:1 }, fill:{ color:l.color } });
    s.addShape(pptx.ShapeType.rect, { x:1.05, y:l.y, w:1.5, h:l.h, line:{ color:C.navy, transparency:100 }, fill:{ color:C.navy } });
    s.addText(l.title, { x:1.18, y:l.y+0.23, w:1.2, h:0.25, fontSize:17, color:C.white, bold:true, align:'center', margin:0, fit:'shrink' });
    s.addText(l.text, { x:2.8, y:l.y+0.18, w:9.05, h:l.h-0.16, fontSize:12.2, color:C.text, margin:0, fit:'shrink' });
  });
  addFooter(s, 4);
}

// Slide 5 target business capability map
{
  const s = pptx.addSlide();
  s.background = { color:'FFFFFF' };
  addHeader(s, '能力地图：从“知识可得”走向“AIDD 辅助决策”');
  const cols = [
    {x:0.7,w:2.9,title:'Stage 1\n知识激活',accent:C.teal, bullets:['统一接入文献/专利/项目资料','建立企业研发问答入口','支持摘要、综述、搜索与引用']},
    {x:3.95,w:2.9,title:'Stage 2\n协同提效',accent:C.blue, bullets:['自动生成周报/月报','实验记录智能总结','跨团队项目知识复用']},
    {x:7.2,w:2.9,title:'Stage 3\n情报与洞察',accent:C.green, bullets:['靶点知识整合','竞品管线监测','立项与专利风险分析']},
    {x:10.45,w:2.15,title:'Stage 4\nAIDD 深化',accent:C.amber, bullets:['分子筛选辅助','ADMET 风险提示','实验设计与优先级建议']}
  ];
  cols.forEach(c=>{
    s.addShape(pptx.ShapeType.roundRect, { x:c.x, y:1.7, w:c.w, h:4.95, rectRadius:0.06, line:{ color:C.border, width:1 }, fill:{ color:'FFFFFF' }, shadow:{ type:'outer', color:'95A5B2', blur:2, offset:1, angle:45, opacity:0.1 } });
    s.addShape(pptx.ShapeType.rect, { x:c.x, y:1.7, w:c.w, h:0.75, line:{ color:c.accent, transparency:100 }, fill:{ color:c.accent } });
    s.addText(c.title, { x:c.x+0.12, y:1.93, w:c.w-0.24, h:0.28, fontSize:18, color:C.white, bold:true, align:'center', margin:0, fit:'shrink' });
    const runs=[]; c.bullets.forEach((b,i)=>runs.push({text:b,options:{bullet:true,breakLine:i!==c.bullets.length-1}}));
    s.addText(runs, { x:c.x+0.16, y:2.75, w:c.w-0.28, h:3.45, fontSize:12, color:C.text, paraSpaceAfterPt:12, fit:'shrink' });
  });
  addFooter(s, 5);
}

// Slide 6 priority scenarios matrix
{
  const s = pptx.addSlide();
  s.background = { color:C.cream };
  addHeader(s, '首批场景优先级：价值高、建设快、组织感知强');
  s.addShape(pptx.ShapeType.rect, { x:1.2, y:1.65, w:10.5, h:4.9, line:{ color:C.border, width:1.2 }, fill:{ color:'FFFFFF' } });
  s.addShape(pptx.ShapeType.line, { x:1.2, y:4.1, w:10.5, h:0, line:{ color:C.border, width:1 } });
  s.addShape(pptx.ShapeType.line, { x:6.45, y:1.65, w:0, h:4.9, line:{ color:C.border, width:1 } });
  s.addText('建设复杂度 →', { x:10.1, y:6.62, w:1.4, h:0.18, fontSize:10.5, color:C.subtext, margin:0 });
  s.addText('业务价值 ↑', { x:0.45, y:1.1, w:0.5, h:0.6, fontSize:10.5, color:C.subtext, rotate:270, margin:0 });
  const pts = [
    [2.3,2.55,'文献综述助手','P0',C.teal],
    [3.8,2.75,'专利情报分析','P0',C.blue],
    [4.7,5.1,'SOP 智能问答','P0',C.green],
    [5.7,4.55,'项目资料问答','P0',C.teal],
    [7.2,3.2,'靶点情报助手','P1',C.blue],
    [8.25,3.85,'竞品管线监测','P1',C.green],
    [8.8,4.65,'实验记录总结','P1',C.teal],
    [10.0,4.9,'周报/月报生成','P1',C.blue],
    [9.6,2.25,'知识图谱','P2',C.amber],
    [10.6,2.75,'分子筛选/ADMET','P2',C.red],
  ];
  pts.forEach(p=>{
    s.addShape(pptx.ShapeType.ellipse, { x:p[0], y:p[1], w:0.52, h:0.52, line:{ color:p[4], width:1 }, fill:{ color:p[4] } });
    s.addText(p[3], { x:p[0]+0.1, y:p[1]+0.15, w:0.32, h:0.12, fontSize:9.5, color:C.white, bold:true, align:'center', margin:0 });
    s.addText(p[2], { x:p[0]+0.6, y:p[1]+0.09, w:1.6, h:0.22, fontSize:11, color:C.text, margin:0, fit:'shrink' });
  });
  addPill(s, '建议首批启动：文献综述 + 专利分析 + SOP 问答 + 项目资料问答', 2.55, 6.72, 8.2, 'EAF3FF', C.navy);
  addFooter(s, 6);
}

// Slide 7 roadmap
{
  const s = pptx.addSlide();
  s.background = { color:'FFFFFF' };
  addHeader(s, '落地路线图：分三阶段推进，从试点到企业平台');
  const phases = [
    {x:0.8,w:3.9,title:'Phase 1 · 0-3个月',accent:C.teal, tags:['知识底座','试点上线'], bullets:['接入文献、SOP、项目资料','完成统一问答入口和基础权限','试点团队形成真实使用闭环']},
    {x:4.75,w:3.9,title:'Phase 2 · 3-9个月',accent:C.blue, tags:['平台化','中台化'], bullets:['建设知识中台和 AI 中台','引入专利、靶点、竞品情报场景','建立评测、监控、审计能力']},
    {x:8.7,w:3.85,title:'Phase 3 · 9-18个月',accent:C.green, tags:['AIDD深化','预测决策'], bullets:['形成靶点/分子知识图谱','引入预测模型与实验辅助分析','向 AIDD 决策支持能力扩展']}
  ];
  phases.forEach(ph=>{
    s.addShape(pptx.ShapeType.roundRect, { x:ph.x, y:1.75, w:ph.w, h:4.8, rectRadius:0.06, line:{ color:C.border, width:1 }, fill:{ color:'FFFFFF' } });
    s.addShape(pptx.ShapeType.rect, { x:ph.x, y:1.75, w:ph.w, h:0.8, line:{ color:ph.accent, transparency:100 }, fill:{ color:ph.accent } });
    s.addText(ph.title, { x:ph.x+0.16, y:2.02, w:ph.w-0.3, h:0.22, fontSize:18, color:C.white, bold:true, align:'center', margin:0 });
    addPill(s, ph.tags[0], ph.x+0.2, 2.8, 1.2, 'EAF3FF', ph.accent);
    addPill(s, ph.tags[1], ph.x+1.5, 2.8, 1.2, 'EAF3FF', ph.accent);
    const runs=[]; ph.bullets.forEach((b,i)=>runs.push({text:b,options:{bullet:true,breakLine:i!==ph.bullets.length-1}}));
    s.addText(runs, { x:ph.x+0.2, y:3.35, w:ph.w-0.35, h:2.65, fontSize:12, color:C.text, paraSpaceAfterPt:12, fit:'shrink' });
  });
  addFooter(s, 7);
}

// Slide 8 governance
{
  const s = pptx.addSlide();
  s.background = { color:C.cream };
  addHeader(s, '治理与组织：让 AI 从试用走向生产级能力');
  addBulletBlock(s, '治理红线', [
    '研发数据分级分类，敏感数据默认最小授权',
    '模型输出必须具备证据链与引用来源',
    '关键决策场景保留人工复核与审批节点',
    '所有调用行为可审计、可回放、可追责'
  ], 0.8, 1.55, 4.0, 2.6, C.red);
  addBulletBlock(s, '平台机制', [
    '统一 SSO / RBAC / 项目权限映射',
    'Prompt、模型、知识版本统一管理',
    '评测指标覆盖效果、成本、稳定性、幻觉率',
    '监控覆盖用户采纳率、问题命中率、调用时延'
  ], 4.95, 1.55, 4.0, 2.6, C.blue);
  addBulletBlock(s, '组织协同', [
    '业务 Owner：定义场景与价值目标',
    '数据 Owner：负责口径、质量、授权',
    'AI/算法团队：负责模型、RAG、Agent 与评测',
    'IT/架构团队：负责平台、集成、安全与运维'
  ], 9.1, 1.55, 3.45, 2.6, C.green);
  addCard(s, { x:1.35, y:4.55, w:10.75, h:1.4, accent:C.navy, title:'推荐组织机制', body:'设立“业务 + 数据 + AI + IT”联合治理委员会，按季度评审场景优先级、价值产出、合规风险和平台演进方向，避免部门级孤岛建设。', fill:'FFFFFF' });
  addFooter(s, 8);
}

// Slide 9 value & KPI
{
  const s = pptx.addSlide();
  s.background = { color:'FFFFFF' };
  addHeader(s, '价值闭环：用指标而不是 Demo 证明 AIDD 建设成效');
  const metrics = [
    ['检索效率', '文献/项目资料平均检索时间下降', '50%+'],
    ['知识复用', '高频研发问答可被系统命中', '60%+'],
    ['管理效率', '周报/月报制作时间压缩', '70%+'],
    ['项目决策', '立项资料准备周期缩短', '30%+'],
    ['平台质量', '有引用回答占比 / 幻觉率持续改善', '持续优化'],
    ['组织采纳', '月活用户、复用率、场景覆盖团队数', '逐季提升']
  ];
  metrics.forEach((m, idx)=>{
    const x = 0.8 + (idx%3)*4.15;
    const y = 1.7 + Math.floor(idx/3)*2.1;
    s.addShape(pptx.ShapeType.roundRect, { x, y, w:3.75, h:1.6, rectRadius:0.05, line:{ color:C.border, width:1 }, fill:{ color: idx<3 ? 'F8FBFF' : 'F7FCFB' } });
    s.addText(m[0], { x:x+0.18, y:y+0.18, w:1.5, h:0.22, fontSize:15, color:C.navy, bold:true, margin:0 });
    s.addText(m[2], { x:x+2.5, y:y+0.13, w:0.95, h:0.28, fontSize:18, color:C.teal, bold:true, align:'right', margin:0 });
    s.addText(m[1], { x:x+0.18, y:y+0.55, w:3.38, h:0.7, fontSize:11.5, color:C.subtext, fit:'shrink', margin:0 });
  });
  addCard(s, { x:0.95, y:6.05, w:11.45, h:0.72, accent:C.teal, title:'管理层关注点', body:'建议把 AI 建设成果与“效率提升、风险降低、知识沉淀、项目质量”四类 KPI 绑定，而不是只看模型数量或调用量。', fill:'EAF6FF' });
  addFooter(s, 9);
}

// Slide 10 close
{
  const s = pptx.addSlide();
  s.background = { color:C.navy };
  s.addText('结论与建议', { x:0.8, y:0.9, w:2.0, h:0.3, fontSize:18, color:'C6D8EE', bold:true, margin:0 });
  s.addText('先做知识化，\n再做智能化；\n先做高价值场景，\n再进入 AIDD 深水区。', { x:0.8, y:1.5, w:4.2, h:2.9, fontSize:28, color:C.white, bold:true, margin:0, fit:'shrink' });
  s.addText('建议齐鲁制药以“研发知识底座 + AI 中台 + 首批高价值场景”作为启动方案，在 12~18 个月内形成企业级 AIDD 能力框架。', { x:0.82, y:4.85, w:4.9, h:0.8, fontSize:15, color:'D9E5F3', margin:0, fit:'shrink' });
  // visual stack on right
  const rhs = [
    ['数据资产化', '统一接入与治理'],
    ['知识资产化', '知识库 / 图谱 / 规则'],
    ['AI 能力化', 'RAG / Agent / Workflow'],
    ['价值产品化', '面向研发与管理场景']
  ];
  rhs.forEach((r, idx)=>{
    const y = 1.25 + idx*1.2;
    s.addShape(pptx.ShapeType.roundRect, { x:7.2, y, w:4.95, h:0.85, rectRadius:0.06, line:{ color:'5E7CA5', width:1 }, fill:{ color: idx%2===0 ? '1C3D66' : '214870' } });
    s.addText(r[0], { x:7.45, y:y+0.19, w:1.7, h:0.2, fontSize:16, color:C.white, bold:true, margin:0 });
    s.addText(r[1], { x:9.15, y:y+0.2, w:2.65, h:0.18, fontSize:11.5, color:'D7E5F5', align:'right', margin:0 });
  });
  s.addText('Qilu Pharmaceutical · AIDD Transformation Proposal', { x:0.85, y:6.75, w:4.9, h:0.2, fontSize:10.5, color:'C4D2E3', italic:true, margin:0 });
  addFooter(s, 10);
}

pptx.writeFile({ fileName: './deliverables/aidd-ppt/齐鲁制药-AIDD-数智化设计蓝图.pptx' });
