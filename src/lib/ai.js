export async function aiCall(prompt, sys) {
  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 1000,
        ...(sys ? { system: sys } : {}), messages: [{ role: 'user', content: prompt }] })
    });
    const d = await r.json(); return d.content?.[0]?.text || 'No response';
  } catch { return 'AI unavailable.'; }
}
export async function gmailCall(msg, sys) {
  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 1500, system: sys,
        messages: [{ role: 'user', content: msg }],
        mcp_servers: [{ type: 'url', url: 'https://gmail.mcp.claude.com/mcp', name: 'gmail' }] })
    });
    const d = await r.json(); return d.content?.map(b=>b.type==='text'?b.text:'').join('') || 'No response';
  } catch { return 'Gmail connection failed.'; }
}