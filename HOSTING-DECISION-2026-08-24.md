# 学生雷达托管决策（2026-08-24）

## 结论

- Web 小范围内测：Railway Free/Trial + 0.5 GB Volume。
- 微信小程序与真实收费：腾讯 CloudBase + 数据库 + 微信身份。
- 暂不选 Render Free：免费 Web Service 的文件系统是临时的，且免费实例不能挂持久化磁盘，会破坏订单恢复。

## 为什么分两阶段

Railway 能直接运行当前 `/api` Dockerfile，并通过 Volume 保存 JSON 数据，最适合快速验证 10—30 名学生是否真的愿意使用。当前官方 Free 方案每月提供少量免费资源，Volume 上限足够内测；若升级 Hobby，官方标价为每月 5 美元且包含等额资源用量。

CloudBase 更符合最终方向：官方提供云托管、数据库、微信身份认证、静态托管和 HTTP 访问入口。但它不适合继续依赖容器本地 JSON，因此应在确认需求后再迁移数据库，避免现在过度开发。

## 成本纪律

- 第一阶段只开模拟 AI、模拟支付，不配置 OpenAI 密钥。
- 不主动升级付费套餐，不绑定自动扩容预算。
- 真实 AI 前先设置 OpenAI 项目限额；真实支付前先完成登录和数据库迁移。

## 官方来源

- Railway 方案与价格：https://docs.railway.com/pricing/plans
- Railway Volume：https://docs.railway.com/volumes
- Render 免费限制：https://render.com/docs/free
- CloudBase 能力：https://cloud.tencent.com/document/product/876/18431
- CloudBase 云托管：https://cloud.tencent.com/document/product/876/121989


