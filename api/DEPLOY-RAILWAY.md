# Railway 无费用模拟内测

目标是先让 GitHub Pages 调用公网 API，验证订单、恢复和移动端体验。这个阶段使用模拟 AI、模拟支付，不需要填写 OpenAI 密钥，也不会收学生的钱。

## 创建服务

1. 使用 GitHub 登录 Railway，并授权仓库 `fzu-competition-radar`。
2. 新建项目并选择该仓库。
3. 把服务的 Root Directory 设置为 `/api`。Railway 会在该目录识别 `Dockerfile`。
4. 生成一个公开域名，区域优先选择 Singapore。
5. Healthcheck Path 设置为 `/health`。Railway 会自动注入 `PORT`，程序已经兼容。

## 持久化

给 API 服务添加一个 Volume，挂载到 `/app/data`。不挂载时，订单和缓存会在重新部署后丢失。

## 环境变量

从 `.env.railway.example` 复制公开配置。第一轮保持：

- `AI_MOCK_MODE=true`
- `ENABLE_MOCK_PAYMENT=true`
- 不设置 `OPENAI_API_KEY`

部署完成后访问 `https://你的域名/health`，应看到 `aiReady:true`、`aiMode:"mock"`、`keyConfigured:false`。

## 连接网页

把 `competition-radar/config.js` 中的 `apiBase` 改为 Railway 的 HTTPS 域名，然后发布。不要把任何密钥写入该文件。

## 切换真实 AI

只有 OpenAI API 计费开通后才执行：

1. 在 Railway Variables 中新增 Secret `OPENAI_API_KEY`。
2. 把 `AI_MOCK_MODE` 改为 `false`。
3. 暂时继续保留 `ENABLE_MOCK_PAYMENT=true`，直到真实支付回调和用户登录完成。

## 当前限制

- `clientId` 只是匿名设备标识，不是账户。
- JSON 文件只适合 10—30 人内测；收费前迁移数据库。
- Railway 的海外节点适合 Web MVP，不作为微信小程序在中国大陆长期上线方案。

官方依据：

- https://docs.railway.com/deployments/monorepo
- https://docs.railway.com/deployments/healthchecks
- https://docs.railway.com/volumes
- https://docs.railway.com/pricing/plans


