# mimo-agent-coding-benchmark

本项目用于验证 MiMo 系列模型在 AI Agent 编程场景中的表现，重点关注中文需求理解、代码生成、Bug 修复、测试用例生成和文档生成能力。

## 当前进展

已完成第一轮基础任务设计与初步验证，测试内容包括：

- 中文需求理解
- 功能模块拆解
- 前端页面生成
- 代码解释与 README 生成
- Bug 修复建议

## 使用工具

- OpenClaw
- Claude Code
- Codex
- Cursor

## 测试模型

- MiMo
- GPT
- Claude
- Gemini
- DeepSeek

## 第一轮测试任务

任务：根据中文需求生成一个简单 Todo Web App。

核心需求：

- 添加待办事项
- 删除待办事项
- 标记完成状态
- 本地保存数据
- 生成基础 README 文档

## 评测维度

- 中文需求理解
- 代码可运行性
- 功能完整度
- 修改轮次
- 文档生成质量
- Token 消耗估算

## 后续计划

- 补充更多真实开发任务
- 对比不同模型的输出质量
- 记录 Agent 多轮修改过程
- 输出 MiMo 在中文 Agent 编程场景下的体验报告

## Demo 运行方式

第一轮测试 Demo 位于：

```text
demo/todo-app/

运行方式：

下载或克隆仓库；
打开 demo/todo-app/index.html；
在浏览器中测试添加、删除、完成状态和本地保存功能。

该 Demo 用于验证 AI Agent 是否能够根据中文需求生成可运行的前端小工具。
