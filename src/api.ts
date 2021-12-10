const BASE_URL = `https://api.coinpaprika.com/v1`;

export async function fetchCoins() {
  const response = await (await fetch(`${BASE_URL}/coins`)).json();
  const data = response.slice(0, 51);
  return data;
}

export function fetchCoinInfo(coinId?: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((res) => res.json());
}

export function fetchCoinTickers(coinId?: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((res) => res.json());
}

export function fetchCoinHistory(coinId?: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7;
  return fetch(
    `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
  ).then((res) => res.json());
}

export async function fetchCoinPrice(coinId?: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 4;
  const response = await fetch(
    `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const json = response.json();
  return json;
}
