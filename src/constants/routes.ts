/* eslint-disable no-unused-vars */

export enum Routes {
  ROOT = "/",
  // Account
  ACCOUNT_CREATE = "/account/create",
  ACCOUNT_FUND = "/account/fund",
  ACCOUNT_CREATE_MUXED = "/account/muxed-create",
  ACCOUNT_PARSE_MUXED = "/account/muxed-parse",
  // Explore Endpoints
  EXPLORE_ENDPOINTS = "/explore-endpoints",
  EXPLORE_ENDPOINTS_ACCOUNTS = "/explore-endpoints/accounts",
  EXPLORE_ENDPOINTS_ACCOUNTS_SINGLE = "/explore-endpoints/accounts/single",
  EXPLORE_ENDPOINTS_ASSETS = "/explore-endpoints/assets",
  EXPLORE_ENDPOINTS_CLAIMABLE_BALANCES = "/explore-endpoints/claimable-balances",
  EXPLORE_ENDPOINTS_CLAIMABLE_BALANCES_SINGLE = "/explore-endpoints/claimable-balances/single",
  EXPLORE_ENDPOINTS_EFFECTS = "/explore-endpoints/effects",
  EXPLORE_ENDPOINTS_EFFECTS_ACCOUNT = "/explore-endpoints/effects/account",
  EXPLORE_ENDPOINTS_EFFECTS_LEDGER = "/explore-endpoints/effects/ledger",
  EXPLORE_ENDPOINTS_EFFECTS_LIQUIDITY_POOL = "/explore-endpoints/effects/liquidity-pool",
  EXPLORE_ENDPOINTS_EFFECTS_OPERATION = "/explore-endpoints/effects/operation",
  EXPLORE_ENDPOINTS_EFFECTS_TRANSACTION = "/explore-endpoints/effects/transaction",
  EXPLORE_ENDPOINTS_FEE_STATS = "/explore-endpoints/fee-stats",
  EXPLORE_ENDPOINTS_LEDGERS = "/explore-endpoints/ledgers",
  EXPLORE_ENDPOINTS_LEDGERS_SINGLE = "/explore-endpoints/ledgers/single",
  EXPLORE_ENDPOINTS_LIQUIDITY_POOLS = "/explore-endpoints/liquidity-pools",
  EXPLORE_ENDPOINTS_LIQUIDITY_POOLS_SINGLE = "/explore-endpoints/liquidity-pools/single",
  EXPLORE_ENDPOINTS_OFFERS = "/explore-endpoints/offers",
  EXPLORE_ENDPOINTS_OFFERS_SINGLE = "/explore-endpoints/offers/single",
  EXPLORE_ENDPOINTS_OFFERS_ACCOUNT = "/explore-endpoints/offers/account",
  EXPLORE_ENDPOINTS_OPERATIONS = "/explore-endpoints/operations",
  EXPLORE_ENDPOINTS_OPERATIONS_SINGLE = "/explore-endpoints/operations/single",
  EXPLORE_ENDPOINTS_OPERATIONS_ACCOUNT = "/explore-endpoints/operations/account",
  EXPLORE_ENDPOINTS_OPERATIONS_LEDGER = "/explore-endpoints/operations/ledger",
  EXPLORE_ENDPOINTS_OPERATIONS_LIQUIDITY_POOL = "/explore-endpoints/operations/liquidity-pool",
  EXPLORE_ENDPOINTS_OPERATIONS_TRANSACTION = "/explore-endpoints/operations/transaction",
  EXPLORE_ENDPOINTS_ORDER_BOOK_DETAILS = "/explore-endpoints/order-book/details",
  EXPLORE_ENDPOINTS_PATHS_PAYMENT = "/explore-endpoints/paths/payment",
  EXPLORE_ENDPOINTS_PATHS_STRICT_RECEIVE = "/explore-endpoints/paths/strict-receive",
  EXPLORE_ENDPOINTS_PATHS_STRICT_SEND = "/explore-endpoints/paths/strict-send",
  EXPLORE_ENDPOINTS_PAYMENTS = "/explore-endpoints/payments",
  EXPLORE_ENDPOINTS_PAYMENTS_ACCOUNT = "/explore-endpoints/payments/account",
  EXPLORE_ENDPOINTS_PAYMENTS_LEDGER = "/explore-endpoints/payments/ledger",
  EXPLORE_ENDPOINTS_PAYMENTS_TRANSACTION = "/explore-endpoints/payments/transaction",
  EXPLORE_ENDPOINTS_TRADE_AGGREGATIONS = "/explore-endpoints/trade-aggregations",
  EXPLORE_ENDPOINTS_TRADES = "/explore-endpoints/trades",
  EXPLORE_ENDPOINTS_TRADES_ACCOUNT = "/explore-endpoints/trades/account",
  EXPLORE_ENDPOINTS_TRADES_LIQUIDITY_POOL = "/explore-endpoints/trades/liquidity-pool",
  EXPLORE_ENDPOINTS_TRADES_OFFER = "/explore-endpoints/trades/offer",
  EXPLORE_ENDPOINTS_TRANSACTIONS = "/explore-endpoints/transactions",
  EXPLORE_ENDPOINTS_TRANSACTIONS_SINGLE = "/explore-endpoints/transactions/single",
  EXPLORE_ENDPOINTS_TRANSACTIONS_POST = "/explore-endpoints/transactions/post",
  EXPLORE_ENDPOINTS_TRANSACTIONS_ACCOUNT = "/explore-endpoints/transactions/account",
  EXPLORE_ENDPOINTS_TRANSACTIONS_LEDGER = "/explore-endpoints/transactions/ledger",
  EXPLORE_ENDPOINTS_TRANSACTIONS_LIQUIDITY_POOL = "/explore-endpoints/transactions/liquidity-pool",
  // Transactions
  BUILD_TRANSACTION = "/transaction/build",
  SIGN_TRANSACTION = "/transaction/sign",
  SIMULATE_TRANSACTION = "/transaction/simulate",
  SUBMIT_TRANSACTION = "/transaction/submit",
  FEE_BUMP_TRANSACTION = "/transaction/fee-bump",
  // View XDR
  VIEW_XDR = "/xdr/view",
  TO_XDR = "/xdr/to",
  // Soroban
  SOROBAN_CONTRACT_EXPLORER = "/soroban/contract-explorer",
}
