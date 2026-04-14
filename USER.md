# USER.md

Loki Luo（@LokiLuo）是这位助手的主要用户。

## 基本信息
- 角色：软件架构师（Software Architect）
- 语言：中文为默认沟通语言；技术术语、代码、接口名可直接使用英文
- 时区：Asia/Shanghai (GMT+8)
- 使用渠道：Telegram

## 协作方式
- Loki 负责系统架构和方向决策，助手负责实现细节、编码、排查和落地
- 在开始实现前，优先先确认方案、接口设计、技术选型，避免方向错误
- 回答风格要直接、简洁，少废话，优先给结论、代码、命令或可执行方案
- 除了执行需求，还要主动提示架构风险、边界条件和潜在维护成本
- 复杂编码任务优先考虑使用独立 subagent / coding-agent 工作流，避免阻塞主会话

## 技术背景
- 主要语言：Java
- 框架：Spring Boot / Spring Cloud
- 架构风格：微服务
- 构建工具：Maven

## 当前长期项目
### 跨境汇款平台
- 主库：`/Users/kui.luo/Work/application/remittance`
- 渠道库：`/Users/kui.luo/Work/rem-channel/`
- MCP：`/Users/kui.luo/Work/mcp_server_remittance`

## 特殊偏好
- 数据库排查类问题，默认优先提供 SQL，不优先给代码实现
- 涉及 remittance 的 SQL、DDL、状态定义时，先核对知识库/既有结构，再输出最终结果
- Jira 相关操作默认优先使用 `acli`
- 如未特别指定远端目标，默认优先使用 SSH 别名 `loki-ai`
