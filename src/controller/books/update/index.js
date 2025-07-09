import * as utils from "../../../utils/index.js";
import service from "../../../service/index.js";

export const updateBookInfo = async (req, res, next) => {
  try {
    utils.logger.info(`In Update Book Info Controller`);

    const { id } = req.params;
    const payload = req.body;

    utils.logger.info(`Entering service to update Book Info`);
    await service.booksService.updateBookInfo(id, payload);

    utils.logger.info(`Book info updated successfully returning response`);
    return res.status(200).json({
      statusCode: 200,
      message: "Books info updated successfully",
    });
  } catch (err) {
    utils.logger.error(`Error in Updating Book details ${err.message}`);
    next(err);
  }
};
