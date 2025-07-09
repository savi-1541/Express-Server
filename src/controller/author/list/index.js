import * as utils from "../../../utils/index.js";
import service from "../../../service/index.js";

export const listAuthor = async (req, res, next) => {
  try {
    utils.logger.info(`In List author Controller`);

    const query = req.query;

    utils.logger.info(`Entering service to fetch authors list`);
    const authorList = await service.authorService.listAuthor(query);

    utils.logger.info(`Author list fetched successfully returning response`);
    return res.status(200).json({
      statusCode: 200,
      message: "author fetched successfully",
      authorList,
    });
  } catch (err) {
    utils.logger.error(`Error in  Fetching author list ${err.message}`);
    next(err);
  }
};
