---
sidebar_position: 1
title: SwiftUI Generator
---

## `FigGen` - Figma to SwiftUI Generator

_"This is the best figgen plugin ever!"_ - _Everyone_

This is an extension of the popular Figma to Code plugin.

Adds support for missing features and supplies many fixes needed to export our design system here @dataingio.

Only SwiftUI is currently supported. All other renderers have been disabled.

## Render as a Single File

The generator can be configured to render all code as a single file. The file can be copy-pasted into a single Swift file that should compile without any additional dependencies.

This is useful for testing and observing components during design.

The following generator settings must be set:

- **Effect Style Output** `Render in Place`
- **Custom Fonts** `System (dynamic)`
- **Text Style Output** `Render in Place`
- **Component Instances** `Deep Render`
- **Node Parent** `Crawl Document`
- **Render Mode** `Preview`
- **Vector Images** `Render in Place`
- **Figma Variables** `Render in Place`

## Generator Settings

### **Effects**

#### **Backdrop Blur Output**

Technique used to render backdrop blur effects.

- **`Material`** Render as SwiftUI Materials. Requires predefined blur types. System default.

  | Radius | Swift Material           |
  | ------ | ------------------------ |
  | `100`  | `.ultraThin` _(default)_ |
  | `200`  | `.thin`                  |
  | `300`  | `.regular`               |
  | `500`  | `.thick`                 |
  | `600`  | `.ultraThick`            |
  | `1000` | `.bar`                   |

- **`Modifier`** Render as a custom global modifier based on UIKit Materials. Requires predefined blur types.

  | Radius | UIKit Material                  |
  | ------ | ------------------------------- |
  | `0`    | `.extraLight` _(default)_       |
  | `1`    | `.light`                        |
  | `2`    | `.dark`                         |
  | `3`    | `.extraDark`                    |
  | `4`    | `.regular`                      |
  | `5`    | `.prominent`                    |
  | `6`    | `.systemUltraThinMaterial`      |
  | `7`    | `.systemThinMaterial`           |
  | `8`    | `.systemMaterial`               |
  | `9`    | `.systemThickMaterial`          |
  | `10`   | `.systemChromeMaterial`         |
  | `11`   | `.systemUltraThinMaterialLight` |
  | `12`   | `.systemThinMaterialLight`      |
  | `13`   | `.systemMaterialLight`          |
  | `14`   | `.systemThickMaterialLight`     |
  | `15`   | `.systemChromeMaterialLight`    |

- **`View`** Render as a custom view modifier. Allows for any blur radius amount. High accuracy, low performance.

#### **Effect Style Output**

How Figma Effect Styles are rendered.

- **`Modifier`** Render as a custom view modifier. The name of the effect style is used as the modifer name. Global style modifiers are generated in the **Effect Styles** panel.

- **`Render in Place`** Render the effect style in place. No global style modifiers are generated, and the effect style is rendered directly on the view.

#### **Materials on Shapes**

Swift Materials can be applied to shapes as either the background of the content area or as the shape fill.

- **`Content Background (default)`** Render materials as `.background()` modifiers. The material is applied to the entire content area of the shape.

- **`Shape Fill`** Render materials as `.fill()` modifiers. The material is applied to the shape fill.

### **Fonts**

#### **Custom Fonts**

Allow custom fonts to be exported, or use system fonts. The system font can match to constants or take on dynamic sizes & styles from the design.

- **`Link by Name`** Use the name of the font in the design to match to a custom font.

- **`System Font (dynamic) (default)`** Use the system font for the platform as `.system()` modifiers with custom sizes matching the font size in the design.

- **`System Font (fixed)`** Match the system font constant nearest to the font size in the design.

#### **Font Weight Matching**

Font weights can be matched to system font weights or use the name of the font weight in the design (unsupported).

- **`Figma Variables (unsupported)`** Use the name of the font weight in the design as a font weight. Currently unsupported by the Figma API, as font style is used for both font style and font weight.

