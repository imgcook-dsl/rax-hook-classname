module.exports = {
  "artboardImg": "https://img.alicdn.com/imgextra/i1/O1CN01ARDOZ61zCZZZaGUuO_!!6000000006678-2-tps-750-853.png",
  "rect": {
    "x": 0,
    "y": 0,
    "width": 750,
    "height": 853
  },
  "pluginVersion": "2.3.2",
  "componentName": "Block",
  "name": "编组 16",
  "reference": "sketch",
  "restore_id": "e8c4e031-2f01-4515-a7d7-913d8e664d3a",
  "props": {
    "style": {
      "position": "absolute",
      "top": 0,
      "left": 0,
      "bottom": 0,
      "right": 0
    },
    "className": "mod"
  },
  "id": "5449f4e0-441f-11eb-8f75-154381a9c89d",
  "children": [{
    "componentName": "Div",
    "id": "544a430a-441f-11eb-8f75-154381a9c89d",
    "props": {
      "style": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "flex-start",
        "paddingBottom": "214rpx",
        "width": "100%",
        "height": "100%",
        "position": "relative",
        "backgroundColor": "#FFFFFF",
        "borderTopLeftRadius": "24rpx",
        "borderTopRightRadius": "24rpx",
        "overflowY": "scroll"
      },
      "className": "box"
    },
    "rect": {
      "x": 0,
      "y": 0,
      "width": 750,
      "height": 853
    },
    "selfId": "F5C61AD8-E032-4D83-A144-64BAD1B5E85E",
    "children": [{
      "componentName": "Div",
      "id": "544a4309-441f-11eb-8f75-154381a9c89d",
      "props": {
        "style": {
          "display": "flex",
          "flexDirection": "row",
          "justifyContent": "space-around",
          "alignItems": "center",
          "paddingRight": "24rpx",
          "paddingLeft": "24rpx",
          "width": "750rpx",
          "height": "90rpx",
          "position": "relative",
          "backgroundColor": "#FFFFFF",
          "borderRadius": "24rpx"
        },
        "className": "hd"
      },
      "rect": {
        "x": 0,
        "y": 0,
        "width": 750,
        "height": 90
      },
      "selfId": "46CAB7BB-8053-4E84-AB3A-AD0766AE7156",
      "children": [{
        "componentName": "Div",
        "props": {},
        "children": [{
          "componentName": "Text",
          "id": "544a4308-441f-11eb-8f75-154381a9c89d",
          "props": {
            "style": {
              "fontWeight": 500,
              "fontSize": 36,
              "color": "{{this.state.selectedTab === this.item.key ? \"#ff0040\" : \"#111\"}}",
              "lineHeight": "50rpx",
              "whiteSpace": "nowrap"
            },
            "text": "选择直播预告",
            "lines": 1,
            "className": "title",
            "onClick": function onClick(e) {
              this.setState({
                selectedTab: this.item.key
              })
            }
          },
          "rect": {
            "x": 96,
            "y": 20,
            "width": 216,
            "height": 50
          },
          "selfId": "96AE2D4C-C07A-4AF6-9B6E-539B932665910"
        }, {
          "componentName": "Div",
          "props": {
            "style": {
              "width": "44rpx",
              "height": "4rpx",
              "position": "absolute",
              "left": "50%",
              "bottom": "-14rpx",
              "backgroundColor": "#ff0040",
              "borderRadius": 2,
              "transform": "translateX(-50%)"
            }
          },
          "condition": "{{this.state.selectedTab === this.item.key}}"
        }],
        "loop": "{{this.state.tabList}}"
      }]
    }, {
      "componentName": "Div",
      "props": {},
      "children": [{
        "componentName": "Div",
        "props": {},
        "condition": "{{this.state.list && this.state.list.length === 0}}"
      }, {
        "componentName": "Div",
        "props": {},
        "children": [{
          "componentName": "Text",
          "id": "544a4305-441f-11eb-8f75-154381a9c89d",
          "props": {
            "style": {
              "marginTop": "30rpx",
              "marginBottom": "30rpx",
              "marginLeft": "30rpx",
              "width": "720rpx",
              "height": "40rpx",
              "lineHeight": "40rpx",
              "color": "#111",
              "fontSize": "28rpx",
              "fontWeight": 400
            },
            "text": "选择一条预告推送到直播间",
            "lines": 1,
            "className": "title_2"
          },
          "rect": {
            "x": 30,
            "y": 120,
            "width": 336,
            "height": 40
          },
          "selfId": "CF584CE8-D4C0-40EB-99E5-7E09F5F5A57F0"
        }, {
          "componentName": "Div",
          "id": "544a4304-441f-11eb-8f75-154381a9c89d",
          "props": {
            "style": {
              "display": "flex",
              "flexDirection": "row",
              "justifyContent": "space-between",
              "alignItems": "center",
              "marginTop": "12rpx",
              "paddingRight": "29rpx",
              "paddingLeft": "30rpx",
              "width": "690rpx",
              "height": "102rpx",
              "position": "relative",
              "backgroundColor": "{{ this.state.selectedTrailer !== null && this.state.selectedTrailer.subscribeLiveId === this.item.subscribeLiveId ? \"#ffe6ec\": \"#f2f2f2\" }}",
              "borderRadius": "12rpx",
              "boxSizing": "border-box",
              "alignSelf": "center"
            },
            "onClick": function onClick(e) {
              const isSelected = this.state.selectedTrailer !== null && this.item.subscribeLiveId === this.state.selectedTrailer.subscribeLiveId;
              this.setState({
                selectedTrailer: isSelected ? null : this.item
              })
            }
          },
          "rect": {
            "x": 30,
            "y": 195,
            "width": 690,
            "height": 102
          },
          "selfId": "283E49C3-68A1-4914-8D9B-08E35FD315C2",
          "children": [{
            "componentName": "Div",
            "id": "44ad4d9c-beda-4801-9671-7240f39644bb",
            "props": {
              "style": {
                "display": "flex",
                "position": "absolute",
                "right": "0rpx",
                "bottom": "0rpx",
                "alignItems": "center",
                "flexDirection": "row",
                "justifyContent": "center",
                "width": "35rpx",
                "height": "35rpx"
              },
              "className": "title_4"
            },
            "rect": {
              "x": 685,
              "y": 375,
              "width": 35,
              "height": 35
            },
            "children": [{
              "componentName": "Image",
              "id": "544a4300-441f-11eb-8f75-154381a9c89d",
              "props": {
                "style": {
                  "position": "relative",
                  "width": "35rpx",
                  "height": "35rpx",
                  "overflow": "hidden"
                },
                "className": "icon",
                "autoScaling": false,
                "src": "https://img.alicdn.com/imgextra/i3/O1CN013ukhfV1HxtOvTP8wu_!!6000000000825-2-tps-72-70.png"
              },
              "rect": {
                "x": 685,
                "y": 375,
                "width": 35,
                "height": 35
              },
              "selfId": "C89FA1C5-DFC7-4DFB-9EAB-7E169C3CED80"
            }, {
              "componentName": "Image",
              "id": "544a1bf8-441f-11eb-8f75-154381a9c89d",
              "props": {
                "style": {
                  "position": "absolute",
                  "top": "18rpx",
                  "right": "4rpx",
                  "width": "14rpx",
                  "height": "11rpx"
                },
                "className": "icon_1",
                "autoScaling": false,
                "src": "https://img.alicdn.com/imgextra/i1/O1CN01f1Su8m1jWEj9MkDZa_!!6000000004555-2-tps-28-22.png"
              },
              "rect": {
                "x": 702,
                "y": 393,
                "width": 14,
                "height": 11
              },
              "selfId": "0C858D14-2956-4E1F-AD29-C24CC981C6E6"
            }],
            "condition": "{{this.state.selectedTrailer.subscribeLiveId === this.item.subscribeLiveId}}"
          }, {
            "componentName": "Text",
            "id": "544a4303-441f-11eb-8f75-154381a9c89d",
            "props": {
              "style": {
                "width": "400rpx",
                "height": "42rpx",
                "fontWeight": 500,
                "fontSize": 30,
                "color": "{{ this.state.selectedTrailer !== null && this.state.selectedTrailer.subscribeLiveId === this.item.subscribeLiveId ? \"#ff0040\": \"#110000\" }}",
                "lineHeight": "42rpx",
                "wordBreak": "break-all",
                "overflow": "hidden"
              },
              "lines": 1,
              "className": "title_3",
              "text": "{{this.item.title}}"
            },
            "rect": {
              "x": 60,
              "y": 224,
              "width": 230,
              "height": 42
            },
            "selfId": "986552CD-715E-4CDB-989F-AAF0F1EDDA0C0"
          }, {
            "componentName": "Text",
            "id": "544a4302-441f-11eb-8f75-154381a9c89d",
            "props": {
              "style": {
                "fontWeight": 400,
                "fontSize": 30,
                "color": "{{ this.state.selectedTrailer !== null && this.state.selectedTrailer.subscribeLiveId === this.item.subscribeLiveId ? \"#ff0040\": \"#110000\" }}",
                "lineHeight": "42rpx",
                "whiteSpace": "pre"
              },
              "lines": 1,
              "className": "word",
              "text": "{{this.item.startTime}}"
            },
            "rect": {
              "x": 453,
              "y": 224,
              "width": 238,
              "height": 42
            },
            "selfId": "2FBB74C4-CE1C-4D7A-AEFA-2612A1DB7E5B0"
          }],
          "smart": {
            "layerProtocol": {
              "repeat": {
                "type": "repeat",
                "repeatId": "160861869183637",
                "repeatIndex": "0"
              }
            }
          },
          "loop": "{{this.state.list}}"
        }, {
          "componentName": "Div",
          "id": "5449f4e3-441f-11eb-8f75-154381a9c89d",
          "props": {
            "style": {
              "display": "flex",
              "flexDirection": "row",
              "justifyContent": "center",
              "alignItems": "flex-start",
              "marginTop": "25rpx",
              "width": "750rpx",
              "height": "190rpx",
              "position": "fixed",
              "left": 0,
              "bottom": "0",
              "zIndex": 3,
              "backgroundColor": "#FFFFFF",
              "borderTopLeftRadius": "24rpx",
              "borderTopRightRadius": "24rpx",
              "boxShadow": " 0 5px 15px 0 #333"
            },
            "className": "main"
          },
          "rect": {
            "x": 0,
            "y": 663,
            "width": 750,
            "height": 190
          },
          "selfId": "8167CA87-9B62-4FC1-8492-9D11415071BB",
          "children": [{
            "componentName": "Div",
            "id": "5449f4e2-441f-11eb-8f75-154381a9c89d",
            "props": {
              "style": {
                "boxSizing": "border-box",
                "display": "flex",
                "alignItems": "center",
                "flexDirection": "row",
                "marginTop": "30rpx",
                "borderRadius": "40rpx",
                "paddingRight": "264rpx",
                "paddingLeft": "264rpx",
                "height": "80rpx",
                "boxShadow": "0 10rpx 20rpx 0 rgba(255,0,64,0.20)",
                "backgroundImage": "linear-gradient(90deg, #FF4775 0%, #FF0040 100%)"
              },
              "className": "block"
            },
            "rect": {
              "x": 75,
              "y": 693,
              "width": 600,
              "height": 80
            },
            "selfId": "CE3C9006-6742-4030-AD24-680F25054C06",
            "children": [{
              "componentName": "Text",
              "id": "5449f4e1-441f-11eb-8f75-154381a9c89d",
              "props": {
                "style": {
                  "lineHeight": "50rpx",
                  "whiteSpace": "nowrap",
                  "color": "#ffffff",
                  "fontSize": "36rpx",
                  "fontWeight": 500
                },
                "text": "推送",
                "lines": 1,
                "className": "text"
              },
              "rect": {
                "x": 339,
                "y": 707,
                "width": 72,
                "height": 50
              },
              "selfId": "FC9391DA-0617-49E5-9766-33D2D6DA3E680"
            }]
          }]
        }],
        "condition": "{{this.state.list && this.state.list.length > 0}}"
      }],
      "condition": "{{this.state.selectedTab === \"select\"}}"
    }, {
      "componentName": "Div",
      "props": {},
      "condition": "{{this.state.selectedTab === \"create\"}}",
      "children": [{
        "componentName": "Text",
        "id": "544a4305-441f-11eb-8f75-154381a9c89d",
        "props": {
          "style": {
            "marginTop": "30rpx",
            "marginBottom": "30rpx",
            "marginLeft": "30rpx",
            "width": "720rpx",
            "height": "40rpx",
            "lineHeight": "40rpx",
            "color": "#111",
            "fontSize": "28rpx",
            "fontWeight": 400
          },
          "text": "快速创建并在直播间推送一条直播预告",
          "lines": 1,
          "className": "title_2"
        },
        "rect": {
          "x": 30,
          "y": 120,
          "width": 336,
          "height": 40
        },
        "selfId": "CF584CE8-D4C0-40EB-99E5-7E09F5F5A57F0"
      }, {
        "componentName": "Div",
        "props": {
          "style": {
            "display": "flex",
            "flexDirection": "row",
            "marginLeft": "30rpx",
            "width": "688rpx",
            "height": "73rpx",
            "fontSize": "30rpx",
            "lineHeight": "73rpx",
            "borderBottom": "1rpx solid #F2F2F2"
          }
        },
        "children": [{
          "props": {
            "text": "直播标题",
            "style": {
              "fontSize": "30rpx",
              "color": "#666"
            }
          },
          "componentName": "Text"
        }, {
          "componentName": "TextInput",
          "props": {
            "style": {
              "width": "528rpx",
              "marginLeft": "40rpx"
            },
            "placeholder": "请输入"
          }
        }]
      }, {
        "componentName": "Div",
        "props": {
          "style": {
            "display": "flex",
            "flexDirection": "row",
            "marginLeft": "30rpx",
            "width": "688rpx",
            "height": "73rpx",
            "fontSize": "30rpx",
            "lineHeight": "73rpx",
            "borderBottom": "1rpx solid #F2F2F2"
          }
        },
        "children": [{
          "props": {
            "text": "直播时间",
            "style": {
              "fontSize": "30rpx",
              "color": "#666"
            }
          },
          "componentName": "Text"
        }, {
          "componentName": "TextInput",
          "props": {
            "type": "time",
            "style": {
              "width": "528rpx",
              "marginLeft": "40rpx"
            }
          }
        }]
      }, {
        "componentName": "Div",
        "props": {
          "style": {
            "display": "flex",
            "flexDirection": "row",
            "justifyContent": "center",
            "marginTop": "30rpx",
            "width": "750rpx"
          }
        },
        "children": [{
          "componentName": "Div",
          "id": "5449f4e2-441f-11eb-8f75-154381a9c89d",
          "props": {
            "style": {
              "display": "flex",
              "flexDirection": "row",
              "justifyContent": "center",
              "alignItems": "center",
              "width": "600rpx",
              "height": "80rpx",
              "backgroundImage": "linear-gradient(90deg, #FF4775 0%, #FF0040 100%)",
              "borderRadius": "40rpx",
              "boxShadow": "0 10rpx 20rpx 0 rgba(255,0,64,0.20)",
              "boxSizing": "border-box"
            },
            "className": "block"
          },
          "rect": {
            "x": 75,
            "y": 693,
            "width": 600,
            "height": 80
          },
          "selfId": "CE3C9006-6742-4030-AD24-680F25054C06",
          "children": [{
            "componentName": "Text",
            "id": "5449f4e1-441f-11eb-8f75-154381a9c89d",
            "props": {
              "style": {
                "lineHeight": "50rpx",
                "whiteSpace": "nowrap",
                "color": "#fff",
                "fontSize": "36rpx",
                "fontWeight": 500
              },
              "lines": 1,
              "className": "text",
              "text": "创建并推送预告"
            },
            "rect": {
              "x": 339,
              "y": 707,
              "width": 72,
              "height": 50
            },
            "selfId": "FC9391DA-0617-49E5-9766-33D2D6DA3E680"
          }]
        }]
      }]
    }]
  }],
  "imgcook": {
    "restore_id": "e8c4e031-2f01-4515-a7d7-913d8e664d3a"
  },
  "state": {
    "list": [{
      "iconUrl": "https://gw.alicdn.com/tfscom/i3/O1CN011lO6vl1nyg0TuDW_!!0-dgshop.jpg",
      "startTime": "2020-12-31 16:10",
      "subscribeLiveId": "292655339889",
      "title": "好几家好几家好几家好几家好几家好几家好几家好几家",
      "topic": "9bdd9d80-a549-4b59-8388-ade730f2a399"
    }, {
      "iconUrl": "https://gw.alicdn.com/tfscom/i4/O1CN011lO6vomuTzAKUNG_!!0-dgshop.jpg",
      "startTime": "2021-01-01 16:00",
      "subscribeLiveId": "292655339410",
      "title": "我是测试标题",
      "topic": "e97453a4-0ca8-4958-896f-9f4f7ab6954e"
    }, {
      "iconUrl": "https://gw.alicdn.com/tfscom/i4/O1CN01WH5TsV1lO6vgO1JU8_!!0-dgshop.jpg",
      "startTime": "2020-12-30 21:41",
      "subscribeLiveId": "292305130120",
      "title": "阿第三方",
      "topic": "0fd5e63d-7149-4299-a9f2-decaf362f1da"
    }, {
      "iconUrl": "https://gw.alicdn.com/tfscom/i4/O1CN01ehv1oT1lO6vifxV6F_!!0-dgshop.jpg",
      "startTime": "2020-12-29 21:39",
      "subscribeLiveId": "292018625329",
      "title": "ttt",
      "topic": "b50892ca-8a9e-43e6-8f5f-fe5f950917d0"
    }, {
      "iconUrl": "https://gw.alicdn.com/tfscom/i4/O1CN01xKlprn1lO6vjjjinX_!!0-dgshop.jpg",
      "startTime": "2020-12-23 21:35",
      "subscribeLiveId": "291706644275",
      "title": "阿斯顿发发",
      "topic": "c670d56d-e51e-4a04-9345-02ef53b97782"
    }, {
      "iconUrl": "https://gw.alicdn.com/tfscom/i1/O1CN01gK8oXK1lO6vlRKbqW_!!0-dgshop.jpg",
      "startTime": "2020-12-25 16:48",
      "subscribeLiveId": "292240714538",
      "title": "测试测试111",
      "topic": "d3eb9e90-2b91-43fe-b04b-15c4424c3cbb"
    }, {
      "iconUrl": "https://gw.alicdn.com/tfscom/i3/O1CN011lO6vkMj6uH7TLG_!!0-dgshop.jpg",
      "startTime": "2020-12-30 11:09",
      "subscribeLiveId": "291578153463",
      "title": "24242",
      "topic": "3cbd3894-e783-4778-863f-6de12cbb3c97"
    }, {
      "iconUrl": "https://gw.alicdn.com/tfscom/i4/O1CN01PilwgE1lO6vhUdeWP_!!0-dgshop.jpg",
      "startTime": "2020-12-25 14:21",
      "subscribeLiveId": "291816618021",
      "title": "22",
      "topic": "1a20ccee-f7c1-41fe-a2c5-f1b48d3b2053"
    }, {
      "iconUrl": "https://gw.alicdn.com/tfscom/i4/O1CN01PilwgE1lO6vhUdeWP_!!0-dgshop.jpg",
      "startTime": "2020-12-25 14:21",
      "subscribeLiveId": "2918166180321",
      "title": "22",
      "topic": "1a20ccee-f7c1-41fe-a2c5-f1b48d3b2053"
    }, {
      "iconUrl": "https://gw.alicdn.com/tfscom/i4/O1CN01PilwgE1lO6vhUdeWP_!!0-dgshop.jpg",
      "startTime": "2020-12-25 14:21",
      "subscribeLiveId": "291816618456",
      "title": "22",
      "topic": "1a20ccee-f7c1-41fe-a2c5-f1b48d3b2053"
    }],
    "selectedTrailer": null,
    "tabList": [{
      "title": "选择直播预告",
      "key": "select"
    }, {
      "title": "快速创建预告",
      "key": "create"
    }],
    "selectedTab": "select"
  }
}