// AI 자원순환 탐정단 - 공통 점수/탐정 등급 업그레이드 헬퍼
(function (global) {
  const RANKS = [
    { level: 6, min: 700, next: null, title: "전설의 마스터 탐정단", icon: "👑" },
    { level: 5, min: 500, next: 700, title: "수석 탐정단", icon: "🏆" },
    { level: 4, min: 350, next: 500, title: "베테랑 탐정단", icon: "🛡️" },
    { level: 3, min: 200, next: 350, title: "정식 탐정단", icon: "⭐" },
    { level: 2, min: 100, next: 200, title: "견습 탐정단", icon: "🔍" },
    { level: 1, min: 0, next: 100, title: "신입 탐정단", icon: "🌱" }
  ];

  function getDetectiveRank(score) {
    const num = Math.max(0, parseInt(score, 10) || 0);
    for (let i = 0; i < RANKS.length; i++) {
      if (num >= RANKS[i].min) {
        return RANKS[i];
      }
    }
    return RANKS[RANKS.length - 1];
  }

  function formatDetectiveBadge(score) {
    const r = getDetectiveRank(score);
    return `${r.icon} Lv.${r.level} ${r.title}`;
  }

  function updateLocalScoreAndRank(score) {
    const num = Math.max(0, parseInt(score, 10) || 0);
    const rank = getDetectiveRank(num);
    try {
      localStorage.setItem("elementary_score", String(num));
      localStorage.setItem("studentExp", String(num));
      localStorage.setItem("elementary_badge", rank.title);
    } catch (e) { }
    return rank;
  }

  global.getDetectiveRank = getDetectiveRank;
  global.formatDetectiveBadge = formatDetectiveBadge;
  global.updateLocalScoreAndRank = updateLocalScoreAndRank;
})(window);
