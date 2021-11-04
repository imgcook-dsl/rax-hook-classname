const isExpression = (value) => {
  return /^\{\{.*\}\}$/.test(value);
};

const parseExpression = (value, isReactNode) => {
  if (isReactNode) {
    value = value.slice(1, -1).replace(/this\./gim, '');
  } else {
    value = value.slice(2, -2).replace(/this\./gim, '');
  }
  return value;
};

// eg: hello_world => HelloWorld
const line2Hump = (str) => {
  str = str.replace(/[_|-](\w)/g, (all, letter) => {
    return letter.toUpperCase();
  });
  str = str.charAt(0).toUpperCase() + str.slice(1);
  return str;
};

const isEmptyObj = (o) => {
  if (o !== null && Object.prototype.toString.call(o) === '[object Object]') {
    return !Object.keys(o).length;
  }
  return false;
};

const transComponentsMap = (compsMap = {}) => {
  if (!compsMap || !Array.isArray(compsMap.list)) {
    return [];
  }
  const list = compsMap.list;
  return list.reduce((obj, comp) => {
    const componentName = comp.name;
    if (!obj[componentName]) {
      try {
        let dependence = JSON.parse(comp.dependence);
        if (dependence) {
          comp.packageName = dependence.package;
        }
        if (!comp.dependenceVersion) {
          comp.dependenceVersion = '*';
        }
        if (/^\d/.test(comp.dependenceVersion)) {
          comp.dependenceVersion = '^' + comp.dependenceVersion;
        }
      } catch (e) {}
      obj[componentName] = comp;
    }
    return obj;
  }, {});
};

const toString = (value) => {
  if ({}.toString.call(value) === '[object Function]') {
    return value.toString();
  }
  if (typeof value === 'string') {
    return value;
  }
  if (typeof value === 'object') {
    return JSON.stringify(value, (key, value) => {
      if (typeof value === 'function') {
        return value.toString();
      } else {
        return value;
      }
    });
  }

  return String(value);
};

const toUpperCaseStart = (value) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

const deepClone = (obj) => {
  let objClone = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj === 'object') {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        // 判断ojb子元素是否为对象，如果是，递归复制
        obj[key] && typeof obj[key] === 'object'
          ? (objClone[key] = deepClone(obj[key]))
          : (objClone[key] = obj[key]);
      }
    }
  }
  return objClone;
};

// convert to responsive unit, such as vw
const parseStyle = (style, scale, unit) => {
  for (let key in style) {
    switch (key) {
      case 'fontSize':
      case 'marginTop':
      case 'marginBottom':
      case 'paddingTop':
      case 'paddingBottom':
      case 'height':
      case 'top':
      case 'bottom':
      case 'width':
      case 'maxWidth':
      case 'left':
      case 'right':
      case 'paddingRight':
      case 'paddingLeft':
      case 'marginLeft':
      case 'marginRight':
      case 'lineHeight':
      case 'borderBottomRightRadius':
      case 'borderBottomLeftRadius':
      case 'borderTopRightRadius':
      case 'borderTopLeftRadius':
      case 'borderRadius':
      case 'textIndent':
        style[key] = parseInt(style[key]) * scale;
        if (unit && style[key]) {
          style[key] = `${style[key]}${unit}`;
        }
        break;
    }
  }
  return style;
};

// parse function, return params and content
const parseFunction = (func) => {
  const funcString = func.toString();
  const params = funcString.match(/\([^\(\)]*\)/)[0].slice(1, -1);
  const content = funcString.slice(
    funcString.indexOf('{') + 1,
    funcString.lastIndexOf('}')
  );
  return {
    params,
    content,
  };
};