- **`System (default)`** Match the system font weight contstant to the font weight in the design.

#### **Letter Spacing Style**

iOS renders spacing in text by kerning characters. Figma render spacing in text by tracking characters.

- **`Kerning (iOS) (default)`** Translate the letter spacing to kerning.

- **`Tracking (Figma)`** Keep the letter spacing as tracking.

#### **Line Height**

Figma allows setting the line height, whereas iOS only natively supports spacing between lines.

- **`Keep Figma`** Keep the line height as set in Figma.

- **`Remove (default)`** Remove the line height. iOS will apply the default line height.

#### **System Font Size**

The iOS Dynamic Type system allows for text to be resized based on the user's preferred text size.

When `Custom Fonts` is set to **System**, this setting defines how to translate the font sizes in the design to the system font size.

- **`Large (default)`** Use the large system font size set.

#### **Text Style Output**

Text styles can be exported as custom view modifiers or rendered in place.

- **`Modifier (default)`** Render text styles as custom view modifiers. The name of the text style is used as the modifier name. Global style modifiers are generated in the **Text Styles** panel.

- **`Render in Place`** Render the text style in place. No global style modifiers are generated, and the text style is rendered directly on the view.

### **Generator**

#### **Component Instances**

Instances of components can be exported as a single component, or as a deep render of the component.

- **`Deep Render`** Deep render the component in place of the instance.

- **`Link by Name (default)`** Use the name of the component in the design as the name of a custom View. The custom View is then called in place of the instance.

#### **Error Output**

Choose whether to output errors in the console terminal. In the Figma Desktop app, `Menu Bar` > `Plugins` > `Development` > `Show/Hide Cconsole`.

- **`Show`** Show errors in the console terminal.

- **`Hide (default)`** Hide errors in the console terminal.

#### **Node Parent**

By default, the Figma API does not provide the parent of the selected node. This setting allows the document to be crawled to determine the parent of the selected node. Very slow, as the entire document may be crawled.

- **`Crawl Document (default)`** Crawl the document to determine the parent of the selected node.

- **`Only Selected (faster)`** Only use the selected node as the topmost parent.

#### **Progress Bar**

The total amount used for the progress bar displayed in the console terminal. The progress bar is used to indicate the progress of the code generation process. In the Figma Desktop app, `Menu Bar` > `Plugins` > `Development` > `Show/Hide Cconsole`.

- **`1000`**

- **`500`**

- **`300`**

- **`100 (default)`**

- **`Disabled`**

#### **Render Mode**

The render mode determines how the code is generated in the main `SwiftUI` panel. The code can be rendered as a full preview, just a struct, or as only view code.

- **`Snippet`** Render only the view code.

- **`Struct`** Render view as a complete struct.

- **`Preview (default)`** Render the full preview for the struct.

#### **Vector Images**

Vector images can be rendered as `Path` views or linked as a custom view. Vectors are rendered in the `Vector Images` panel.

> _Note: Vector image render is very slow._

- **`Disabled (default)`** Do not render vector images.

- **`Link by Name`** Render the vector image in the `Vector Images` panel. The name of the vector image is used as the name of the custom view linked in the code.

- **`Render in Place`** Render each vector image as a `Path` view in the code. Potentially very slow.

### **METADATA**

#### **Component Descriptions**

Figma components may contain multiline descriptions. These descriptions can be exported as multiline comments in the output code.

- **`As Comments (default)`**

- **`Disabled`**

#### **Component Links**

Figma components may contain links to documentation, etc. These links can be exported as comments in the output code.

- **`As Comments (default)`**

- **`Disabled`**

#### **Component Set Names**

Figma components may be part of a component set. The name of the component set can be exported as a comment with each component variant in the output code.

- **`As Comments (default)`**

- **`Disabled`**

#### **Document Properties**

The entire document's properties can be exported as a single line JSON string in the `Document Properties` panel.

> _Note: This feature is currently in beta. Only the document ID can be exported. lol_

- **`Enabled (beta)`**

