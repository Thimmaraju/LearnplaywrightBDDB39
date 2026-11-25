async function generateReport() {
  const reporter = await import('multiple-cucumber-html-reporter');

  await reporter.generate({
    jsonDir: 'reports',
    reportPath: 'reports/html',
    metadata: {
      browser: {
        name: 'chromium',
        version: 'latest'
      },
      device: 'Local test machine',
      platform: {
        name: 'windows',
        version: 'windows 11'
      }
    },
    customData: {
      title: 'Run info',
      data: [
        { label: 'Project', value: 'Playwright Cucumber Demo' },
        { label: 'Release', value: '1.0.0' },
        { label: 'Cycle', value: 'B11221.34321' },
        { label: 'Execution Start Time', value: new Date().toLocaleString() },
        { label: 'Execution End Time', value: new Date().toLocaleString() }
      ]
    }
  });
}

generateReport().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
