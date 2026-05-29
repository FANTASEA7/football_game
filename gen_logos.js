const fs = require('fs');

const teams = {
  'chongqing-tonglianglong':{n:'重庆铜梁龙',c:'#6A2C3E',l:'CL'},
  'guangxi-pingguo-haliao':{n:'广西平果哈嘹',c:'#E30A17',l:'GX'},
  'shijiazhuang-gongfu':{n:'石家庄功夫',c:'#1A5276',l:'SJZ'},
  'nanjing-city':{n:'南京城市',c:'#2ECC71',l:'NJ'},
  'heilongjiang-iceland':{n:'黑龙江冰城',c:'#004098',l:'HLJ'},
  'yanbian-longding':{n:'延边龙鼎',c:'#E8002D',l:'YB'},
  'liaoning-tieren':{n:'辽宁铁人',c:'#0067A5',l:'LN'},
  'shanghai-jiading':{n:'上海嘉定汇龙',c:'#8E44AD',l:'JD'},
  'wuxi-wugou':{n:'无锡吴钩',c:'#D4A017',l:'WX'},
  'jiangxi-lushan':{n:'江西庐山',c:'#27AE60',l:'JX'},
  'qingdao-hainiu':{n:'青岛海牛',c:'#003DA5',l:'QDH'},
  'nantong-zhiyun':{n:'南通支云',c:'#0066CC',l:'NT'},
  'shenzhen-peng-city':{n:'深圳新鹏城',c:'#ED1C24',l:'SZ'},
  'meizhou-hakka':{n:'梅州客家',c:'#33A02C',l:'MZ'},
  'cangzhou-mighty-lions':{n:'沧州雄狮',c:'#E87A00',l:'CZ'},
  'changchun-yatai':{n:'长春亚泰',c:'#E60012',l:'CC'},
  'qingdao-west-coast':{n:'青岛西海岸',c:'#4169E1',l:'QDW'},
  'henan-fc':{n:'河南俱乐部',c:'#EE2737',l:'HN'},
  'tianjin-jinmen-tiger':{n:'天津津门虎',c:'#003DA5',l:'TJ'},
  'wuhan-three-towns':{n:'武汉三镇',c:'#F58025',l:'WH'},
  'zhejiang-professional':{n:'浙江队',c:'#1B8132',l:'ZJ'},
  'chengdu-rongcheng':{n:'成都蓉城',c:'#E8772E',l:'CD'},
  'shandong-taishan':{n:'山东泰山',c:'#DD0000',l:'SD'},
  'shanghai-shenhua':{n:'上海申花',c:'#0000AA',l:'SH'},
  'beijing-guoan':{n:'北京国安',c:'#006633',l:'BJ'},
  'shenzhen-fc':{n:'深圳队',c:'#003399',l:'SZ'},
  'shanghai-port':{n:'上海海港',c:'#CC0000',l:'SHP'},
  'nice':{n:'尼斯',c:'#E81E25',l:'NC'},
  'lens':{n:'朗斯',c:'#D00027',l:'LEN'},
  'wolfsburg':{n:'沃尔夫斯堡',c:'#009640',l:'WOB'},
  'borussia-mg':{n:'门兴',c:'#1A8C41',l:'BMG'},
  'fiorentina':{n:'佛罗伦萨',c:'#5823A0',l:'FIO'},
  'lazio':{n:'拉齐奥',c:'#7AB5E1',l:'LAZ'},
  'real-sociedad':{n:'皇家社会',c:'#121F69',l:'RSO'},
  'athletic-club':{n:'毕尔巴鄂竞技',c:'#EE2233',l:'ATH'},
  'aston-villa':{n:'阿斯顿维拉',c:'#670E36',l:'AVL'},
  'brighton':{n:'布莱顿',c:'#0057B8',l:'BRI'},
  'fulham':{n:'富勒姆',c:'#000000',l:'FUL'},
  'sevilla':{n:'塞维利亚',c:'#D4021D',l:'SEV'},
  'marseille':{n:'马赛',c:'#0080C8',l:'MAR'},
  'monaco':{n:'摩纳哥',c:'#E63E32',l:'MON'},
  'rb-leipzig':{n:'RB莱比锡',c:'#DD0741',l:'RBL'},
  'borussia-dortmund':{n:'多特蒙德',c:'#FDE100',l:'BVB'},
  'napoli':{n:'那不勒斯',c:'#12A0D7',l:'NAP'},
  'ac-milan':{n:'AC米兰',c:'#FB090B',l:'ACM'},
  'roma':{n:'罗马',c:'#830010',l:'ROM'},
  'atletico-madrid':{n:'马德里竞技',c:'#D81B27',l:'ATM'},
  'tottenham':{n:'热刺',c:'#1D356A',l:'TOT'},
  'chelsea':{n:'切尔西',c:'#0A4595',l:'CHE'},
  'newcastle':{n:'纽卡斯尔联',c:'#241F20',l:'NEW'},
  'atalanta':{n:'亚特兰大',c:'#002B7F',l:'ATA'},
  'paris-saint-germain':{n:'巴黎圣日耳曼',c:'#004170',l:'PSG'},
  'inter-milan':{n:'国际米兰',c:'#010E80',l:'INT'},
  'juventus':{n:'尤文图斯',c:'#000000',l:'JUV'},
  'barcelona':{n:'巴塞罗那',c:'#A50044',l:'BAR'},
  'arsenal':{n:'阿森纳',c:'#EF0107',l:'ARS'},
  'liverpool':{n:'利物浦',c:'#C8102E',l:'LIV'},
  'manchester-united':{n:'曼联',c:'#DA291C',l:'MUN'},
  'bayer-leverkusen':{n:'勒沃库森',c:'#E32221',l:'B04'},
  'villarreal':{n:'比利亚雷亚尔',c:'#FDE100',l:'VIL'},
  'real-betis':{n:'皇家贝蒂斯',c:'#007A33',l:'BET'},
  'west-ham':{n:'西汉姆联',c:'#60223B',l:'WHU'},
  'lyon':{n:'里昂',c:'#1D2C6B',l:'LYO'},
  'real-madrid':{n:'皇家马德里',c:'#FEBE10',l:'RMA'},
  'manchester-city':{n:'曼城',c:'#6CABDD',l:'MCI'},
  'bayern-munich':{n:'拜仁慕尼黑',c:'#DC052D',l:'FCB'}
};