- **`Disabled (default)`**

#### **Layer Names**

Figma layers have names. These names can be exported as comments in the output code.

- **`As Comments (default)`**

- **`Disabled`**

#### **Layer Properties**

All properties of a layer can be exported as a single line JSON string in the output code.

- **`As Comments (default)`**

- **`Disabled`**

#### **Local Variables**

All variables local to the current document can be exported in the `Local Variables` panel.

> _Note: This feature is currently in beta. Only some variables can be exported._

- **`Enabled (beta)`**

- **`Disabled (default)`**

#### **Team Libraries**

Figma teams may have libraries shared across the team. All libraries present in the current document can be exported in the `Team Libraries` panel.

> _Note: This feature is currently in beta._

- **`Enabled (beta)`**

- **`Disabled (default)`**

### **Output**

#### **Dynamic Size**

Figma layers may contain dynamic sizing properties, such as `fill` width or height. The Figma API does not provide these properties. This setting allows for the dynamic sizing properties to be exported.

To use this feature, `Node Parent` must be set to `Crawl Document`.

- **`Always (default)`** Export dynamic sizing properties for any layer.

- **`Must Select Parent`** To export dynamic sizing properties, a parent containing auto layout must be selected.

#### **Image Aspect Ratio**

Images can be exported with their aspect ratio preserved. A `resizable` modifier is applied to the image view to respect the aspect ratio.

- **`Mesh from Frame`** Use the frame dimensions to create a resizable mesh.

- **`Preserve (default)`** Preserve the aspect ratio of the image and apply a resizable modifier.

#### **Layer Mask**

Figma layers may contain masks. Masking is not currently supported by the generator. Masks can be disabled from output or rendered as shapes for testing.

- **`Disable (default)`** Do not render masks.

- **`Render as Shape`** Render masks as shapes.

#### **No Layer Name**

When a layer contains no name, it must be given a unique name to be exported. This setting chooses the default name to be given to layers without a name.

- **`"FigmaLayer" (default)`**

- **`"Unnamed"`**

### **Transforms**

#### **Opacity Transforms**

Figma represents opacity as `33%` percentages. SwiftUI represents opacity as `0.33` decimals. This setting allows for the conversion of opacity values.

- **`Enabled (default)`** Convert opacity values to decimals.

- **`Keep Figma`** Keep opacity values as integer percentages.

#### **Variable Transforms**

Exact values used in Figma may not translate directly to SwiftUI. This setting enables transformations of variables to better match SwiftUI.

When a Figma variable is transformed, a `_mod` suffix is added to the variable name.

- **`Enabled (default)`** Apply transformations to variables.

- **`Keep Figma`** Keep variables as they are.

### **Variables**

#### **Duplicate Variables**

Figma variables may be used multiple times in a design. This setting allows for the identification of duplicate variables.

- **`Index Instances`**

- **`Merge (default)`**

#### **Figma Variables**

Figma variables used in the design are exported in a separate `Variables` panel. This setting enables the rendering the value of each variable in place of the variable name in the output code.

- **`Link by Name (default)`** Use the name of the variable in the design as the name of the variable in the code.

- **`Render in Place`** Render the value of the variable in place of the variable name in the code.

## Changes

This plugin is supplied with extended support for SwiftUI, as well as many fixes & opinionated changes. Most of the Figma Node parser has been rewritten for Figma Variable support. The SwiftUI renderer has been rewritten to better support the current Swift standard.

- **Only Supports SwiftUI** All other renderers have been disabled.

- **Strict SwiftUI Compliance** The renderer has been rewritten to translate Figma designs as accurately as possible with code generated to the latest Swift 6.0 standard.

- **Removed Auto Layout Inferral** To simplify renderer impl, the `Inferred Auto Layout` calculation was removed. You must manually add Auto Layout to a frame to get layout properties. If you are unsure of what this means, you are unaffected.

- **Accurate Layout Properties** Layout properties are now exported accurately. Frames take into account both horizontal & vertical alignment when translating to Swift. Responsive layout properties are now supported. Nested elements are now exported with responsive layout properties.

