/* istanbul ignore file */
import Mocha from 'mocha';
import glob from 'glob';
import chokidar from 'chokidar';
import optimist from 'optimist';

const { argv } = optimist;

const testFiles = glob.sync('src/**/*.test.js', { absolute: true });
const watchFiles = glob.sync('src/**/*.+(js)', { absolute: true });

let runner;

function pass() {
  const mocha = new Mocha({
    reporter: 'list',
    useColors: true,
  });

  mocha.addFile('scripts/test/setup');
  testFiles.forEach(f => mocha.addFile(f));
  // eslint-disable-next-line no-console
  runner = mocha.run(failures => process.on('exit', () => console.log(failures)));
}

function test() {
  if (argv.watch) {
    chokidar.watch(watchFiles).on('change', () => {
      if (runner) {
        runner.abort();
      }

      watchFiles.forEach(f => delete require.cache[f]);

      try {
        pass();
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    });
  }
  pass();
}

test();
