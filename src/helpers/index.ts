// Package
import * as _ from "lodash";

// Configs
import config from "./../configs";

/**
 * TODO paking data for reponse
 * @param {object || array} data
 * @param {number} status
 */
export const packing = (status: number, data: any = {}) => {
  if (_.isEqual(status, 200)) {
    return {
      success: true,
      data,
    };
  }
  return {
    success: false,
    message: config.httpErrors[status],
  };
};
