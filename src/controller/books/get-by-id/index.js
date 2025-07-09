import * as utils from "../../../utils/index.js";
import service from "../../../service/index.js";

export const fetchBookInfo = async (req, res, next) => {
  try {
    utils.logger.info(`In Fetch book Info Controller`);

    const { id } = req.params;

    utils.logger.info(`Entering service to fetch book info`);
    const bookInfo = await service.booksService.fetchBookInfo(id);

    utils.logger.info(`book info fetched successfully returning response`);
    return res.status(200).json({
      statusCode: 200,
      message: "Book info fetched successfully",
      bookInfo,
    });
  } catch (err) {
    utils.logger.error(`Error in Fetching book details ${err.message}`);
    next(err);
  }
};
