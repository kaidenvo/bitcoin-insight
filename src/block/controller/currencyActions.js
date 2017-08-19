export const SET_CURRENCY = 'SET_CURRENCY';
export const SET_CURRENCY_EXCHANGE = 'SET_CURRENCY_EXCHANGE';

export const currencyOptions = ['USD', 'BTC', 'mBTC', 'bits'].map(lbl => {
    return { label: lbl, value: lbl, clearableValue: false };
});

export function setCurrency(currency) {
    return { type: SET_CURRENCY, currency };
}

export function setCurrencyExchange(rate) {
    return { type: SET_CURRENCY_EXCHANGE, rate };
}
