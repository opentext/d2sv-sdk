"use strict";(self.webpackChunkd2sv_sdk_builder=self.webpackChunkd2sv_sdk_builder||[]).push([[103],{5680:(e,a,i)=>{i.d(a,{xA:()=>c,yg:()=>u});var t=i(6540);function n(e,a,i){return a in e?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i,e}function s(e,a){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),i.push.apply(i,t)}return i}function o(e){for(var a=1;a<arguments.length;a++){var i=null!=arguments[a]?arguments[a]:{};a%2?s(Object(i),!0).forEach((function(a){n(e,a,i[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))}))}return e}function l(e,a){if(null==e)return{};var i,t,n=function(e,a){if(null==e)return{};var i,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)i=s[t],a.indexOf(i)>=0||(n[i]=e[i]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)i=s[t],a.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var r=t.createContext({}),d=function(e){var a=t.useContext(r),i=a;return e&&(i="function"==typeof e?e(a):o(o({},a),e)),i},c=function(e){var a=d(e.components);return t.createElement(r.Provider,{value:a},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var i=e.components,n=e.mdxType,s=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=d(i),m=n,u=g["".concat(r,".").concat(m)]||g[m]||p[m]||s;return i?t.createElement(u,o(o({ref:a},c),{},{components:i})):t.createElement(u,o({ref:a},c))}));function u(e,a){var i=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=i.length,o=new Array(s);o[0]=m;var l={};for(var r in a)hasOwnProperty.call(a,r)&&(l[r]=a[r]);l.originalType=e,l[g]="string"==typeof e?e:n,o[1]=l;for(var d=2;d<s;d++)o[d]=i[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,i)}m.displayName="MDXCreateElement"},9215:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=i(8168),n=(i(6540),i(5680));const s={sidebar_position:3.03,sidebar_label:"D2SV Custom Dialogs(D2FS) sample",description:"D2FS dialogs with field documentation, dialog-chaining"},o="D2SV Custom Dialogs(D2FS) sample",l={unversionedId:"general/samples/3_03_custom_dialog",id:"general/samples/3_03_custom_dialog",title:"D2SV Custom Dialogs(D2FS) sample",description:"D2FS dialogs with field documentation, dialog-chaining",source:"@site/articles/general/samples/3_03_custom_dialog.md",sourceDirName:"general/samples",slug:"/general/samples/3_03_custom_dialog",permalink:"/d2sv-sdk/25.2.0/general/samples/3_03_custom_dialog",draft:!1,tags:[],version:"current",sidebarPosition:3.03,frontMatter:{sidebar_position:3.03,sidebar_label:"D2SV Custom Dialogs(D2FS) sample",description:"D2FS dialogs with field documentation, dialog-chaining"},sidebar:"general",previous:{title:"D2SV client to server logging",permalink:"/d2sv-sdk/25.2.0/general/samples/3_02_client_to_server_logging"},next:{title:"D2SV Read-Only Permission View Sample",permalink:"/d2sv-sdk/25.2.0/general/samples/3_04_read_only_permission"}},r={},d=[{value:"Instruction to try out the sample",id:"instruction-to-try-out-the-sample",level:3},{value:"Show advance properties",id:"show-advance-properties",level:4},{value:"Preview Dialog Fields",id:"preview-dialog-fields",level:4},{value:"Source code structure",id:"source-code-structure",level:3},{value:"Files and their purpose",id:"files-and-their-purpose",level:4},{value:"Java Classes",id:"java-classes",level:6},{value:"Dialog form definition",id:"dialog-form-definition",level:6},{value:"Custom dialog menu configuration in back-end",id:"custom-dialog-menu-configuration-in-back-end",level:6},{value:"Dialog state method override",id:"dialog-state-method-override",level:6}],c={toc:d},g="wrapper";function p(e){let{components:a,...i}=e;return(0,n.yg)(g,(0,t.A)({},c,i,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"d2sv-custom-dialogsd2fs-sample"},"D2SV Custom Dialogs(D2FS) sample"),(0,n.yg)("p",null,"D2 Custom Dialog sample provides an option to modify the metadata for a document with any available properties page created in D2-Config.\nAs out of the box, the document metadata can be modified only using the properties page which is resolved after configuration matrix against the context."),(0,n.yg)("p",null,"This sample shows"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"How to define a D2 Dialog service plugin which implements ID2fsPlugin."),(0,n.yg)("li",{parentName:"ul"},"How to define a D2FS state method to make dialog chaining as context less. So that the last step ",(0,n.yg)("inlineCode",{parentName:"li"},"Submit")," will be performed on OOTB property dialog service instead of original dialog service.")),(0,n.yg)("h3",{id:"instruction-to-try-out-the-sample"},"Instruction to try out the sample"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Build the plugin using ",(0,n.yg)("inlineCode",{parentName:"li"},"npm run build")," from SDK workspace root."),(0,n.yg)("li",{parentName:"ul"},"Copy ",(0,n.yg)("inlineCode",{parentName:"li"},"D2SV-Custom-Dialogs-1.0.0.jar")," from 'dist' folder in workspace root and paste it inside ",(0,n.yg)("inlineCode",{parentName:"li"},"WEB-INF/lib")," folder of a deployed D2 Smartview application."),(0,n.yg)("li",{parentName:"ul"},"Restart application server on which D2 Smartview is deployed."),(0,n.yg)("li",{parentName:"ul"},"Open D2-Config web application in browser, login and then create few properties page configuration."),(0,n.yg)("li",{parentName:"ul"},"Login into D2-Smartview and navigate to any Doclist widget view.")),(0,n.yg)("h4",{id:"show-advance-properties"},"Show advance properties"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Select an object and locate & click menu item ",(0,n.yg)("inlineCode",{parentName:"li"},"Show advance properties")," from the selection toolbar to open ",(0,n.yg)("inlineCode",{parentName:"li"},"Selective property page view")," dialog."),(0,n.yg)("li",{parentName:"ul"},"In the ",(0,n.yg)("inlineCode",{parentName:"li"},"Select view")," dropdown, choose any property page name and click ",(0,n.yg)("inlineCode",{parentName:"li"},"Show")," button."),(0,n.yg)("li",{parentName:"ul"},"The dialog should show selected object's metadata as per the selected property page name.")),(0,n.yg)("h4",{id:"preview-dialog-fields"},"Preview Dialog Fields"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Select an object and locate & click menu item ",(0,n.yg)("inlineCode",{parentName:"li"},"Preview Dialog Fields")," from the selection toolbar to open ",(0,n.yg)("inlineCode",{parentName:"li"},"Preview Dialog Fields")," dialog."),(0,n.yg)("li",{parentName:"ul"},"The dialog should show dialog fields that are supported with examples including examples for Java assistance support.")),(0,n.yg)("h3",{id:"source-code-structure"},"Source code structure"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"D2SV-Custom-Dialogs\n|\n|   pom.xml\n|   \n+---src\n|   +---main\n|   |    +---java\n|   |    |   \\---com\n|   |    |       +---emc\n|   |    |       |       D2PluginVersion.java\n|   |    |       |       \n|   |    |       \\---opentext\n|   |    |           \\---d2\n|   |    |               +---rest\n|   |    |               |   \\---context\n|   |    |               |       \\---jc\n|   |    |               |               PluginRestConfig_D2SVDialogs.java\n|   |    |               |               \n|   |    |               \\---smartview\n|   |    |                   \\---d2svdialogs\n|   |    |                       |   D2SVDialogsPlugin.java\n|   |    |                       |   \n|   |    |                       +---api\n|   |    |                       |       D2SVDialogsVersion.java\n|   |    |                       |       \n|   |    |                       +---dialogs\n|   |    |                       |       SelectivePropertyDisplay.java\n|   |    |                       |       PreviewDialogFields.java\n|   |    |                       |       \n|   |    |                       +---assistance\n|   |    |                       |       CountryAssistance.java\n|   |    |                       |       StateAssistance.java\n|   |    |                       |       CityAssistance.java\n|   |    |                       |       RadioFieldAssistance.java\n|   |    |                       |       LanguageAssistance.java\n|   |    |                           \\---utils\n|   |    |                       |           DataUtils.java\n|   |    |                       | \n|   |    |                       +---rest\n|   |    |                       |       package-info.java\n|   |    |                       |       \n|   |    |                       \\---webfs\n|   |    |                           \\---dialog\n|   |    |                                   D2DialogServicePlugin.java\n|   |    |                                   \n|   |    +---resources\n|   |    |   |   D2Plugin.properties\n|   |    |   |   d2svdialogs-version.properties\n|   |    |   |   \n|   |    |   +---smartview\n|   |    |   |       SmartView.properties\n|   |    |   |       \n|   |    |   +---strings\n|   |    |   |   +---dialog\n|   |    |   |   |   \\---SelectivePropertyDisplay\n|   |    |   |   |           SelectivePropertyDisplay_en.properties\n|   |    |   |   |   \\---PreviewDialogFields\n|   |    |   |   |           PreviewDialogFields_en.properties\n|   |    |   |   |           \n|   |    |   |   \\---menu\n|   |    |   |       \\---MenuContext\n|   |    |   |               MenuContext_en.properties\n|   |    |   |               \n|   |    |   \\---xml\n|   |    |       +---dialog\n|   |    |       |       SelectivePropertyDisplay.xml\n|   |    |       |       PreviewDialogFields.xml\n|   |    |       |       \n|   |    |       \\---unitymenu\n|   |    |               MenuContextDelta.xml\n|   |    |               \n|   |    \\---smartview\n|   |        |   .csslintrc\n|   |        |   .eslintrc-html.yml\n|   |        |   .eslintrc.yml\n|   |        |   .npmrc\n|   |        |   config-editor.js\n|   |        |   d2svdialogs.setup.js\n|   |        |   Gruntfile.js\n|   |        |   package.json\n|   |        |   server.conf.js\n|   |        |   \n|   |        +---src\n|   |        |   |   component.js\n|   |        |   |   config-build.js\n|   |        |   |   d2svdialogs-extensions.json\n|   |        |   |   d2svdialogs-init.js\n|   |        |   |   Gruntfile.js\n|   |        |   |   \n|   |        |   +---bundles\n|   |        |   |       d2svdialogs-bundle.js\n|   |        |   |       \n|   |        |   +---dialogs\n|   |        |   |   \\---d2fs\n|   |        |   |           context.less.d2fs.state.method.js\n|   |        |   |           \n|   |        |   +---extensions\n|   |        |   |       dialog.state.methods.js\n|   |        |   |       \n|   |        |   +---test\n|   |        |   |       extensions.spec.js\n|   |        |   |       \n|   |        |   \\---utils\n|   |        |       |   startup.js\n|   |        |       |   \n|   |        |       \\---theme\n|   |        |           |   action.icons.js\n|   |        |           |   \n|   |        |           \\---action_icons\n|   |        |                   action_sample_icon.svg\n|   |        |                   \n|   |        \\---test\n|   |                Gruntfile.js\n|   |                karma.conf.js\n|   |                \n|   \\---test\n|       +---java    \n|              D2SVDialogsPlugintest.java\n|              D2SVDialogsVersiontest.java\n|\n\\---target\n")),(0,n.yg)("h4",{id:"files-and-their-purpose"},"Files and their purpose"),(0,n.yg)("p",null,"Following are the list of function oriented source files and their purpose. Other source files present within the plugin are part of\ncommon infrastructure code and explained in ",(0,n.yg)("a",{parentName:"p",href:"../understand.d2sv.plugin"},"Understanding D2SV plugin project"),"."),(0,n.yg)("h6",{id:"java-classes"},"Java Classes"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"src/main/java/com/opentext/d2/smartview/d2svdialogs/dialogs/SelectivePropertyDisplay.java - Dialog class which implements ID2Dialog to serve the dialog for selecting the properties page configuration."),(0,n.yg)("li",{parentName:"ul"},"src/main/java/com/opentext/d2/smartview/d2svdialogs/webfs/dialog/D2DialogServicePlugin.java - Dialog service class which implements ID2fsPlugin interface  for validating the dialog request."),(0,n.yg)("li",{parentName:"ul"},"src/main/java/com/opentext/d2/smartview/d2svdialogs/dialogs/PreviewDialogFields.java - Dialog class which implements ID2Dialog to serve the dialog for previewing the dialog fields."),(0,n.yg)("li",{parentName:"ul"},"src/main/java/com/opentext/d2/smartview/d2svdialogs/assistance/utils/DataUtils.java - Data utility class to retrieve sample data for java assistance example implementation."),(0,n.yg)("li",{parentName:"ul"},"src/main/java/com/opentext/d2/smartview/d2svdialogs/assistance/CountryAssistance.java - Assistance class which implements IJavaAssistance to serve the data for Java assistance to display sample country data."),(0,n.yg)("li",{parentName:"ul"},"src/main/java/com/opentext/d2/smartview/d2svdialogs/assistance/StatesAssistance.java - Assistance class which implements IJavaAssistance to serve the data for states field based on selected country."),(0,n.yg)("li",{parentName:"ul"},"src/main/java/com/opentext/d2/smartview/d2svdialogs/assistance/CityAssistance.java - Assistance class which implements IJavaAssistance to serve the data for city field based on multiple selected states in the dialog."),(0,n.yg)("li",{parentName:"ul"},"src/test/java/D2SVDialogsPluginTest.java - Contains unit tests for the ",(0,n.yg)("inlineCode",{parentName:"li"},"D2SVDialogsPlugin")," class to verify its behavior and ensure proper integration and functionality of the dialog service within the system."),(0,n.yg)("li",{parentName:"ul"},"src/test/java/D2SVDialogsVersionTest.java - Contains unit tests for the D2SVDialogsVersion class to validate its behavior and ensure proper version handling and functionality within the dialog service system")),(0,n.yg)("h6",{id:"dialog-form-definition"},"Dialog form definition"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},'src/main/resources/xml/dialog/SelectivePropertyDisplay.xml - Defines the form structure for rendering "SelectivePropertyDisplay" dialog. The same file will be processed in "src/main/java/com/opentext/d2/smartview/d2svdialogs/dialogs/SelectivePropertyDisplay.java"'),(0,n.yg)("li",{parentName:"ul"},"src/main/resources/strings/dialog/SelectivePropertyDisplay/SelectivePropertyDisplay_en.properties - Label associated with the dialog."),(0,n.yg)("li",{parentName:"ul"},'src/main/resources/xml/dialog/PreviewDialogFields.xml - Defines the form structure for rendering "PreviewDialogFields" dialog. The same file will be processed in "src/main/java/com/opentext/d2/smartview/d2svdialogs/dialogs/PreviewDialogFields.java"'),(0,n.yg)("li",{parentName:"ul"},"src/main/resources/strings/dialog/PreviewDialogFields/PreviewDialogFields_en.properties - Label associated with the dialog.")),(0,n.yg)("h6",{id:"custom-dialog-menu-configuration-in-back-end"},"Custom dialog menu configuration in back-end"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"src/main/resources/strings/menu/MenuContext/MenuContext_en.properties - Labels associated with the dynamically configured menu."),(0,n.yg)("li",{parentName:"ul"},"src/main/resources/xml/unitymenu/MenuContextDelta.xml - The menu definition file that dynamically adds a new type(MenuContext) of menu for the D2FS ",(0,n.yg)("inlineCode",{parentName:"li"},"D2MenuService")," to discover and return for D2 Smartview.")),(0,n.yg)("h6",{id:"dialog-state-method-override"},"Dialog state method override"),(0,n.yg)("p",null,'As part of dialog state customization added extension for dialog state methods.\nThis state method will be resolved based on "SelectivePropertyDisplay" dialog name.\nIntension of having custom dialog state method to override the default behavior of dialog state.\nWith this override dialog state is decoupled between first form and second form. '),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},'src/main/smartview/src/dialogs/d2fs/context.less.d2fs.state.method.js - This is a client side JavaScript file extends "d2/sdk/controls/dialogs/generic/d2fs.state.method". Dialog context is decoupled by having dummy override for "setDialogContextForm()" method.'),(0,n.yg)("li",{parentName:"ul"},"src/main/smartview/src/extensions/dialog.state.methods.js - This file is having rule for resolving the dialog state method based on dialog name. "),(0,n.yg)("li",{parentName:"ul"},"src/main/smartview/src/d2svdialogs-extensions.json - Adding the rule for dialog.state.method.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'  "d2/sdk/controls/dialogs/generic/dialog.state.methods": {\n    "extensions": {\n      "d2svdialogs": [\n        "d2svdialogs/extensions/dialog.state.methods"\n      ]\n    }\n  }\n')))}p.isMDXComponent=!0}}]);