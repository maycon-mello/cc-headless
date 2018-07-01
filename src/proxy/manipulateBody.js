import zlib from 'zlib';

export default manipulateBody => (proxyRes, req, res) => {
  const end = res.end;
  let body; 
  let buffer = new Buffer('');

  // Concat and unzip proxy response
  proxyRes
    .on('data', (chunk) => {
      buffer = Buffer.concat([buffer, chunk]);
    })
    .on('end', () => {
      try {
        body = zlib.gunzipSync(buffer).toString('utf8');
      } catch(ex) {
        body = buffer.toString('utf8');
      }
    });

  // Defer write
  res.write = () => {};

  // Update user response at the end
  res.end = () => {
    const output = manipulateBody(body);
    res.setHeader('content-length', output.length);
    res.setHeader('content-encoding', '');
    end.apply(res, [output]);
  };
}