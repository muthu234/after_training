const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});



const productionLogger = () =>
{
return createLogger({
  level: 'debug',
//   format: winston.format.json(),
  format:format.combine(format.colorize(),timestamp({format:"dd:hh:mm"}),myFormat),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.Console(),
    new transports.File({filename:"myfile.log"})]
});
}
module.exports={productionLogger};
