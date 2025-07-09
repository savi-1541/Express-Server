import * as utils from "../../../utils/index.js";
import service from "../../../service/index.js";

export const fetchAuthorInfo = async (req, res, next) => {
  try {
    utils.logger.info(`In Fetch Author Info Controller`);

    const { id } = req.params;

    utils.logger.info(`Entering service to fetch author info`);
    const authorInfo = await service.authorService.fetchAuthorInfo(id);

    utils.logger.info(`Author info fetched successfully returning response`);
    return res.status(200).json({
      statusCode: 200,
      message: "Author info fetched successfully",
      authorInfo,
    });
  } catch (err) {
    utils.logger.error(`Error in Fetching author details ${err.message}`);
    next(err);
  }
};