function darken(hex, amt) {
  let col = hex.replace('#','');
  if(col.length===3) col=col[0]+col[0]+col[1]+col[1]+col[2]+col[2];
  const r=Math.max(0,parseInt(col.slice(0,2),16)-amt);
  const g=Math.max(0,parseInt(col.slice(2,4),16)-amt);
  const b=Math.max(0,parseInt(col.slice(4,6),16)-amt);
  return '#'+[r,g,b].map(x=>x.toString(16).padStart(2,'0')).join('');
}

function genSVG(name, color, initials) {
  const isLight = ['#FFFFFF','#FDE100','#FEBE10','#6CABDD','#7AB5E1','#F58025'].includes(color);
  const textColor = isLight ? '#1a1a2e' : '#ffffff';
  const d = darken(color, 50);
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 140">' +
    '<defs><linearGradient id="g" x1="0%" y1="0%" x2="0%" y2="100%">' +
    '<stop offset="0%" style="stop-color:'+color+';stop-opacity:1"/>' +
    '<stop offset="100%" style="stop-color:'+d+';stop-opacity:1"/>' +
    '</linearGradient></defs>' +
    '<path d="M60 5 L115 30 L115 80 Q115 110 60 135 Q5 110 5 80 L5 30 Z" fill="url(#g)" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>' +
    '<circle cx="60" cy="55" r="28" fill="rgba(255,255,255,0.12)"/>' +
    '<text x="60" y="62" text-anchor="middle" font-size="24" font-weight="bold" fill="'+textColor+'" font-family="Arial,sans-serif">'+initials+'</text>' +
    '<text x="60" y="118" text-anchor="middle" font-size="8" fill="rgba(255,255,255,0.5)" font-family="Arial,sans-serif">'+name+'</text></svg>';
}

let count = 0;
const outDir = 'D:/XIANGMU/images/teams';
Object.entries(teams).forEach(([file, team]) => {
  fs.writeFileSync(outDir + '/' + file + '.svg', genSVG(team.n, team.c, team.l));
  count++;
});
console.log('Generated ' + count + ' SVG badges in ' + outDir);
