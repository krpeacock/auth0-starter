// logging stuff

const winston = require('winston');
const slackWinston = require('slack-winston').Slack;
require('winston-log-and-exit');
require('winston-daily-rotate-file');

const logger = new(winston.Logger)({
  transports: [
    new winston
      .transports
      .Console({level: 'info', handleExceptions: true, timestamp: true, colorize: true, prettyPrint: true}),
    new winston
      .transports
      .DailyRotateFile({
        name: 'errors',
        level: 'error',
        timestamp: true,
        filename: './logs/error/error-',
        datePattern: 'yyyy-MM-dd.log',
        createTree: true
      }),
    new winston
      .transports
      .DailyRotateFile({
        name: 'debug',
        level: 'debug',
        timestamp: true,
        filename: './logs/debug/debug-',
        datePattern: 'yyyy-MM-dd.log',
        createTree: true
      })
  ]
});

const slackWinstonOptions = {
  webhook_url: process.env.AKQA_SLACK_WEBHOOK_URL,
  channel: '#balsam_hill_pci_logs',
  username: 'bh-pci-logger',
  icon_emoji: ':elephant:',
  level: 'info', // same as console.
};

// logger.add(slackWinston, slackWinstonOptions);

module.exports = {
  logger
};