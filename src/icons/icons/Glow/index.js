const Glow = {
  blue: {},
  yellow: {},
};

Glow.blue.desktop = require('./Blue/Desktop').default;
Glow.blue.landscape = require('./Blue/Landscape').default;
Glow.blue.portrait = require('./Blue/Portrait').default;
Glow.blue.mobile = require('./Blue/Mobile').default;

Glow.yellow.desktop = require('./Yellow/Desktop').default;
Glow.yellow.landscape = require('./Yellow/Landscape').default;
Glow.yellow.portrait = require('./Yellow/Portrait').default;
Glow.yellow.mobile = require('./Yellow/Mobile').default;

export default Glow;
