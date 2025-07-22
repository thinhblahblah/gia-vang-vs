import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { type } = req.query; 
  const todayKey = new Date().toISOString().split("T")[0];
  const key = (type === 'today') ? `daily-${todayKey}` : 'total';
  const response = await fetch(`https://api.countapi.xyz/hit/vangvansang/${key}`);
  const data = await response.json();

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({ value: data.value });
}
