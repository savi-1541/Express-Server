import * as utils from "../../../utils/index.js";
import service from "../../../service/index.js";

export const listBooks = async (req, res, next) => {
  try {
    utils.logger.info(`In List Book Controller`);

    const query = req.query;

    const loggedInAuthor = req.user.role == "author" ? req.user.id : "";

    utils.logger.info(`Entering service to fetch Books list`);
    const BookList = await service.booksService.listBooks(
      query,
      loggedInAuthor,
    );

    utils.logger.info(`Book list fetched successfully returning response`);
    return res.status(200).json({
      statusCode: 200,
      message: "Book fetched successfully",
      BookList,
    });
  } catch (err) {
    utils.logger.error(`Error in  Fetching Book list ${err.message}`);
    next(err);
  }
};
