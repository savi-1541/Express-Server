import * as utils from "../../utils/index.js";

export const healthCheck = (req, res) => {
  try {
    utils.logger.info(`In health check API controller`);

    return res.status(200).json({
      statusCode: 200,
      messgae: "Server health OK",
    });
  } catch (err) {
    utils.logger.error(`Error in health check API ${err.message}`);
    return res.status(500).json({
      statusCode: 500,
      messgae: "Server Health Not Ok",
    });
  }
};
