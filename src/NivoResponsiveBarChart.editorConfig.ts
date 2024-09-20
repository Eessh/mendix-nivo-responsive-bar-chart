import { NivoResponsiveBarChartPreviewProps } from "../typings/NivoResponsiveBarChartProps";

export type Platform = "web" | "desktop";

export type Properties = PropertyGroup[];

type PropertyGroup = {
    caption: string;
    propertyGroups?: PropertyGroup[];
    properties?: Property[];
};

type Property = {
    key: string;
    caption: string;
    description?: string;
    objectHeaders?: string[]; // used for customizing object grids
    objects?: ObjectProperties[];
    properties?: Properties[];
};

type ObjectProperties = {
    properties: PropertyGroup[];
    captions?: string[]; // used for customizing object grids
};

export type Problem = {
    property?: string; // key of the property, at which the problem exists
    severity?: "error" | "warning" | "deprecation"; // default = "error"
    message: string; // description of the problem
    studioMessage?: string; // studio-specific message, defaults to message
    url?: string; // link with more information about the problem
    studioUrl?: string; // studio-specific link
};

type BaseProps = {
    type: "Image" | "Container" | "RowLayout" | "Text" | "DropZone" | "Selectable" | "Datasource";
    grow?: number; // optionally sets a growth factor if used in a layout (default = 1)
};

type ImageProps = BaseProps & {
    type: "Image";
    document?: string; // svg image
    data?: string; // base64 image
    property?: object; // widget image property object from Values API
    width?: number; // sets a fixed maximum width
    height?: number; // sets a fixed maximum height
};

type ContainerProps = BaseProps & {
    type: "Container" | "RowLayout";
    children: PreviewProps[]; // any other preview element
    borders?: boolean; // sets borders around the layout to visually group its children
    borderRadius?: number; // integer. Can be used to create rounded borders
    backgroundColor?: string; // HTML color, formatted #RRGGBB
    borderWidth?: number; // sets the border width
    padding?: number; // integer. adds padding around the container
};

type RowLayoutProps = ContainerProps & {
    type: "RowLayout";
    columnSize?: "fixed" | "grow"; // default is fixed
};

type TextProps = BaseProps & {
    type: "Text";
    content: string; // text that should be shown
    fontSize?: number; // sets the font size
    fontColor?: string; // HTML color, formatted #RRGGBB
    bold?: boolean;
    italic?: boolean;
};

type DropZoneProps = BaseProps & {
    type: "DropZone";
    property: object; // widgets property object from Values API
    placeholder: string; // text to be shown inside the dropzone when empty
    showDataSourceHeader?: boolean; // true by default. Toggles whether to show a header containing information about the datasource
};

type SelectableProps = BaseProps & {
    type: "Selectable";
    object: object; // object property instance from the Value API
    child: PreviewProps; // any type of preview property to visualize the object instance
};

type DatasourceProps = BaseProps & {
    type: "Datasource";
    property: object | null; // datasource property object from Values API
    child?: PreviewProps; // any type of preview property component (optional)
};

export type PreviewProps =
    | ImageProps
    | ContainerProps
    | RowLayoutProps
    | TextProps
    | DropZoneProps
    | SelectableProps
    | DatasourceProps;

