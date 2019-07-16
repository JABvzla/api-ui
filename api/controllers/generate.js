const fs = require('fs');

const MODELS_PATH = 'api/models/';
const excludeFiles = ['.gitkeep', 'Models.js'];

module.exports = {
  friendlyName: 'Generate',

  description: 'Generate models with data from database.',

  inputs: {},

  exits: {},

  fn: async function() {
    const models = await Models.find();

    fs.readdir(MODELS_PATH, (err, files) => {
      if (err) return;

      files
        .filter(e => !e.indexOf(excludeFiles))
        .forEach(e => fs.unlink(`${MODELS_PATH}${e}`, () => {}));
    });

    models.forEach(model => {
      const content = `module.exports = ${JSON.stringify(model.attributes)}`;

      fs.writeFile(`${MODELS_PATH}${model.name}.js`, content, () => {});
    });

    return models;
  }
};
