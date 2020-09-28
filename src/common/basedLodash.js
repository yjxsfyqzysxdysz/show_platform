import _ from 'lodash'

/**
 * 自动从前补全参数
 * @param {string | number} index 数值
 * @param {number} num 位数
 * @returns {string} 返回值 
 */
export const padStartNum = function(index, num = 3) {
  return _.padStart(index + '', num, '0')
}