- **Basic Vector Rendering** Basic vector shapes are now supported. Vectors are exported as `Path` views. Rendering is expensive and may not be accurate/precise.

- **Correct Border Rendering** Border properties for frames are now exported correctly as `.border()` modifiers. Previously, they were exported as `.overlay()` modifiers containing `Rectangles` with strokes. If a frame has a nonuniform border, only then will the border will be exported as an overlay (as SwiftUI does not support individual border sizes on stacks).

  > _Note: To export as `.border()`, use a single **uniform border** size with **center alignment**._

- **Individual Border Sizes** Individual border sizes are now supported. SwiftUI does not support individual border sizes on stacks. Different techniques are used based on the border alignment.

  | Align   | Output          | Accuracy  |
  | ------- | --------------- | --------- |
  | Inside  | `.overlay()`    | 🔵 Medium |
  | Center  | `.overlay()`    | 🟡 Poor   |
  | Outside | `.background()` | 🟢 High   |

  For outside borders, a special technique using two `Rectangles` is used to simulate the border. This technique preserves rounded corners. A limitation is that certain uneven border sizes may not be supported, usually nonproportional increases to each side of the top & bottom anchors.

  ```ts
  /* Figma      =>    SwiftUI */
       1                 2
    ________          ========
  2 ||    || 2  =>  2 ||    || 2
    ||    ||          ||    ||
       0                 0
  // fig1. Unsupported border ⚠️
  ```

  ```ts
  /* Figma      =>    SwiftUI */
       2                 2
    ========          ========
  2 ||       0  =>  2 ||       0
    ||                ||
       0                 0
  // fig2. Supported border ✅
  ```

  > _Note: Only **Frame** & **Rectangle** layers currently support individual border output._

  > _Note: Dashed borders are not supported._

- **Correct Shape Fill Rendering** Shape fills are now exported correctly as `.fill()` modifiers. Previously, they were exported as `.background()` modifiers. `.fill()` fills a shape, while `.background()` is applied to the entire background boundaries of a view. `.background()` modifiers are now only used for frames. Shapes without a fill correctly have `.fill(Color.clear)` applied.

- **Text Style Rendering** Text Styles are now fully exported as Text View modifiers. Previously, only style snippets were provided. Text Views are exported with their associated custom modifier applied. Duplicate text styles are identified and exported as a single custom modifier.

- **Accurate System Fonts** System fonts are now accurately exported. Previously, system fonts were exported as custom fonts. System fonts are now exported as either a system font constant or as `.system()` modifiers for custom sizes. Custom fonts are still supported.

- **Effect Style Rendering** Effect Styles are now fully exported as View modifiers. Previously, only modifiers were provided. Effects are exported with their associated custom modifier applied. Duplicate effects are identified and exported as a single custom modifier.

- **Figma Component Support** Figma Components & Instances are now recognized and exported correctly. Instances can be deep rendered or exported using the layer name. Varients & Overrides are not yet supported.

- **SwiftUI Image Support** Image fills are now supported. Images are exported as `Image` views. The image source is set to the name matching the name of the asset available in the **Assets** section at the bottom of the Dev Mode sidebar. All image properties supplied by the Figma API are supported.

