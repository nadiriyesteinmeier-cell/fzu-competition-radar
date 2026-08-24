# CloudBase 微信阶段迁移清单

CloudBase 作为第二阶段目标，而不是现在就迁移。它的云托管支持 Docker/Node.js、按流量缩容，并与微信登录、数据库、云存储在同一平台。

## 什么时候迁移

满足以下任一条件时开始：

- 决定申请微信小程序并需要 OpenID 登录；
- 内测用户超过 30 人；
- 准备接入真实支付；
- 订单需要跨设备同步。

## 必做改造

1. 将 `orders.json`、用量账本和权益改存 CloudBase 数据库。
2. 以服务端校验的微信 OpenID 替代随机 `clientId`。
3. 接入微信支付回调验签、退款与重复通知幂等。
4. 把模型调用放在云托管服务端，密钥进入 Secret 管理。
5. 配置 HTTP 访问服务、HTTPS 域名、跨域白名单和日志告警。
6. 完成小程序主体认证、备案与隐私说明后才向陌生用户收费。

## 现有资产可复用

- `Dockerfile` 与 Node API 路由可继续使用。
- 商品合同、订单状态机和结构化 AI 输出无需重写。
- 前端只需修改 `config.js` 的 API 地址。

本地文件不能作为 CloudBase 云托管的正式数据库；容器会扩缩容，订单必须迁出容器文件系统。

官方依据：

- https://cloud.tencent.com/document/product/876/121989
- https://cloud.tencent.com/document/product/876/18431
- https://cloud.tencent.com/document/product/1243/49230


