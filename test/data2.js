module.exports ={
  "componentName": "Page",
  "fileName": "index",
  "id": "Shape_0",
  "props": {},
  "className": "box",
  "children": [{
    "componentName": "View",
    "id": "Shape_1",
    "props": {},
    "children": [{
      "componentName": "Image",
      "className": "img",
      "id": "img_1",
      "props": {
        "source": {
          "uri": "https://img.alicdn.com/tfs/TB1nRTLhGL7gK0jSZFBXXXZZpXa-200-200.png"
        },
        "style": {
          "width": 200,
          "height": 200
        }
      }
    }]
  }, {
    "componentName": "Text",
    "id": "Shape_2",
    "className": "text",
    "props": {
      "style": {
        "backgroundColor": "#ffffff",
        "width": "636px",
        "boxShadow": "0px 5px 20px rgba(0, 0, 0, 0.05)",
        "display": "flex",
        "alignItems": "flex-start",
        "flexDirection": "column",
        "borderRadius": "12px"
      }
    }
  }, {
    "componentName": "CategorySelect",
    "props": {
      "theme": "zc",
      "filterKey": "cateId1",
      "defaultValue": "0",
      "panelAttributes": {
        "shouldInitialRender": true
      },
      "dataSource": [{
        "value": 1,
        "name": "全部1",
        "count": 10
      }, {
        "value": 2,
        "name": "全部2",
        "count": 10
      }, {
        "value": 3,
        "name": "全部3",
        "count": 10
      }, {
        "value": 4,
        "name": "全部4",
        "count": 10
      }, {
        "value": 5,
        "name": "全部5",
        "count": 10
      }]
    },
    "children": []
  }, {
    "componentName": "Text",
    "className": "text2",
    "id": "Shape_3",
    "props": {},
    "text": "test"
  }]
}