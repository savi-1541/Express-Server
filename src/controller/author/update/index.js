import * as utils from "../../../utils/index.js";
import service from "../../../service/index.js";

export const updateAuthorInfo = async (req, res, next) => {
  try {
    utils.logger.info(`In Update author Info Controller`);

    const { id } = req.params;
    const payload = req.body;

    utils.logger.info(`Entering service to update author info`);
    await service.authorService.updateAuthorInfo(id, payload);

    utils.logger.info(`Author info updated successfully returning response`);
    return res.status(200).json({
      statusCode: 200,
      message: "author info updated successfully",
    });
  } catch (err) {
    utils.logger.error(`Error in Updating author details ${err.message}`);
    next(err);
  }
};
