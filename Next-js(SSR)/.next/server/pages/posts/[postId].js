"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/posts/[postId]";
exports.ids = ["pages/posts/[postId]"];
exports.modules = {

/***/ "./pages/posts/[postId].js":
/*!*********************************!*\
  !*** ./pages/posts/[postId].js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n// import { useRouter } from \"next/router\";\nfunction Post({ posts  }) {\n    // const router = useRouter();\n    // if (router.isFallback) {\n    //   return <h1> Loading... </h1>;\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    posts.id,\n                    \" \",\n                    posts.title\n                ]\n            }, void 0, true, {\n                fileName: \"/home/akshaypatel/Dekstop/Simform/NEXT-JS/Next-js(SSR)/pages/posts/[postId].js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: posts.body\n            }, void 0, false, {\n                fileName: \"/home/akshaypatel/Dekstop/Simform/NEXT-JS/Next-js(SSR)/pages/posts/[postId].js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\nasync function getStaticPaths() {\n    // const response = await fetch(\"https://jsonplaceholder.typicode.com/posts\");\n    // const data = await response.json();\n    // const paths = data.map((posts) => {\n    //   return {\n    //     fallback: true,\n    //     params: {\n    //       postId: `${posts.id}`,\n    //     },\n    //   };\n    // });\n    return {\n        paths: [\n            {\n                params: {\n                    postId: \"1\"\n                }\n            },\n            {\n                params: {\n                    postId: \"2\"\n                }\n            },\n            {\n                params: {\n                    postId: \"3\"\n                }\n            }, \n        ],\n        // paths,\n        fallback: true\n    };\n}\nasync function getStaticProps(context) {\n    const { params  } = context;\n    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);\n    const data = await response.json();\n    if (!data.id) {\n        return {\n            notFound: true\n        };\n    }\n    console.log(`Generating page for /posts${params.postId}`);\n    return {\n        props: {\n            posts: data\n        },\n        revalidate: 3\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bcG9zdElkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBREEsMkNBQTJDO0FBQzNDLFNBQVNBLElBQUksQ0FBQyxFQUFFQyxLQUFLLEdBQUUsRUFBRTtJQUN2Qiw4QkFBOEI7SUFFOUIsMkJBQTJCO0lBQzNCLGtDQUFrQztJQUNsQyxJQUFJO0lBRUoscUJBQ0U7OzBCQUNFLDhEQUFDQyxJQUFFOztvQkFDQUQsS0FBSyxDQUFDRSxFQUFFO29CQUFDLEdBQUM7b0JBQUNGLEtBQUssQ0FBQ0csS0FBSzs7Ozs7O29CQUNwQjswQkFDTCw4REFBQ0MsR0FBQzswQkFBRUosS0FBSyxDQUFDSyxJQUFJOzs7OztvQkFBSzs7b0JBQ2xCLENBQ0g7Q0FDSDtBQUNELGlFQUFlTixJQUFJLEVBQUM7QUFFYixlQUFlTyxjQUFjLEdBQUc7SUFDckMsOEVBQThFO0lBQzlFLHNDQUFzQztJQUV0QyxzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLFNBQVM7SUFDVCxPQUFPO0lBQ1AsTUFBTTtJQUVOLE9BQU87UUFDTEMsS0FBSyxFQUFFO1lBQ0w7Z0JBQ0VDLE1BQU0sRUFBRTtvQkFBRUMsTUFBTSxFQUFFLEdBQUc7aUJBQUU7YUFDeEI7WUFDRDtnQkFDRUQsTUFBTSxFQUFFO29CQUFFQyxNQUFNLEVBQUUsR0FBRztpQkFBRTthQUN4QjtZQUNEO2dCQUNFRCxNQUFNLEVBQUU7b0JBQUVDLE1BQU0sRUFBRSxHQUFHO2lCQUFFO2FBQ3hCO1NBQ0Y7UUFDRCxTQUFTO1FBQ1RDLFFBQVEsRUFBRSxJQUFJO0tBQ2YsQ0FBQztDQUNIO0FBRU0sZUFBZUMsY0FBYyxDQUFDQyxPQUFPLEVBQUU7SUFDNUMsTUFBTSxFQUFFSixNQUFNLEdBQUUsR0FBR0ksT0FBTztJQUMxQixNQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUMxQixDQUFDLDJDQUEyQyxFQUFFTixNQUFNLENBQUNDLE1BQU0sQ0FBQyxDQUFDLENBQzlEO0lBQ0QsTUFBTU0sSUFBSSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBSSxFQUFFO0lBRWxDLElBQUksQ0FBQ0QsSUFBSSxDQUFDYixFQUFFLEVBQUU7UUFDWixPQUFPO1lBQ0xlLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQztLQUNIO0lBRURDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUMsMEJBQTBCLEVBQUVYLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTFELE9BQU87UUFDTFcsS0FBSyxFQUFFO1lBQ0xwQixLQUFLLEVBQUVlLElBQUk7U0FDWjtRQUNETSxVQUFVLEVBQUUsQ0FBQztLQUNkLENBQUM7Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLXdvcmxkLy4vcGFnZXMvcG9zdHMvW3Bvc3RJZF0uanM/YzI0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmZ1bmN0aW9uIFBvc3QoeyBwb3N0cyB9KSB7XG4gIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIC8vIGlmIChyb3V0ZXIuaXNGYWxsYmFjaykge1xuICAvLyAgIHJldHVybiA8aDE+IExvYWRpbmcuLi4gPC9oMT47XG4gIC8vIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDI+XG4gICAgICAgIHtwb3N0cy5pZH0ge3Bvc3RzLnRpdGxlfVxuICAgICAgPC9oMj5cbiAgICAgIDxwPntwb3N0cy5ib2R5fTwvcD5cbiAgICA8Lz5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c1wiKTtcbiAgLy8gY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAvLyBjb25zdCBwYXRocyA9IGRhdGEubWFwKChwb3N0cykgPT4ge1xuICAvLyAgIHJldHVybiB7XG4gIC8vICAgICBmYWxsYmFjazogdHJ1ZSxcbiAgLy8gICAgIHBhcmFtczoge1xuICAvLyAgICAgICBwb3N0SWQ6IGAke3Bvc3RzLmlkfWAsXG4gIC8vICAgICB9LFxuICAvLyAgIH07XG4gIC8vIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IFtcbiAgICAgIHtcbiAgICAgICAgcGFyYW1zOiB7IHBvc3RJZDogXCIxXCIgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhcmFtczogeyBwb3N0SWQ6IFwiMlwiIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXJhbXM6IHsgcG9zdElkOiBcIjNcIiB9LFxuICAgICAgfSxcbiAgICBdLFxuICAgIC8vIHBhdGhzLFxuICAgIGZhbGxiYWNrOiB0cnVlLFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICBjb25zdCB7IHBhcmFtcyB9ID0gY29udGV4dDtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLyR7cGFyYW1zLnBvc3RJZH1gXG4gICk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgaWYgKCFkYXRhLmlkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdEZvdW5kOiB0cnVlLFxuICAgIH07XG4gIH1cblxuICBjb25zb2xlLmxvZyhgR2VuZXJhdGluZyBwYWdlIGZvciAvcG9zdHMke3BhcmFtcy5wb3N0SWR9YCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHM6IGRhdGEsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAzLFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0cyIsImgyIiwiaWQiLCJ0aXRsZSIsInAiLCJib2R5IiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsInBhcmFtcyIsInBvc3RJZCIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwibm90Rm91bmQiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJyZXZhbGlkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[postId].js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[postId].js"));
module.exports = __webpack_exports__;

})();