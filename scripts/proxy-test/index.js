import Proxy from '~/proxy';

const proxy = new Proxy({
  target: 'https://ccstore-test-zboa.oracleoutsourcing.com',
  port: 3000,
  secure: true,
});

proxy.get('/test', (req, res) => {
  res.json({
    test: 1,
  });
});

proxy.listen();
