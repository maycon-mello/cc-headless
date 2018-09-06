import Proxy from '~/proxy';
// https://34.233.75.181/api/customer/gift-card/balance
// target: 'https://ccstore-test-zb3a.oracleoutsourcing.com',

const proxy = new Proxy({
  target: 'https://34.233.75.181',
  port: 3000,
  secure: false,
});

proxy.get('/test', (req, res) => {
  res.json({
    test: 1,
  });
});

proxy.listen();
