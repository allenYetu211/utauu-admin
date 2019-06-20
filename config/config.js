const path = require("path");
const paths = require("./paths");
const tsImportPluginFactory = require("ts-import-plugin");

exports.antdTransformer = tsImportPluginFactory({
  libraryName: "antd",
  libraryDirectory: "lib",
  style: true,
});

exports.antdMobileTransformer = tsImportPluginFactory({
  libraryName: "antd-mobile",
  libraryDirectory: "lib",
  style: "css",
});

exports.alias = {
  "global@action": path.resolve(paths.appconfSrc, "action"),
  "global@assets": path.resolve(paths.appSrc, "assets"),
  "global@components": path.resolve(paths.appSrc, "components"),
  "global@config": path.resolve(paths.appSrc, "config"),
  "global@http": path.resolve(paths.appSrc, "http"),
  "global@i18n": path.resolve(paths.appSrc, "i18n"),
  "global@page": path.resolve(paths.appSrc, "page"),
  "global@router": path.resolve(paths.appSrc, "router"),
  "global@store": path.resolve(paths.appSrc, "store"),
  "global@type": path.resolve(paths.appSrc, "type"),
  "global@utils": path.resolve(paths.appSrc, "utils"),
  "global@ui": path.resolve(paths.appSrc, "components", "ui"),

  "react-native": "react-native-web",
};

exports.modifyVars = {
  // 颜色
  "primary-color": "#52C9A0", // 主色
  "border-radius-base": "4px",
  "success-color": "#52C41A", // 成功色
  "warning-color": "#5371FF", // 警告包
  "error-color": "#F5222D", // 错误色
  "body-background": "#FAFAFA", // 页面背影颜色
  // link coloe
  "link-color": "#52C9A0", // 链接的颜色
  "link-hover-color": "#5DDEB1", // 链接hover色
  "link-active-color": "#52C9A0", // 链接active色
};

module.exports = exports;
