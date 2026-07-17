# AI 密钥配置 / AI Key Configuration

### 中文

## 入口

**设置 → AI 设置**

## 前提

必须先开启 **启用 AI 功能**，否则 AI 相关设置不可用。

## 双配置文件

RSSFlow Pro 提供两套独立的 AI 配置：

| 配置 | 中文名 | 用途 | 默认 Max Tokens |
|------|--------|------|-----------------|
| Basic Model | 默认模型 | 轻量任务：摘要、评分、标签 | 8192 |
| Advanced Model | 复杂模型（可选） | 深度任务：聊天、定时任务、热点发现 | 20000 |

若未配置复杂模型，可点击 **从默认模型复制**，一键同步默认模型配置。

## 支持的供应商

| 供应商 | 代码标识 | 默认 Host |
|--------|----------|-----------|
| DeepSeek | `deepseek` | `https://api.deepseek.com` |
| OpenAI | `openai` | `https://api.openai.com` |
| OpenAI Compatible | `openai-compatible` | `https://api.siliconflow.cn` |
| Anthropic Claude | `anthropic` | `https://api.anthropic.com` |
| Google Gemini | `gemini` | `https://generativelanguage.googleapis.com` |
| Local LLM (Ollama / LM Studio) | `local` | `http://localhost:11434` |

## 配置步骤

1. **选择供应商**：在供应商网格中点击图标。
2. **填写 API Key**：按供应商要求输入密钥（密码输入框）。
3. **填写 API Host**（可选）：默认使用官方地址，可改为兼容中转。
4. **填写模型名称**：手动输入，或点击输入框旁按钮拉取模型列表后选择。
5. **高级参数**（可选）：展开 **显示生成参数**，调整 Temperature（默认 0.7）、Top P（默认 0.9）、Max Tokens。
6. **验证并暂存**：点击 **验证并暂存配置**，后台发送测试请求。
7. **设为当前启用**：验证成功后点击 **设为当前启用供应商**，配置才会真正生效。

> 仅「验证并暂存」不会生效；必须再点 **设为当前启用**。

## 本地模型配置

选择 Local LLM 后，API Host 下方会显示 **Ollama 跨域配置指引**：

- **Ollama（桌面版）**：设置环境变量 `OLLAMA_ORIGINS=chrome-extension://*`
- **Ollama（命令行）**
  - PowerShell：`$env:OLLAMA_ORIGINS="chrome-extension://*"; ollama serve`
  - CMD：`set OLLAMA_ORIGINS=chrome-extension://* && ollama serve`
- **LM Studio**：在设置中开启跨域访问

## 标签范围设置

在 AI 设置页底部可自定义文章分类标签范围。  
该范围直接影响基础摘要的标签分类，请按自己的阅读领域填写。

默认值示例：

`#Chinese Economy, #US economy, #EU economy, #UK economy, #Japan economy, #AI, #Business, #Gold, #Oil, #Crypto, #Technology, #Culture, #Other`

支持内置标签浏览器快速选择，以及 **恢复默认**。

### English

## Access

**Settings → AI Settings**

## Prerequisite

Turn on **Enable AI Features** first; otherwise AI settings stay locked.

## Dual Profiles

| Profile | Usage | Default Max Tokens |
|---------|-------|-------------------|
| Basic Model (Default) | Light tasks: summaries, scoring, tags | 8192 |
| Advanced Model (Optional) | Heavy tasks: chat, automation, discovery | 20000 |

If Advanced is empty, use **Copy from Default Model** to sync Basic settings.

## Supported Providers

| Provider | ID | Default Host |
|----------|----|-------------|
| DeepSeek | `deepseek` | `https://api.deepseek.com` |
| OpenAI | `openai` | `https://api.openai.com` |
| OpenAI Compatible | `openai-compatible` | `https://api.siliconflow.cn` |
| Anthropic Claude | `anthropic` | `https://api.anthropic.com` |
| Google Gemini | `gemini` | `https://generativelanguage.googleapis.com` |
| Local LLM (Ollama / LM Studio) | `local` | `http://localhost:11434` |

## Configuration Steps

1. **Select Provider** — click an icon in the grid.
2. **Enter API Key** — password field.
3. **Enter API Host** (optional) — defaults to the official endpoint.
4. **Enter Model Name** — type manually, or fetch the provider list.
5. **Advanced Parameters** (optional) — Temperature (0.7), Top P (0.9), Max Tokens.
6. **Validate & Stash** — runs a backend connectivity test.
7. **Set as Active** — only then does the profile take effect.

> Stashing alone is not enough; you must click **Set as Active Provider**.

## Local Model Setup

After choosing Local LLM, follow the CORS guide under API Host:

- **Ollama (Desktop)**: `OLLAMA_ORIGINS=chrome-extension://*`
- **Ollama (CLI)**: PowerShell or CMD commands shown above
- **LM Studio**: enable CORS in settings

## Tag Scope

At the bottom of AI Settings, customize classification tags used by basic summaries. Use the built-in browser to pick tags or restore defaults.