export function getProperties(
    _values: NivoResponsiveBarChartPreviewProps,
    defaultProperties: Properties /* , target: Platform*/
): Properties {
    // Do the values manipulation here to control the visibility of properties in Studio and Studio Pro conditionally.

    // Data Source
    const datasourcePropGroup: PropertyGroup = defaultProperties.find(
        propGroup => propGroup.caption === "Data Source"
    )!;
    const datasourcePropsToRemove: string[] = [];
    if (_values.legendsType !== "specify") {
        datasourcePropsToRemove.push("legends");
    }
    if (_values.themeType !== "specify") {
        datasourcePropsToRemove.push("theme");
    }
    datasourcePropGroup.properties = datasourcePropGroup.properties!.filter(
        prop => !datasourcePropsToRemove.includes(prop.key)
    );

    // Properties
    const propertiesPropGroup: PropertyGroup = defaultProperties.find(propGroup => propGroup.caption === "Properties")!;
    let propertiesPropsToRemove: string[] = [];
    if (!_values.enableLabels) {
        propertiesPropsToRemove = propertiesPropsToRemove.concat([
            "labelSkipWidth",
            "labelSkipHeight",
            "labelTextColor",
            "labelPosition",
            "labelOffset"
        ]);
    } else if (_values.layout === "horizontal") {
        propertiesPropsToRemove.push("labelSkipHeight");
    } else {
        propertiesPropsToRemove.push("labelSkipWidth");
    }
    if (!_values.enableTotals) {
        propertiesPropsToRemove.push("totalsOffset");
    }
    if (!_values.enableBorders) {
        propertiesPropsToRemove = propertiesPropsToRemove.concat(["borderWidth", "borderColor", "borderRadius"]);
    }
    propertiesPropGroup.properties = propertiesPropGroup.properties!.filter(
        prop => !propertiesPropsToRemove.includes(prop.key)
    );

    // Axis Top
    if (!_values.enableAxisTop) {
        const axisTopPropGroup: PropertyGroup = defaultProperties.find(propGroup => propGroup.caption === "Axis Top")!;
        axisTopPropGroup.properties!.splice(1, axisTopPropGroup.properties!.length - 1);
    }

    // Axis Right
    if (!_values.enableAxisRight) {
        const axisRightPropGroup: PropertyGroup = defaultProperties.find(
            propGroup => propGroup.caption === "Axis Right"
        )!;
        axisRightPropGroup.properties!.splice(1, axisRightPropGroup.properties!.length - 1);
    }

    // Axis Bottom
    if (!_values.enableAxisBottom) {
        const axisBottomPropGroup: PropertyGroup = defaultProperties.find(
            propGroup => propGroup.caption === "Axis Bottom"
        )!;
        axisBottomPropGroup.properties!.splice(1, axisBottomPropGroup.properties!.length - 1);
    }

    // Axis Left
    if (!_values.enableAxisLeft) {
        const axisLeftPropGroup: PropertyGroup = defaultProperties.find(
            propGroup => propGroup.caption === "Axis Left"
        )!;
        axisLeftPropGroup.properties!.splice(1, axisLeftPropGroup.properties!.length - 1);
    }

    // Value Scale Spec
    const valueScaleSpecPropGroup: PropertyGroup = defaultProperties.find(
        propGroup => propGroup.caption === "Value Scale Spec"
    )!;
    let valueScaleSpecPropsToRemove: string[] = [];
    if (_values.valueScaleSpecType === "linear") {
        valueScaleSpecPropsToRemove = valueScaleSpecPropsToRemove.concat([
            "valueScaleSpecBase",
            "valueScaleSpecConstant",
            "valueScaleSpecRound",
            "valueScaleSpecFormatType",
            "valueScaleSpecFormatValue",
            "valueScaleSpecPrecision",
            "valueScaleSpecTimeMinType",
            "valueScaleSpecTimeMinValue",
            "valueScaleSpecTimeMaxType",
            "valueScaleSpecTimeMaxValue",
            "valueScaleSpecUseUTC",
            "valueScaleSpecTimeNice"
        ]);
        if (_values.valueScaleSpecMinType === "auto") {
            valueScaleSpecPropsToRemove.push("valueScaleSpecMinValue");
        }
        if (_values.valueScaleSpecMaxType === "auto") {
            valueScaleSpecPropsToRemove.push("valueScaleSpecMaxValue");
        }
        if (_values.valueScaleSpecNiceType === "true" || _values.valueScaleSpecNiceType === "false") {
            valueScaleSpecPropsToRemove.push("valueScaleSpecNiceValue");
        }
    } else if (_values.valueScaleSpecType === "log") {
        valueScaleSpecPropsToRemove = valueScaleSpecPropsToRemove.concat([
            "valueScaleSpecConstant",
            "valueScaleSpecRound",
            "valueScaleSpecFormatType",
            "valueScaleSpecFormatValue",
            "valueScaleSpecPrecision",
            "valueScaleSpecTimeMinType",
            "valueScaleSpecTimeMinValue",
            "valueScaleSpecTimeMaxType",
            "valueScaleSpecTimeMaxValue",
            "valueScaleSpecStacked",
            "valueScaleSpecReverse",
            "valueScaleSpecClamp",
            "valueScaleSpecUseUTC",
            "valueScaleSpecNiceType",
            "valueScaleSpecNiceValue",
            "valueScaleSpecTimeNice"
        ]);
        if (_values.valueScaleSpecMinType === "auto") {
            valueScaleSpecPropsToRemove.push("valueScaleSpecMinValue");
        }
        if (_values.valueScaleSpecMaxType === "auto") {
            valueScaleSpecPropsToRemove.push("valueScaleSpecMaxValue");
        }
    } else if (_values.valueScaleSpecType === "symlog") {
        valueScaleSpecPropsToRemove = valueScaleSpecPropsToRemove.concat([
            "valueScaleSpecBase",
            "valueScaleSpecRound",
            "valueScaleSpecFormatType",
            "valueScaleSpecFormatValue",
            "valueScaleSpecPrecision",
            "valueScaleSpecTimeMinType",
            "valueScaleSpecTimeMinValue",
            "valueScaleSpecTimeMaxType",
            "valueScaleSpecTimeMaxValue",
            "valueScaleSpecStacked",
            "valueScaleSpecClamp",
            "valueScaleSpecUseUTC",
            "valueScaleSpecNiceType",
            "valueScaleSpecNiceValue",
            "valueScaleSpecTimeNice"
        ]);
        if (_values.valueScaleSpecMinType === "auto") {
            valueScaleSpecPropsToRemove.push("valueScaleSpecMinValue");
        }
        if (_values.valueScaleSpecMaxType === "auto") {
            valueScaleSpecPropsToRemove.push("valueScaleSpecMaxValue");
        }
    } else if (_values.valueScaleSpecType === "point") {
        valueScaleSpecPropGroup.properties!.splice(1, valueScaleSpecPropGroup.properties!.length - 2);
    } else if (_values.valueScaleSpecType === "band") {
        valueScaleSpecPropsToRemove = valueScaleSpecPropsToRemove.concat([
            "valueScaleSpecBase",
            "valueScaleSpecConstant",
            "valueScaleSpecFormatType",
            "valueScaleSpecFormatValue",
            "valueScaleSpecPrecision",
            "valueScaleSpecMinType",
            "valueScaleSpecMinValue",
            "valueScaleSpecMaxType",
            "valueScaleSpecMaxValue",
            "valueScaleSpecTimeMinType",
            "valueScaleSpecTimeMinValue",
            "valueScaleSpecTimeMaxType",
            "valueScaleSpecTimeMaxValue",
            "valueScaleSpecStacked",
            "valueScaleSpecReverse",
            "valueScaleSpecClamp",
            "valueScaleSpecUseUTC",
            "valueScaleSpecNiceType",
            "valueScaleSpecNiceValue",
            "valueScaleSpecTimeNice"
        ]);
    } else {
        valueScaleSpecPropsToRemove = valueScaleSpecPropsToRemove.concat([
            "valueScaleSpecBase",
            "valueScaleSpecConstant",
            "valueScaleSpecRound",
            "valueScaleSpecMinType",
            "valueScaleSpecMinValue",
            "valueScaleSpecMaxType",
            "valueScaleSpecMaxValue",
            "valueScaleSpecStacked",
            "valueScaleSpecReverse",
            "valueScaleSpecClamp",
            "valueScaleSpecUseUTC",
            "valueScaleSpecNiceType",
            "valueScaleSpecNiceValue"
        ]);
        if (_values.valueScaleSpecFormatType === "native") {
            valueScaleSpecPropsToRemove.push("valueScaleSpecFormatValue");
        }
        if (_values.valueScaleSpecTimeMinType === "auto") {
            valueScaleSpecPropsToRemove.push("valueScaleSpecTimeMinValue");
        }
        if (_values.valueScaleSpecTimeMaxType === "auto") {
            valueScaleSpecPropsToRemove.push("valueScaleSpecTimeMaxValue");
        }
    }
    valueScaleSpecPropGroup.properties = valueScaleSpecPropGroup.properties!.filter(
        prop => !valueScaleSpecPropsToRemove.includes(prop.key)
    );

    return defaultProperties;
}

// export function check(_values: NivoResponsiveBarChartPreviewProps): Problem[] {
//     const errors: Problem[] = [];
//     // Add errors to the above array to throw errors in Studio and Studio Pro.
//     /* Example
//     if (values.myProperty !== "custom") {
//         errors.push({
//             property: `myProperty`,
//             message: `The value of 'myProperty' is different of 'custom'.`,
//             url: "https://github.com/myrepo/mywidget"
//         });
//     }
//     */
//     return errors;
// }

// export function getPreview(values: NivoResponsiveBarChartPreviewProps, isDarkMode: boolean, version: number[]): PreviewProps {
//     // Customize your pluggable widget appearance for Studio Pro.
//     return {
//         type: "Container",
//         children: []
//     }
// }

// export function getCustomCaption(values: NivoResponsiveBarChartPreviewProps, platform: Platform): string {
//     return "NivoResponsiveBarChart";
// }
