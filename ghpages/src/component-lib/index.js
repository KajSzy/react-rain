/* eslint-disable */
import { useState, useRef, useEffect, createElement } from 'react';
import styled, { keyframes, css } from 'styled-components';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var falldown = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0%{\n    opacity: 0;\n    transform: translateY(0) rotate(0);\n  }\n  5%{\n    transform: translateY(5px) rotate(0);\n    opacity: 1;\n  }\n  95%{\n    transform: translateY(", "px) rotate(360deg);\n    opacity: 1;\n  }\n  100%{\n    opacity: 0;\n    transform : translateY(", "px) rotate(360deg);\n  }\n"], ["\n  0%{\n    opacity: 0;\n    transform: translateY(0) rotate(0);\n  }\n  5%{\n    transform: translateY(5px) rotate(0);\n    opacity: 1;\n  }\n  95%{\n    transform: translateY(", "px) rotate(360deg);\n    opacity: 1;\n  }\n  100%{\n    opacity: 0;\n    transform : translateY(", "px) rotate(360deg);\n  }\n"])), window.innerHeight - 5, window.innerHeight);
var animation = function (speed) { return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  animation: ", ";\n  animation-duration: ", ";\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n"], ["\n  animation: ", ";\n  animation-duration: ", ";\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n"])), falldown, speed + "s"); };
var FallDown = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", ";\n  position: absolute;\n  user-select: none;\n  z-index: 10;\n"], ["\n  ", ";\n  position: absolute;\n  user-select: none;\n  z-index: 10;\n"])), function (props) { return animation(props.speed); });
var templateObject_1, templateObject_2, templateObject_3;

var defaultEmojis = ["🤑", "💸", "💵", "💲"];
var getRandomInt = function (min, max) {
    if (min === void 0) { min = 0; }
    return Math.floor(Math.random() * max) + min;
};
var Rain = function (_a) {
    var _b = _a.emojis, emojis = _b === void 0 ? defaultEmojis : _b;
    var _c = useState(rerollPos()), position = _c[0], setPosition = _c[1];
    var fallingDownTime = useRef((Math.random() * 6) + 2);
    var getOneOfEmojis = function () {
        var index = getRandomInt(0, emojis.length);
        return emojis[index];
    };
    useEffect(function () {
        window.setInterval(function () {
            setPosition(rerollPos());
        }, fallingDownTime.current * 1000);
    }, []);
    function rerollPos() {
        var x = getRandomInt(15, document.body.getBoundingClientRect().width - 15);
        var y = getRandomInt(-10, -150);
        return [x, y];
    }
    return (createElement(FallDown, { speed: fallingDownTime.current, style: {
            left: position[0],
            top: position[1],
        } }, getOneOfEmojis()));
};

export { Rain };
