const fs = require('fs');

module.exports = {

  friendlyName: 'Generate',

  description: 'Generate models with data from database.',

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    const models = await Models.find();
    models.forEach( model => {
      const content = `module.exports = ${JSON.stringify(model.attributes)}`;

      fs.writeFile(`api/models/${model.name}.js`, content, () => {});
    });

    return;
  }
};
