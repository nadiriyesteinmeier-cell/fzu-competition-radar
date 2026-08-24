# 部署清单

当前后端已经可以装入任意支持 Docker 的 HTTPS 服务，但在真正部署前必须完成以下事项。

## 必填环境变量

- `OPENAI_API_KEY`：只在托管平台的 Secret 管理中填写。
- `ALLOWED_ORIGINS=https://nadiriyesteinmeier-cell.github.io`
- `API_HOST=0.0.0.0`
- `API_PORT=8787`（如果平台自动注入端口，以平台值为准）。
- `DATA_DIR=/app/data` 或托管平台提供的持久化磁盘目录。
- `ENABLE_MOCK_PAYMENT=false`
- `AI_MOCK_MODE=false`

## 上线门槛

1. 绑定 HTTPS 域名，GitHub Pages 不调用 HTTP 后端。
2. 使用数据库替代单机 JSON 订单文件，至少保证订单写入具有事务性。
3. 使用登录态或微信 `openid` 替代浏览器随机 `clientId`。
4. 用微信支付服务端回调替代 `/mock-pay`；回调必须验签，商品价格必须以服务端为准。
5. 增加退款、投诉、订单查询和生成失败后的权益恢复。
6. 在托管平台设置月度预算告警，并保持模拟支付关闭。
7. 将线上 API 地址写入前端运行配置后再发布。

没有完成第 2—4 项时，只能作为小范围内测，不能向陌生用户真实收费。

