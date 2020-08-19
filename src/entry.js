const { exportMod, exportPage } = require('./exportCode');
const { line2Hump, transComponentsMap } = require('./utils');

module.exports = function(schema, option) {
  // get blocks json
  const blocks = [];
  const scale = 750 / (option.responsive && option.responsive.width || 750);
  const componentsMap = transComponentsMap(option.componentsMap);

  option.scale = scale;
  option.componentsMap = componentsMap;

  function schemaHandler(option) {
    const { json, scale } = option;
    switch (json.componentName.toLowerCase()) {
      case 'block':
        // parse fileName
        json.fileName = json.fileName || `block_${json.id.slice(0, 6)}`;
        if (
          json.smart &&
          json.smart.layerProtocol &&
          json.smart.layerProtocol.module &&
          json.smart.layerProtocol.module.type
        ) {
          json.fileName = json.smart.layerProtocol.module.type.replace(
            /[@|\/]/g,
            ''
          );
        }
        json.fileName = json.fileName === 'index' ? json.fileName : line2Hump(json.fileName);
        blocks.push(json);
        break;
      default:
        break;
    }
    if (json.children && json.children.length > 0 && Array.isArray(json.children)) {
      json.children.forEach(child => {
        schemaHandler({
          json: child,
          scale,
        });
      });
    }
  }

  // invoke
  schemaHandler({
    json: schema,
    scale
  });

  // export module code
  let panelDisplay = [];
  blocks.length > 0 &&
    blocks.forEach(block => {
      const result = exportMod(block, option);
      panelDisplay = panelDisplay.concat(result);
    });
  // export Page code
  if (schema.componentName === 'Page') {
    const result = exportPage(schema, option);
    panelDisplay = panelDisplay.concat(result);
  }

  return {
    panelDisplay,
    noTemplate: true
  };
};
