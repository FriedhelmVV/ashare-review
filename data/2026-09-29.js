window.RV_DAY={
  "schemaVersion": 1,
  "date": "2026-09-29",
  "generatedAt": "2026-10-02T04:28:14.785Z",
  "source": {
    "name": "同花顺 iFinD"
  },
  "warnings": [
    "2026-09-29 涨停股名单未取到：iFinD search_stocks 账号当日请求次数已达上限（接口原文「已经达到用户账号权益下该工具请求次数上限」），且本地无该日 CSV → sentiment.limitUpCount / limitUpAmount / streakDist / maxStreak、stocks.ladder 均为 null/空。",
    "2026-09-29 跌停股、炸板股未取到：同样受 search_stocks 额度限制 → sentiment.limitDownCount、brokenCount、brokenRate 为 null。",
    "2026-09-29 晋级率无法计算：缺少当日与前一交易日(2026-09-28)的涨停名单。",
    "2026-09-29 index.prevAmount 未取到：2026-09-28 指数成交额查询返回「查询结果为空」→ amountDeltaPct 为 null。",
    "2026-09-29 平盘家数未取到：iFinD 未返回该指标。",
    "说明：该日指数行情取自 index_data 单次成功返回；此前多次问法均遇到 HTTP 429，故指数数据仅此一份快照。"
  ],
  "index": {
    "items": [
      {
        "code": "000001.SH",
        "name": "上证指数",
        "close": 3830.4513,
        "pct": 0.1786,
        "amount": 6617.04
      },
      {
        "code": "399001.SZ",
        "name": "深证成指",
        "close": 12901.9474,
        "pct": 0.3359,
        "amount": 7474.93
      },
      {
        "code": "399006.SZ",
        "name": "创业板指",
        "close": 3142.563,
        "pct": 0.0872,
        "amount": 3590.56
      },
      {
        "code": "000688.SH",
        "name": "科创50",
        "close": 1569.3384,
        "pct": 0.8585,
        "amount": 645.3
      },
      {
        "code": "000852.SH",
        "name": "中证1000",
        "close": 7325.3515,
        "pct": 0.4274,
        "amount": 2689.51
      },
      {
        "code": "899050.BJ",
        "name": "北证50",
        "close": 1032.364,
        "pct": 0.5648,
        "amount": 125.26
      }
    ],
    "totalAmount": 14091.97,
    "prevAmount": null,
    "amountDeltaPct": null,
    "breadth": {
      "up": 3281,
      "down": 1780,
      "flat": null,
      "total": 5061
    }
  },
  "sentiment": {
    "limitUpCount": null,
    "limitDownCount": null,
    "brokenCount": null,
    "brokenRate": null,
    "maxStreak": null,
    "streakDist": {},
    "limitUpAmount": null,
    "promotion": {
      "1to2": null,
      "2to3": null,
      "3to4": null,
      "highToHigh": null,
      "overall": null
    },
    "prevLimitUpCount": null,
    "scoreOverride": null,
    "phaseOverride": null
  },
  "themes": [],
  "stocks": {
    "ladder": [],
    "topAmount": [],
    "broken": [],
    "limitDown": [],
    "watchlist": []
  },
  "news": {
    "items": [
      {
        "title": "2026年9月30日涨停板复盘 Limit-Up Board",
        "source": null,
        "time": "1970-01-01",
        "heat": null,
        "url": "https://market.weidn.com/cn/market/",
        "tag": "产业",
        "note": ""
      },
      {
        "title": "美容护理板块震荡反弹 拉芳家化封涨停",
        "source": null,
        "time": "2026-09-29",
        "heat": null,
        "url": "https://www.gelonghui.com/live/2693110",
        "tag": "产业",
        "note": ""
      },
      {
        "title": "三重利空砸出黄金坑？深度复盘9·28大跌，谁才是震荡市中真正的\"避风港\"",
        "source": null,
        "time": "2026-09-29",
        "heat": null,
        "url": "https://aigc.ylaigc.com/yly-boot/saas/common/previewConsultingById?id=6236345",
        "tag": "海外",
        "note": ""
      },
      {
        "title": "A股地产股强势，万科A涨停",
        "source": null,
        "time": "2026-09-29",
        "heat": null,
        "url": "https://www.gelonghui.com/live/2692962",
        "tag": "产业",
        "note": ""
      },
      {
        "title": "A股电力股活跃，宁波能源、浙江新能双双涨停",
        "source": null,
        "time": "2026-09-29",
        "heat": null,
        "url": "https://www.gelonghui.com/live/2692918",
        "tag": "产业",
        "note": ""
      },
      {
        "title": "A股PCB概念震荡反弹 依顿电子涨停",
        "source": null,
        "time": "2026-09-29",
        "heat": null,
        "url": "https://www.gelonghui.com/live/2692924",
        "tag": "产业",
        "note": ""
      },
      {
        "title": "【博时市场点评9月29日】指数震荡收红，房地产板块领涨",
        "source": null,
        "time": "2026-09-29",
        "heat": null,
        "url": "https://aigc.ylaigc.com/yly-boot/saas/common/previewConsultingById?id=6236524",
        "tag": "产业",
        "note": ""
      },
      {
        "title": "AI漫剧概念震荡反弹 掌阅科技涨停",
        "source": null,
        "time": "2026-09-29",
        "heat": null,
        "url": "https://www.gelonghui.com/live/2692952",
        "tag": "产业",
        "note": ""
      },
      {
        "title": "A股电池股高开，时代万恒涨停",
        "source": null,
        "time": "2026-09-29",
        "heat": null,
        "url": "https://www.gelonghui.com/live/2692904",
        "tag": "产业",
        "note": ""
      },
      {
        "title": "9月28日美股三大指数集体收跌，芯片股重挫丨美股复盘",
        "source": null,
        "time": "2026-09-29",
        "heat": null,
        "url": "https://m.21jingji.com/article/20260929/herald/ed5d4dcd1d19a5e72240da3c15573c82_zaker.html",
        "tag": "海外",
        "note": ""
      },
      {
        "title": "连板股追踪丨A股今日共57只个股涨停 这只传媒股6连板",
        "source": null,
        "time": "2026-09-29",
        "heat": null,
        "url": "https://www.yicai.com/brief/103381343.html",
        "tag": "产业",
        "note": ""
      },
      {
        "title": "A股午评：缩量上涨，超4000股上涨，固态电池、房地产股强势",
        "source": null,
        "time": "2026-09-29",
        "heat": null,
        "url": "https://www.gelonghui.com/live/2693012",
        "tag": "产业",
        "note": ""
      },
      {
        "title": "6连板新华传媒：公司股票复牌后累计涨幅77.21% 可能存在非理性炒作等情形",
        "source": null,
        "time": "2026-09-29",
        "heat": null,
        "url": "https://www.yicai.com/brief/103381463.html",
        "tag": "产业",
        "note": ""
      },
      {
        "title": "9月29日投资避雷针：3连板人气股提示风险 玻璃基板相关设备尚处于研发阶段",
        "source": null,
        "time": "2026-09-29",
        "heat": null,
        "url": "http://3g.cnfol.com/sc_stock/shichangceping/20260929/32383472.shtml",
        "tag": "产业",
        "note": ""
      },
      {
        "title": "A股分散染料概念再度活跃 善水科技20cm2连板",
        "source": null,
        "time": "2026-09-29",
        "heat": null,
        "url": "https://www.gelonghui.com/live/2692941",
        "tag": "产业",
        "note": ""
      }
    ]
  },
  "review": {
    "summary": "",
    "plan": "",
    "risks": "",
    "mood": null
  }
};
