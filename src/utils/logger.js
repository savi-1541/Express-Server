import { createLogger, transports, format } from "winston";
import "winston-daily-rotate-file";

const { printf, combine, label, timestamp, colorize } = format;

const customFormat = printf(({ level, message, label, timestamp }) => {
  return `#${level} ${timestamp} [${label}]: ${message}`;
});

const rotateFile = (lvl) => {
  return new transports.DailyRotateFile({
    filename: "logs/app-%DATE%.log",
    datePattern: "YYYY-MM-DD",
    zippedArchive: true,
    maxSize: "20m",
    level: lvl,
    handleExceptions: true,
    handleRejections: true,
  });
};

const initializeLogger = (lvl) => {
  const isLvlErr = lvl == "error";
  let options = {};

  if (isLvlErr) {
    options = {
      ...options,
      exceptionHandlers: [
        new transports.File({
          level: "error",
          filename: "exception-handler.log",
        }),
      ],
      rejectionHandlers: [
        new transports.File({
          level: "error",
          filename: "rejection-handler.log",
        }),
      ],
    };
  }

  const dailyRotateFile = rotateFile(lvl);

  return createLogger({
    level: lvl,
    format: combine(label({ label: "Info" }), timestamp(), customFormat),
    transports: [
      new transports.Console({
        level: lvl,
        format: combine(colorize(), timestamp(), customFormat),
        handleExceptions: isLvlErr,
        handleRejections: isLvlErr,
      }),
      new transports.File({
        level: lvl,
        filename: `${lvl}.log`,
        handleExceptions: isLvlErr,
        handleRejections: isLvlErr,
      }),
      dailyRotateFile,
    ],
    ...options,
  });
};

const infoLogger = initializeLogger("info");
const errorLogger = initializeLogger("error");

const info = (message) => infoLogger.log("info", message);
const error = (message) => errorLogger.log("error", message);

export default {
  info,
  error,
};