- **Figma Variables** Added full support for Figma variables inside generated code.

  - color
    - ✅ solid
    - ✅ gradient
    - ✅ image
    - ⏳ multiple fills
  - sizing
    - ✅ width
    - ✅ minWidth
    - ✅ maxWidth
    - ✅ height
    - ✅ minHeight
    - ✅ maxHeight
  - spacing
    - ✅ gap
      > _Note: SwiftUI applies default spacing, so a value will always be exported to maintain the gap present in your designs._
    - ✅ padding
      - ✅ left
      - ✅ right
      - ✅ top
      - ✅ bottom
  - border
    - ✅ color
    - ✅ width
      - ✅ all
      - ✅ left
      - ✅ right
      - ✅ top
      - ✅ bottom
    - ✅ alignment
      - ✅ center
      - ✅ inside
      - ✅ outside
  - ✅ corner radius
    > _Note: SwiftUI does not support individual corner radii._
  - typography
    - ✅ text styles
    - ✅ color
    - ✅ characters (text content)
    - ✅ font family
    - ✅ font size
    - ✅ font weight
    - ✅ font style
    - ✅ line height
    - ✅ letter spacing
      > _Note: SwiftUI has poor support for paragraph spacing._
  - ✅ opacity
  - effects
    - ✅ drop shadow
      - ✅ color
      - ✅ x
      - ✅ y
      - ✅ blur
      - ✅ spread
        > _Note: SwiftUI does not support drop shadow spread._
    - ✅ background blur
      - ✅ radius
    - ✅ layer blur
      - ✅ radius
    - ✅ effect styles
    - ⏳ multiple effects
      > _Note: Only a single instance of each effect type, per frame, is currently supported._

- **Figma Variable Output** Figma Variables are now collected and exported in a separate `Variables` sections, similar to the default Figma code snippet generator. This allows for easy access to variables used in the design.

- **Variable Transformations** Transformations for variables are now supported. For example, a shadow with identical size values will be twice as large on iOS as it is in Figma. Transformations are now applied to the definition of a variable constant (or when rendering variables in place).

- **Better Position Offsets** Absolute positions are now more accurately translated into offsets. Previously, position offsets were not calculated.

- **Background Blur Support** Background blur effects are now supported as 3 separate blur types. Using either Swift Materials, a custom global modifier based on UIKit Materials, or a custom view modifier. Swift & UIKit materials required predefined blur types, while the custom view modifier allows for any radius amount.

- **True Backdrop Blur Support** True backdrop blur effects are now supported thanks to [this](https://stackoverflow.com/a/73950386) ([code](https://gist.github.com/Rukh/0eeedcb99fe057d1dba00d426c3fa105)). A custom effect view is created and placed behind the rendered view, then the two views are wrapped in a `ZStack`. A second technique thanks to [this](https://medium.com/@edwurtle/blur-effect-inside-swiftui-a2e12e61e750) ([code](https://gist.github.com/edwurtle/98c33bc783eb4761c114fcdcaac8ac71)) can also be applied, though essentially mimics SwiftUI materials.

- **Layer METADATA Output** Layer METADATA can now be rendered as comments in the output code. Supports layer names, component descriptions and links. Component Set Names are exported with their Variants. An entire layer's METADATA properties can be exported as a single line JSON string.

- **Parser Stack Improvements** The internal parser has been rewritten to support modifier groupings within the modifiers stack. As Swift is declarative, the order of modifiers is important. Modifier groups allow for high accuracy in the ordering of modifiers. Groups also allow for high precision in the placement of new modifiers within the stack.

- **Future Proofing** The plugin has been rewritten to be more modular and extensible. Future updates will be easier to implement.

### Things to Note

- A Figma Frame that contains no nested children will be exported as a `Rectangle` with the frame's properties. The Figma API classifies this unique case as a `Shape` and not a `Frame`; there is no way to discern between the types. This is a limitation of the Figma API and not the plugin.

- Figma does not support variables for font weights. The Figma API uses the font style as both the font style and font weight. All font weight are conerted to their system font weight equivalent.

also: in the interest of time lots of `any`. sorry mom.

## How to Build

`pnpm` is used as the package manager.

`turbo` is used as the build/package tool.

Use `pnpm run build:clean` to build the plugin.

### Distribute

1. Build the plugin.
   ```sh
   pnpm run build:clean
   ```
2. Grab the plugin from the `dist` folder.
   ```
   /apps/plugin/dist/
   ```
3. Copy the `manifest.json` into the `dist` folder.
4. Zip the `dist` folder.

## Upcoming Features

- ⏳ _Figma Component Set Export_

- ⏳ _Figma Component Variants & Overrides_
