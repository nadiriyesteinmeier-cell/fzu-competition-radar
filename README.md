# 福大竞赛雷达

面向大学生的信息雷达验证版。当前包含竞赛雷达与论文雷达：竞赛页支持筛选、收藏和 `.ics` 日历导出；论文页每天自动更新数字媒体相关领域的最新公开元数据。

在线体验：https://nadiriyesteinmeier-cell.github.io/fzu-competition-radar/

论文雷达：https://nadiriyesteinmeier-cell.github.io/fzu-competition-radar/papers.html

## 本地预览

直接打开 `index.html` 可以使用主要功能。要测试安装和离线访问，请在此目录启动任意静态文件服务器，通过 `http://localhost` 访问。

## 数据维护

赛事数据位于 `data/events.js`。每条记录必须包含公开原文、核验日期和明确的时间节点；全国截止与校内截止不得混写。

论文数据由 `scripts/update_papers.py` 获取，GitHub Actions 每天运行一次。只保存描述性元数据，不下载或重新托管论文 PDF。

## 当前边界

- 不代理官方报名
- 不收集账号、学号或参赛作品
- 不自动生成参赛作品
- 不是福州大学或赛事主办方的官方平台