// parse layer props(static values or expression)
const parseProps = (value, isReactNode) => {
  if (typeof value === 'string') {
    if (isExpression(value)) {
      return parseExpression(value, isReactNode);
    }

    if (isReactNode) {
      return value;
    } else {
      return `'${value}'`;
    }
  } else if (typeof value === 'function') {
    const { params, content } = parseFunction(value);
    return `(${params}) => {${content}}`;
  } else if (typeof value === 'boolean' || typeof value === 'number') {
    return String(value);
  } else if (typeof value === 'object') {
    if (Array.isArray(value)) {
      return `[${value.map((v) => parseProps(v)).join(', ')}]`;
    }
    return `{${Object.keys(value)
      .map((key) => {
        return `${/^\w+$/.test(key) ? key : `'${key}'`}: ${parseProps(
          value[key]
        )}`;
      })
      .join(', ')}}`;
  }
};

// parse condition: whether render the layer
const parseCondition = (condition, render) => {
  if (typeof condition === 'boolean') {
    return condition ? `${render}` : '';
  } else if (typeof condition === 'string' && isExpression(condition)) {
    condition = parseExpression(condition);
    return condition ? `(${condition}) && ${render}` : `${render}`;
  }
  return render;
};

// flexDirection -> flex-direction
const parseCamelToLine = (str) => {
  str = str.split(/(?=[A-Z])/).join('-');

  if (/^[A-Z].*/.test(str)) {
    str = '-' + str;
  }
  // console.log('str----',str);
  return str.toLowerCase();
};

// style obj -> css
const generateCSS = (style, prefix, animation) => {
  let css = '';
  for (let layer in style) {
    css += `${prefix && prefix !== layer ? '.' + prefix + ' ' : ''}.${layer} {`;
    for (let key in style[layer]) {
      css += `${parseCamelToLine(key)}: ${style[layer][key]};\n`;
    }
    css += '}';
  }
  return css;
};

// animation obj -> css
const transAnimation = function(animation) {
  let keyFrames = ``;
  for (let i of animation.keyframes) {
    console.log(i);
    keyFrames += `
${((i.offset * 10000) / 100.0).toFixed(0) + '%'} {
  ${i.opacity ? 'opacity: '.concat(i.opacity) + ';' : ''}
  ${i.transform ? 'transform: '.concat(i.transform) + ';' : ''}
}
`;
  }
  let keyframes = `
@keyframes ${animation.name} {
${keyFrames}
}
`;
  return keyframes;
};

// parse loop render
const parseLoop = (loop, loopArg, render, states, schema) => {
  let data;
  let loopArgItem = (loopArg && loopArg[0]) || 'item';
  let loopArgIndex = (loopArg && loopArg[1]) || 'index';

  if (Array.isArray(loop)) {
    data = toString(loop);
  } else if (isExpression(loop)) {
    data = parseExpression(loop) || '[]';
  }

  // add loop key
  const tagEnd = render.match(/^<.+?(\s|\b(?=>))/)[0].length;
  render = `${render.slice(0, tagEnd)} key={${loopArgIndex}}${render.slice(
    tagEnd
  )}`;

  // remove `this`
  const re = new RegExp(`this.${loopArgItem}`, 'g');
  render = render.replace(re, loopArgItem);
  let stateValue = data;
  if (data.match(/this\.state\./)) {
    stateValue = `state.${data.split('.').pop()}`;
  }

  if (schema.condition) {
    render = parseCondition(schema.condition, render);
  }

  return {
    hookState: [],
    value: `(${stateValue} || []).map((${loopArgItem}, ${loopArgIndex}) => {
      return (${render});
    })`,
  };
};

// parse state
const parseState = (states) => {
  let stateName = 'state';
  // hooks state
  return `const [${stateName}, set${toUpperCaseStart(
    stateName
  )}] = useState(${toString(JSON.parse(states)) || null});`;
};

// replace state
const replaceState = (render) => {
  // remove `this`
  let stateName = 'state';
  const re = new RegExp(`this.state`, 'g');
  return render.replace(re, stateName);
};

