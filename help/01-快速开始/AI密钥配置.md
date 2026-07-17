# AI 密钥配置

## 入口

设置 → AI 设置。

## 前提

必须先开启"AI 功能"开关（“启用 AI 功能”开关），否则 AI 相关设置不可用。

## 双配置文件

RSSFlow Pro 提供两个独立的 AI 配置文件：

| 配置 | 中文 | 用途 | 默认 Max Tokens |
|------|------|------|-----------------|
| Basic Model | 默认模型 | 轻量任务：摘要生成、文章评分、标签提取 | 8192 |
| Advanced Model | 复杂模型（可选） | 深度任务：AI 聊天、定时任务、热点发现和洞察 | 20000 |

如果 Advanced Model 未配置，可点击"从默认模型复制"一键同步 Basic 配置。

## 支持的供应商


| 供应商 | 代码标识 | 默认 Host |
|--------|----------|-----------|
| DeepSeek | `deepseek` | `https://api.deepseek.com` |
| OpenAI | `openai` | `https://api.openai.com` |
| OpenAI Compatible | `openai-compatible` | `https://api.siliconflow.cn` |
| Anthropic Claude | `anthropic` | `https://api.anthropic.com` |
| Google Gemini | `gemini` | `https://generativelanguage.googleapis.com` |
| Local LLM (Ollama/LM Studio) | `local` | `http://localhost:11434` |

## 配置步骤

1. **选择供应商**：点击供应商网格中的图标
2. **填写 API Key**：根据供应商要求输入密钥（password 输入框）
3. **填写 API Host**（可选）：默认使用供应商的官方地址，可自定义
4. **填写模型名称**：手动输入模型名称（也可点击输入框可拉取模型列表，点击右侧按钮手动拉取
5. **高级参数**（可选）：点击"显示生成参数"展开 Temperature（默认 0.7）、Top P（默认 0.9）、Max Tokens 滑块
6. **验证并暂存**：点击"验证并暂存配置"，后台发送测试请求验证配置有效性---注意只有点击启用才最终生效
7. **设为当前启用**：验证成功后点击"设为当前启用供应商"使配置生效

## 本地模型配置

选择 Local LLM 后，API Host 输入框下方会显示"Ollama 跨域配置指引"，包含三种方法：

- **Ollama (Desktop)**：设置环境变量 `OLLAMA_ORIGINS=chrome-extension://*`
- **Ollama (CLI)**：在命令行中运行 `$env:OLLAMA_ORIGINS="chrome-extension://*"; ollama serve`（PowerShell）或 `set OLLAMA_ORIGINS=chrome-extension://* && ollama serve`（CMD）
- **LM Studio**：在设置中勾选 跨域访问 选项

## 标签范围设置

在 AI 设置页底部，可自定义文章分类标签范围，这个特别重要，涉及到到基础摘要的标签分类，用户根据自己的内容和标签设定自行按规范填写（`tagEnumerationValues`）。默认值：`#Chinese Economy, #US economy, #EU economy, #UK economy, #Japan economy, #AI, #Business, #Gold, #Oil, #Crypto, #Technology, #Culture, #Other`。支持内置标签浏览器快速选择和恢复默认。

---

# AI Key Configuration

## Access

Settings → AI Settings.

## Prerequisite

The "AI Function" toggle must be enabled first, otherwise AI settings are unavailable.

## Dual Profiles

RSSFlow Pro provides two independent AI profiles:

| Profile | Usage | Default Max Tokens |
|---------|-------|-------------------|
| Basic Model (Default) | Light tasks: summaries, scoring, tags | 8192 |
| Advanced Model (Optional) | Heavy tasks: chat, automation, discovery | 20000 |

If Advanced is not configured, click "Copy from Default Model" to sync Basic settings.

## Supported Providers

| Provider | ID | Default Host |
|----------|----|-------------|
| DeepSeek | `deepseek` | `https://api.deepseek.com` |
| OpenAI | `openai` | `https://api.openai.com` |
| OpenAI Compatible | `openai-compatible` | `https://api.siliconflow.cn` |
| Anthropic Claude | `anthropic` | `https://api.anthropic.com` |
| Google Gemini | `gemini` | `https://generativelanguage.googleapis.com` |
| Local LLM (Ollama/LM Studio) | `local` | `http://localhost:11434` |

## Configuration Steps

1. **Select Provider**: Click a provider icon in the grid
2. **Enter API Key**: Input the key in the password field per provider requirements
3. **Enter API Host** (optional): Custom host, defaults to official endpoint
4. **Enter Model Name**: Manually enter the model name (you can also click the input field to select from the auto-suggest list, or click the right-side button to fetch manually)
5. **Advanced Parameters** (optional): Click "Show Generation Parameters" to reveal Temperature (default 0.7), Top P (default 0.9), Max Tokens sliders
6. **Validate & Stash**: Click "Validate & Save Config" to test the configuration via backend request --- Note: It only takes effect after clicking Enable.
7. **Set as Active**: After validation, click "Set as Active Provider" to activate

## Local Model Setup

After selecting Local LLM, an "Ollama CORS Setup Guide" appears below the API Host input with three methods:

- **Ollama (Desktop)**: Set environment variable `OLLAMA_ORIGINS=chrome-extension://*`
- **Ollama (CLI)**: Run `$env:OLLAMA_ORIGINS="chrome-extension://*"; ollama serve` (PowerShell) or `set OLLAMA_ORIGINS=chrome-extension://* && ollama serve` (CMD)
- **LM Studio**: Enable CORS option in settings

## Tag Scope

At the bottom of AI Settings, you can customize the article classification tags. This is extremely important as it affects the tag categories of basic summaries. Configure it according to your own content and tags preferences. Default: `#Chinese Economy, #US economy, #EU economy, #UK economy, #Japan economy, #AI, #Business, #Gold, #Oil, #Crypto, #Technology, #Culture, #Other`. Use the built-in tag browser for quick selection and restore defaults.
