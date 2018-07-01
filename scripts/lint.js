import { CLIEngine } from 'eslint';

async function lint() {
  const eslint = new CLIEngine({
    extensions: ['.jsx', '.js'],
    fix: true,
  });

  const report = eslint.executeOnFiles(['src', 'tools', 'wdio']);
  const formatter = eslint.getFormatter();
  const errors = formatter(report.results);
  if (errors) {
    console.error(errors);
  }
}

export default lint;
