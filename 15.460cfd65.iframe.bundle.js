"use strict";(self.webpackChunknextjs_wordpress_starter=self.webpackChunknextjs_wordpress_starter||[]).push([[15],{46015:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>BlockCover});var react=__webpack_require__(67294),Blocks=(__webpack_require__(15218),__webpack_require__(21249),__webpack_require__(23123),__webpack_require__(74916),__webpack_require__(26699),__webpack_require__(32023),__webpack_require__(19601),__webpack_require__(79443)),Hero=__webpack_require__(82194),formatFocalPoint=__webpack_require__(25741),jsx_runtime=__webpack_require__(85893);react.createElement;function BlockCover(_ref){var _style$color,media=_ref.media,innerBlocks=_ref.innerBlocks,align=media.align,anchor=media.anchor,className=media.className,contentPosition=media.contentPosition,customGradient=media.customGradient,dimRatio=media.dimRatio,focalPoint=media.focalPoint,gradientHex=media.gradientHex,hasParallax=media.hasParallax,isRepeated=media.isRepeated,minHeight=media.minHeight,minHeightUnit=media.minHeightUnit,overlayColorHex=media.overlayColorHex,style=media.style,url=media.url,overlayColor=overlayColorHex||"#000000",overlayGradient=customGradient||gradientHex,overlayOpacity=url?dimRatio/100:1,coverStyle={};overlayColor&&!overlayGradient&&(coverStyle.backgroundColor=overlayColor),overlayGradient&&(coverStyle.background=overlayGradient),minHeight&&"vh"!==minHeightUnit&&(coverStyle.minHeight=minHeight+"px");var newFocalPoint=(0,formatFocalPoint.Z)(focalPoint),_useState=(0,react.useState)(),newInnerBlocks=_useState[0],setInnerBlocks=_useState[1];return(0,react.useEffect)((function(){setInnerBlocks(null!=innerBlocks&&innerBlocks.length?innerBlocks.map((function(block){var _block$attributes$cla,_block$attributes,_block$attributes2;return(null!==(_block$attributes$cla=null==block||null===(_block$attributes=block.attributes)||void 0===_block$attributes?void 0:_block$attributes.className)&&void 0!==_block$attributes$cla?_block$attributes$cla:"").split(" ").includes("relative")||(block.attributes=Object.assign({},null==block?void 0:block.attributes,{className:((null==block||null===(_block$attributes2=block.attributes)||void 0===_block$attributes2?void 0:_block$attributes2.className)||"")+" relative z-10"})),block})):[])}),[innerBlocks]),url||overlayColorHex||overlayGradient?(0,jsx_runtime.jsx)(Hero.Z,{align,contentAlign:contentPosition,backgroundImage:{url},className,duotone:null==style||null===(_style$color=style.color)||void 0===_style$color?void 0:_style$color.duotone,fixed:hasParallax,focalPoint:newFocalPoint,fullHeight:100===minHeight&&"vh"===minHeightUnit,id:anchor,overlayOpacity,repeat:isRepeated,style:coverStyle,children:!(null==newInnerBlocks||!newInnerBlocks.length)&&(0,jsx_runtime.jsx)(Blocks.Z,{blocks:newInnerBlocks})}):null}BlockCover.displayName="BlockCover",BlockCover.__docgenInfo={description:"Cover Block\n\nThe core Columns block from Gutenberg.\n\n@author WebDevStudios\n@param  {object}  props             The component properties.\n@param  {object}  props.media       Media props object.\n@param  {Array}   props.innerBlocks The array of inner blocks to display.\n@return {Element}                   The Cover component.",methods:[],displayName:"BlockCover",props:{media:{type:{name:"shape",value:{align:{name:"string",required:!1},anchor:{name:"string",required:!1},className:{name:"string",required:!1},contentPosition:{name:"string",required:!1},customGradient:{name:"string",required:!1},dimRatio:{name:"number",required:!1},focalPoint:{name:"shape",value:{x:{name:"string",required:!1},y:{name:"string",required:!1}},required:!1},gradientHex:{name:"string",required:!1},hasParallax:{name:"bool",required:!1},isRepeated:{name:"bool",required:!1},minHeight:{name:"number",required:!1},minHeightUnit:{name:"string",required:!1},overlayColorHex:{name:"string",required:!1},style:{name:"object",required:!1},url:{name:"string",required:!1}}},required:!1,description:""},innerBlocks:{type:{name:"arrayOf",value:{name:"shape",value:{name:{name:"string",required:!1},attributes:{name:"object",required:!1}}}},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/blocks/Gutenberg/BlockCover/BlockCover.js"]={name:"BlockCover",docgenInfo:BlockCover.__docgenInfo,path:"components/blocks/Gutenberg/BlockCover/BlockCover.js"})},25741:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>formatFocalPoint});__webpack_require__(54678);function formatFocalPoint(focalPoint){var _parseFloat,_parseFloat2,newFocalPoint={},x=null!==(_parseFloat=parseFloat((null==focalPoint?void 0:focalPoint.x)||".5"))&&void 0!==_parseFloat?_parseFloat:.5,y=null!==(_parseFloat2=parseFloat((null==focalPoint?void 0:focalPoint.y)||".5"))&&void 0!==_parseFloat2?_parseFloat2:.5;return newFocalPoint.x=100*x+"%",newFocalPoint.y=100*y+"%",newFocalPoint}}}]);