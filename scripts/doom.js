const hubot = require('hubot');

const libdoom = require('./lib/doom');

/**
 *
 * @param {hubot.Robot<any>} robot
 */
function robot(robot) {
  robot.respond(/doom (green|blue|purple|red|black)/i, msg => {
    /** @type {DoomColor} */
    const color = /** @type {DoomColor} */(msg.match[1]);
    msg.reply(libdoom.doom(color));
  });
};
module.exports = robot;
