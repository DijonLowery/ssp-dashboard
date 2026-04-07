export const T = {
  bg:'#080810', surface:'#0f0f1a', card:'#13131f', card2:'#16162a',
  border:'#1e1e35', border2:'#2a2a45',
  silver:'#c8c8d8', s2:'#9898b0', s3:'#e8e8f8',
  gold:'#d4a843', green:'#10d98a', red:'#f05050', blue:'#4080ff', purple:'#8060ff',
  text:'#f0f0fa', muted:'#606080',
};
export const CG = 'linear-gradient(135deg,#9090b0,#e8e8f8,#a0a0c0)';
export const GG = 'linear-gradient(135deg,#b8892a,#f0c060,#c89830)';
export const CT = { background: CG, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' };
export const fmt = n => '$' + Number(n).toLocaleString();
export const todayStr = () => new Date().toISOString().split('T')[0];
export const dleft = d => Math.ceil((new Date(d) - new Date()) / 86400000);
export const uid = () => 'INV-' + String(Math.floor(Math.random()*9000)+1000);