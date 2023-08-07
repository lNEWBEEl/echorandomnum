const core = require('@actions/core');

function getCurrentTime() {
  const timeFormat = core.getInput('time-format');
  const currentTime = new Date().toISOString();

  core.setOutput('current-time', currentTime);
}

try {
  getCurrentTime();
} catch (error) {
  core.setFailed(error.message);
}
