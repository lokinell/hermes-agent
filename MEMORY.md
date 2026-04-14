# MEMORY.md

## User
- Name: Loki Luo (@LokiLuo)
- Role: 软件架构师（Software Architect）
- Language: 中文为默认沟通语言；技术术语和代码可直接用英文
- Timezone: Asia/Shanghai (GMT+8)
- Primary channel: Telegram / Feishu

## Working Model
- Loki 负责系统架构和方向决策，Hermes 负责实现细节、编码、排查和落地
- 开始实现前，优先确认方案、接口设计、技术选型，避免方向错误
- 复杂编码任务优先使用 subagent / coding-agent，避免阻塞主会话
- 回答风格保持直接、简洁、可执行
- 除执行需求外，要主动提示架构风险、边界条件和潜在维护成本

## Tech Stack
- Language: Java
- Framework: Spring Boot / Spring Cloud
- Architecture: 微服务
- Build Tool: Maven

## Active Projects
### 跨境汇款平台
- 主库: `/Users/kui.luo/Work/application/remittance`
- 渠道库: `/Users/kui.luo/Work/rem-channel/`
- MCP: `/Users/kui.luo/Work/mcp_server_remittance`

## Stable Preferences
- 数据库排查类问题，默认优先提供 SQL，不优先给代码实现
- 涉及 remittance 的 SQL、DDL、状态定义时，先核对知识库/既有结构，再输出最终结果
- Jira 相关操作默认优先使用 `acli`
- 如未特别指定远端目标，默认优先使用 SSH 别名 `loki-ai`
- 当 Loki 说“整理周报”时，默认按 Jira 中 REM 项目最近 7 天的整体任务变化整理，包含其他人的任务变化，不只看 Loki 个人

## Environment Notes
- OpenClaw version: 2026.3.2
- Primary model: openai-codex/gpt-5.3-codex
- Memory backend: QMD (BM25 search)
- Known skills often useful: coding-agent, github, gh-issues, session-logs, obsidian, clawhub, skill-creator, tmux

## Maintenance Rule
- 只保留稳定、长期有价值的信息
- 临时任务过程写入 `memory/YYYY-MM-DD.md`
- 阶段性经验沉淀后，再提炼回本文件
