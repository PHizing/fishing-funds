// src/renderer/utils/stock.ts

/**
 * Market IDs for US stock exchanges.
 * The user mentioned 105, which is often used for NASDAQ.
 * Other common IDs for US markets are included as well.
 */
export enum US_STOCK_MARKET_IDS {
  NASDAQ = 190,
  NYSE = 188,
  AMEX = 189,
  NASDAQ_ALT = 105,
}

/**
 * Generates a secid for a US stock.
 *
 * The `secid` is a unique identifier used in some financial data systems.
 * It's typically a combination of a market identifier and the ticker symbol.
 *
 * For US stocks, the format is `market_id.ticker`.
 *
 * @param marketId - The market ID from US_STOCK_MARKET_IDS.
 * @param ticker - The stock ticker symbol (e.g., 'AAPL').
 * @returns The generated secid string.
 */
export function generate_us_stock_secid(marketId: US_STOCK_MARKET_IDS, ticker: string): string {
  return `${marketId}.${ticker}`;
}

// --- Examples ---

// NASDAQ examples
const aapl_secid_190 = generate_us_stock_secid(US_STOCK_MARKET_IDS.NASDAQ, 'AAPL'); // "190.AAPL"
const aapl_secid_105 = generate_us_stock_secid(US_STOCK_MARKET_IDS.NASDAQ_ALT, 'AAPL'); // "105.AAPL"

// NYSE example
const bac_secid = generate_us_stock_secid(US_STOCK_MARKET_IDS.NYSE, 'BAC'); // "188.BAC"

// AMEX example
const spy_secid = generate_us_stock_secid(US_STOCK_MARKET_IDS.AMEX, 'SPY'); // "189.SPY"

/*
 * To demonstrate the output, we can log the examples to the console.
 * In a real application, you would import and use this function where needed.
 */
console.log('--- US Stock SECID Generation Examples ---');
console.log(`NASDAQ (AAPL) using ID 190: ${aapl_secid_190}`);
console.log(`NASDAQ (AAPL) using ID 105: ${aapl_secid_105}`);
console.log(`NYSE (BAC) using ID 188:   ${bac_secid}`);
console.log(`AMEX (SPY) using ID 189:   ${spy_secid}`);
console.log('------------------------------------------');
