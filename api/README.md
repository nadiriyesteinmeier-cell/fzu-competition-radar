# 学生雷达 AI API

论文付费功能的本地后端原型。密钥从工作区根目录 `.env.local` 读取，不会发送到浏览器或提交到 Git。

## 启动

```powershell
cd E:\ChatGPTProjects\赚钱\student-radar-api
npm start
```

健康检查：`http://127.0.0.1:8787/health`

默认使用 `gpt-5-mini`，每天最多 20 个未命中缓存的请求，单篇摘要最多 12000 字符。相同论文、服务类型和摘要会直接复用本地缓存。

当前只分析 arXiv 元数据中的作者摘要，不下载论文 PDF，不声称核验了全文。部署前仍需增加用户登录、数据库、支付回调、持久化限流和 HTTPS 域名。

如果接口返回“AI账户尚未开通API计费”，需要在 OpenAI Platform 的 Billing Overview 中购买预付费额度。建议测试阶段关闭自动充值，并同时设置项目用量上限。

