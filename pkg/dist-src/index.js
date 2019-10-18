function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

export default
/*#__PURE__*/
(function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var __deps__, __imports__, _imports__$grommet, Box, Button, Stack, _imports__$utils, React, _, icons, CodeEditor, napi, iconSize, _view, icon, preview, view, edit;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            __deps__ = _ref.__deps__, __imports__ = _ref.__imports__;
            _imports__$grommet = __imports__.grommet, Box = _imports__$grommet.Box, Button = _imports__$grommet.Button, Stack = _imports__$grommet.Stack;
            _imports__$utils = __imports__.utils, React = _imports__$utils.React, _ = _imports__$utils.lodash, icons = _imports__$utils.icons, CodeEditor = _imports__$utils.CodeEditor;
            napi = __deps__.napi, iconSize = __deps__.iconSize;

            _view = function _view(_ref3) {
              var size = _ref3.size,
                  mode = _ref3.mode;
              return function (_ref4) {
                var node = _ref4.node;

                var _React$useState = React.useState(),
                    _React$useState2 = _slicedToArray(_React$useState, 2),
                    flipped = _React$useState2[0],
                    setFlipped = _React$useState2[1];

                var activeSide = flipped ? 'back' : 'front';

                var value = _.get(node, "sides.flashcard.".concat(activeSide, ".content"));

                var background = _.get(node, 'sides.flashcard.background', {
                  color: 'black',
                  opacity: 'strong'
                });

                return React.createElement(Box, {
                  fill: true,
                  align: "center",
                  justify: "center",
                  pad: "small"
                }, React.createElement(Box, {
                  fill: true,
                  align: "center",
                  justify: "center",
                  round: "small",
                  background: background,
                  overflow: "scroll"
                }, mode === 'view' && React.createElement(Box, {
                  pad: "small",
                  fill: "horizontal"
                }, React.createElement(Button, {
                  plain: true,
                  icon: React.createElement(icons.Refresh, {
                    color: "control"
                  }),
                  label: activeSide,
                  onClick: function onClick() {
                    return setFlipped(!flipped);
                  }
                })), React.createElement(Box, {
                  fill: true,
                  align: "center",
                  justify: "center",
                  pad: "small",
                  overflow: "scroll"
                }, React.createElement(CodeEditor, {
                  key: activeSide,
                  value: value,
                  onChange: function onChange(newValue) {
                    return napi.updateNodeSide(node, "flashcard/".concat(activeSide), {
                      content: newValue
                    });
                  },
                  options: {
                    size: size,
                    language: null
                  }
                }))));
              };
            };

            icon = function icon(_ref5) {
              var node = _ref5.node;
              return React.createElement(Box, {
                fill: true,
                align: "center",
                justify: "center"
              }, React.createElement(Stack, null, React.createElement(Box, {
                fill: true,
                align: "center",
                justify: "center"
              }, React.createElement(icons.Note, {
                size: iconSize
              })), React.createElement(Box, {
                fill: true,
                align: "center",
                justify: "center"
              }, React.createElement(icons.Refresh, {
                size: "small"
              }))));
            };

            preview = _view({
              size: 'small',
              mode: 'preview'
            });
            view = _view({
              size: 'medium',
              mode: 'view'
            });
            edit = view;
            return _context.abrupt("return", {
              modes: {
                icon: icon,
                preview: preview,
                view: view,
                edit: edit
              }
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
})();