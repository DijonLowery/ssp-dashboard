# SSP Command Center

Business operations dashboard for Special Services Protection, Atlanta GA.

## Modules
- Overview dashboard with KPIs and alerts
- Events calendar (contracts, patrols, meetings)
- Shift manager with weekly grid view
- Officer roster with AI profile generation
- Invoice management with Gmail integration
- Leads pipeline with AI pitch drafting
- LinkedIn content generator
- Payroll with Paychex integration

## Local Dev
```bash
npm install
cp .env.example .env  # add your Anthropic API key
npm run dev
```

## Deploy
Push to main branch — Vercel auto-deploys.

## Live URL
https://ssp-dashboard-ten.vercel.app