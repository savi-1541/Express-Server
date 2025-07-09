import * as utils from "../../../utils/index.js";
import service from "../../../service/index.js";

export const createBooks = async (req, res, next) => {
  try {
    utils.logger.info(`In Create Book Controller`);

    const payload = req.body;

    utils.logger.info(`Entering service to Create Book`);
    await service.booksService.addBooks(payload);

    utils.logger.info(`Book created successfully returning response`);
    return res.status(200).json({
      statusCode: 200,
      message: "Book added successfully",
    });
  } catch (err) {
    utils.logger.error(`Error in Adding book ${err.message}`);
    next(err);
  }
};