// replace state
const parseLifeCycles = (schema, init) => {
  let lifeCycles = [];
  if (!schema.lifeCycles['_constructor'] && init) {
    schema.lifeCycles['_constructor'] = `function _constructor() {}`;
  }

  Object.keys(schema.lifeCycles).forEach((name) => {
    let { params, content } = parseFunction(schema.lifeCycles[name]);
    content = replaceState(content);
    switch (name) {
      case '_constructor': {
        init.push(content);
        lifeCycles.unshift(`
          // constructor
          useState(()=>{
            ${init.join('\n')}
          })
        `);
        break;
      }
      case 'componentDidMount': {
        lifeCycles.push(`
          // componentDidMount
          useEffect(()=>{
            ${content}
          }, [])
        `);
        break;
      }
      case 'componentDidUpdate': {
        lifeCycles.push(`
          // componentDidUpdate
          useEffect(()=>{
            ${content}
          })
        `);
        break;
      }
      case 'componentWillUnMount': {
        lifeCycles.push(`
          // componentWillUnMount
          useEffect(()=>{
            return ()=>{
              ${content}
            }
          }, [])
        `);
        break;
      }
    }
  });
  return lifeCycles;
};

const existImport = (imports, singleImport) => {
  let exist = false;
  imports.forEach(item => {
    if (item._import === singleImport) {
      exist = true;
    }
  });
  return exist;
};

// parse async dataSource
const parseDataSource = (data, imports) => {
  const name = data.id;
  const { uri, method, params } = data.options;
  const action = data.type;
  let payload = {};
  let singleImport;

  switch (action) {
    case 'fetch':
      singleImport = `import {fetch} from 'whatwg-fetch';`;
      if (!existImport(imports, singleImport)) {
        imports.push({
          _import: singleImport,
          package: 'whatwg-fetch',
          version: '^3.0.0',
        });
      }
      payload = {
        method: method,
      };

      break;
    case 'jsonp':
      singleImport = `import {fetchJsonp} from 'fetch-jsonp';`;
      if (!existImport(imports, singleImport)) {
        imports.push({
          _import: singleImport,
          package: 'fetch-jsonp',
          version: '^1.1.3',
        });
      }
      break;
  }

  Object.keys(data.options).forEach((key) => {
    if (['uri', 'method', 'params'].indexOf(key) === -1) {
      payload[key] = toString(data.options[key]);
    }
  });

  let comma = isEmptyObj(payload) ? '' : ',';
  // params parse should in string template
  if (params) {
    payload = `${toString(payload).slice(0, -1)} ${comma} body: ${
      isExpression(params) ? parseProps(params) : toString(params)
    }}`;
  } else {
    payload = toString(payload);
  }

  let result = `{
  return ${action}(${parseProps(uri)}, ${toString(payload)})
    .then((response) => response.json())
`;

  if (data.dataHandler) {
    const { params, content } = parseFunction(data.dataHandler);
    result += `.then((${params}) => {${content}})
    .catch((e) => {
      console.log('error', e);
    })
  `;
  }

  result += '}';

  return {
    value: `function ${name}() ${result}`,
    imports,
  };
};

// get children text
const getText = (schema) => {
  let text = '';

  const getChildrenText = (schema) => {
    const type = schema.componentName.toLowerCase();
    if (type === 'text') {
      text += parseProps(schema.props.text || schema.text, true).replace(
        /\{/g,
        '${'
      );
    }

    schema.children &&
      Array.isArray(schema.children) &&
      schema.children.map((item) => {
        getChildrenText(item);
      });
  };

  getChildrenText(schema);

  return text;
};

module.exports = {
  isExpression,
  toString,
  transComponentsMap,
  line2Hump,
  existImport,
  toUpperCaseStart,
  parseStyle,
  deepClone,
  parseDataSource,
  parseFunction,
  parseLoop,
  parseCondition,
  parseProps,
  parseState,
  parseLifeCycles,
  replaceState,
  generateCSS,
  getText,
};
