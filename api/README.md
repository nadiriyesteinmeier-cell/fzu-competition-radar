# 学生雷达 AI API

论文付费功能的本地后端原型。密钥从工作区根目录 `.env.local` 读取，不会发送到浏览器或提交到 Git。

## 启动

```powershell
cd E:\ChatGPTProjects\赚钱\student-radar-api
npm start
```

健康检查：`http://127.0.0.1:8787/health`

默认使用 `gpt-5-mini`，每天最多 20 个未命中缓存的请求，单篇摘要最多 12000 字符。相同论文、服务类型和摘要会直接复用本地缓存。

## 订单状态机

1. `GET /api/products` 获取服务端商品与价格。
2. `POST /api/orders` 创建 `pending_payment` 订单。
3. 本地开发调用 `POST /api/orders/:id/mock-pay`，以后由微信支付回调替代。
4. 只有 `paid` 订单才能调用 `POST /api/orders/:id/generate`。
5. 生成成功后订单变成 `completed`，重复请求直接返回原结果。
6. `GET /api/orders?clientId=...` 返回当前设备最近 30 个订单，用于恢复被清掉的本地精读列表。

## Web 内测账号

- `POST /api/auth/register`：邮箱、8—72 字符密码和昵称注册，返回一次会话令牌。
- `POST /api/auth/login`、`POST /api/auth/logout`、`GET /api/auth/me`：登录、退出和恢复会话。
- `PUT /api/me/profile`：登录后同步昵称、学校、专业、年级和英文沟通偏好。
- `PUT /api/me/password`：校验当前密码后更新密码，并撤销该账号的其他全部会话。
- `DELETE /api/me`：再次校验密码后永久删除账号、会话、同步档案和账号订单。
- 登录请求通过 `Authorization: Bearer <token>` 访问账号订单；未登录时仍兼容随机设备 `clientId`。

账号档案中的院校状态默认是“平台未认证”。当前不收集学号、学生证或学校密码，也没有开放人工认证；该账号系统只用于 Web 内测和跨设备恢复，不能直接视为微信小程序正式身份体系。

运行 `npm test` 会在隔离的临时目录中验证商品、订单、未支付拦截、模拟支付、权益、生成幂等和订单归属。测试使用 `AI_MOCK_MODE=true`，不会调用模型或产生费用。

当前只分析 arXiv 元数据中的作者摘要，不下载论文 PDF，不声称核验了全文。部署前仍需增加用户登录、数据库、支付回调、持久化限流和 HTTPS 域名。

`clientId` 只是当前原型的随机设备标识，不是登录凭证，也不支持跨设备同步。真实收费前必须替换为微信登录/OpenID 或其他可靠会话，不能把设备标识当成正式鉴权。

四类商品使用独立的服务端结构化输出合同：快速简析只交付问题、方法、结果与阅读价值；创新点提取只交付创新候选、摘要内证据和核验问题；深度解读增加局限与复现准备；中文阅读版交付摘要翻译、术语和难句说明。前端不能通过修改商品编号获得其他商品字段，缓存也按合同版本与商品隔离。

如果接口返回“AI账户尚未开通API计费”，需要在 OpenAI Platform 的 Billing Overview 中购买预付费额度。建议测试阶段关闭自动充值，并同时设置项目用量上限。

`Dockerfile` 可用于部署到支持容器的服务；生产容器默认关闭模拟支付。完整上线门槛见 `DEPLOYMENT.md`，安全边界见 `SECURITY.md`。

Web 内测的逐项部署步骤见 `DEPLOY-RAILWAY.md`；微信小程序阶段的数据库与身份迁移见 `CLOUDBASE-MIGRATION.md`。服务会优先读取 `API_PORT`，未设置时读取云平台注入的 `PORT`。

