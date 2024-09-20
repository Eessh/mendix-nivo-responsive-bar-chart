/**
 * This file was generated from NivoResponsiveBarChart.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue } from "mendix";

export type LayoutEnum = "vertical" | "horizontal";

export type GroupModeEnum = "grouped" | "stacked";

export type LegendsTypeEnum = "default" | "no" | "specify";

export type ThemeTypeEnum = "default" | "specify";

export type LabelPositionEnum = "start" | "middle" | "end";

export type AxisTopLegendPositionEnum = "start" | "middle" | "end";

export type AxisRightLegendPositionEnum = "start" | "middle" | "end";

export type AxisBottomLegendPositionEnum = "start" | "middle" | "end";

export type AxisLeftLegendPositionEnum = "start" | "middle" | "end";

export type ValueScaleSpecTypeEnum = "linear" | "log" | "symlog" | "point" | "band" | "time";

export type ValueScaleSpecFormatTypeEnum = "native" | "string";

export type ValueScaleSpecPrecisionEnum = "millisecond" | "second" | "minute" | "hour" | "day" | "month" | "year";

export type ValueScaleSpecMinTypeEnum = "auto" | "number";

export type ValueScaleSpecTimeMinTypeEnum = "auto" | "string";

export type ValueScaleSpecMaxTypeEnum = "auto" | "number";

export type ValueScaleSpecTimeMaxTypeEnum = "auto" | "string";

export type ValueScaleSpecNiceTypeEnum = "true" | "false" | "number";

export interface NivoResponsiveBarChartContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    data: DynamicValue<string>;
    keys: DynamicValue<string>;
    indexBy: DynamicValue<string>;
    layout: LayoutEnum;
    groupMode: GroupModeEnum;
    legendsType: LegendsTypeEnum;
    legends?: DynamicValue<string>;
    markers?: DynamicValue<string>;
    themeType: ThemeTypeEnum;
    theme?: DynamicValue<string>;
    enableGridX: boolean;
    enableGridY: boolean;
    enableLabels: boolean;
    labelSkipWidth: number;
    labelSkipHeight: number;
    labelTextColor?: DynamicValue<string>;
    labelPosition: LabelPositionEnum;
    labelOffset: number;
    enableTotals: boolean;
    totalsOffset: number;
    animate: boolean;
    enableBorders: boolean;
    borderWidth: number;
    borderColor?: DynamicValue<string>;
    borderRadius: number;
    marginTop: number;
    marginRight: number;
    marginBottom: number;
    marginLeft: number;
    enableAxisTop: boolean;
    axisTopTickSize: number;
    axisTopTickPadding: number;
    axisTopTickRotation: number;
    axisTopTickTruncateAt: number;
    axisTopLegend?: DynamicValue<string>;
    axisTopLegendOffset: number;
    axisTopLegendPosition: AxisTopLegendPositionEnum;
    enableAxisRight: boolean;
    axisRightTickSize: number;
    axisRightTickPadding: number;
    axisRightTickRotation: number;
    axisRightTickTruncateAt: number;
    axisRightLegend?: DynamicValue<string>;
    axisRightLegendOffset: number;
    axisRightLegendPosition: AxisRightLegendPositionEnum;
    enableAxisBottom: boolean;
    axisBottomTickSize: number;
    axisBottomTickPadding: number;
    axisBottomTickRotation: number;
    axisBottomTickTruncateAt: number;
    axisBottomLegend?: DynamicValue<string>;
    axisBottomLegendOffset: number;
    axisBottomLegendPosition: AxisBottomLegendPositionEnum;
    enableAxisLeft: boolean;
    axisLeftTickSize: number;
    axisLeftTickPadding: number;
    axisLeftTickRotation: number;
    axisLeftTickTruncateAt: number;
    axisLeftLegend?: DynamicValue<string>;
    axisLeftLegendOffset: number;
    axisLeftLegendPosition: AxisLeftLegendPositionEnum;
    valueScaleSpecType: ValueScaleSpecTypeEnum;
    valueScaleSpecBase: number;
    valueScaleSpecConstant: number;
    valueScaleSpecRound: boolean;
    valueScaleSpecFormatType: ValueScaleSpecFormatTypeEnum;
    valueScaleSpecFormatValue: string;
    valueScaleSpecPrecision: ValueScaleSpecPrecisionEnum;
    valueScaleSpecMinType: ValueScaleSpecMinTypeEnum;
    valueScaleSpecMinValue: number;
    valueScaleSpecTimeMinType: ValueScaleSpecTimeMinTypeEnum;
    valueScaleSpecTimeMinValue: string;
    valueScaleSpecMaxType: ValueScaleSpecMaxTypeEnum;
    valueScaleSpecMaxValue: number;
    valueScaleSpecTimeMaxType: ValueScaleSpecTimeMaxTypeEnum;
    valueScaleSpecTimeMaxValue: string;
    valueScaleSpecStacked: boolean;
    valueScaleSpecReverse: boolean;
    valueScaleSpecClamp: boolean;
    valueScaleSpecUseUTC: boolean;
    valueScaleSpecNiceType: ValueScaleSpecNiceTypeEnum;
    valueScaleSpecNiceValue: number;
    valueScaleSpecTimeNice: boolean;
    valueScaleFormat: string;
    indexScaleSpecRound: boolean;
    colors?: DynamicValue<string>;
    definitions?: DynamicValue<string>;
    fills?: DynamicValue<string>;
}

export interface NivoResponsiveBarChartPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode?: "design" | "xray" | "structure";
    data: string;
    keys: string;
    indexBy: string;
    layout: LayoutEnum;
    groupMode: GroupModeEnum;
    legendsType: LegendsTypeEnum;
    legends: string;
    markers: string;
    themeType: ThemeTypeEnum;
    theme: string;
    enableGridX: boolean;
    enableGridY: boolean;
    enableLabels: boolean;
    labelSkipWidth: number | null;
    labelSkipHeight: number | null;
    labelTextColor: string;
    labelPosition: LabelPositionEnum;
    labelOffset: number | null;
    enableTotals: boolean;
    totalsOffset: number | null;
    animate: boolean;
    enableBorders: boolean;
    borderWidth: number | null;
    borderColor: string;
    borderRadius: number | null;
    marginTop: number | null;
    marginRight: number | null;
    marginBottom: number | null;
    marginLeft: number | null;
    enableAxisTop: boolean;
    axisTopTickSize: number | null;
    axisTopTickPadding: number | null;
    axisTopTickRotation: number | null;
    axisTopTickTruncateAt: number | null;
    axisTopLegend: string;
    axisTopLegendOffset: number | null;
    axisTopLegendPosition: AxisTopLegendPositionEnum;
    enableAxisRight: boolean;
    axisRightTickSize: number | null;
    axisRightTickPadding: number | null;
    axisRightTickRotation: number | null;
    axisRightTickTruncateAt: number | null;
    axisRightLegend: string;
    axisRightLegendOffset: number | null;
    axisRightLegendPosition: AxisRightLegendPositionEnum;
    enableAxisBottom: boolean;
    axisBottomTickSize: number | null;
    axisBottomTickPadding: number | null;
    axisBottomTickRotation: number | null;
    axisBottomTickTruncateAt: number | null;
    axisBottomLegend: string;
    axisBottomLegendOffset: number | null;
    axisBottomLegendPosition: AxisBottomLegendPositionEnum;
    enableAxisLeft: boolean;
    axisLeftTickSize: number | null;
    axisLeftTickPadding: number | null;
    axisLeftTickRotation: number | null;
    axisLeftTickTruncateAt: number | null;
    axisLeftLegend: string;
    axisLeftLegendOffset: number | null;
    axisLeftLegendPosition: AxisLeftLegendPositionEnum;
    valueScaleSpecType: ValueScaleSpecTypeEnum;
    valueScaleSpecBase: number | null;
    valueScaleSpecConstant: number | null;
    valueScaleSpecRound: boolean;
    valueScaleSpecFormatType: ValueScaleSpecFormatTypeEnum;
    valueScaleSpecFormatValue: string;
    valueScaleSpecPrecision: ValueScaleSpecPrecisionEnum;
    valueScaleSpecMinType: ValueScaleSpecMinTypeEnum;
    valueScaleSpecMinValue: number | null;
    valueScaleSpecTimeMinType: ValueScaleSpecTimeMinTypeEnum;
    valueScaleSpecTimeMinValue: string;
    valueScaleSpecMaxType: ValueScaleSpecMaxTypeEnum;
    valueScaleSpecMaxValue: number | null;
    valueScaleSpecTimeMaxType: ValueScaleSpecTimeMaxTypeEnum;
    valueScaleSpecTimeMaxValue: string;
    valueScaleSpecStacked: boolean;
    valueScaleSpecReverse: boolean;
    valueScaleSpecClamp: boolean;
    valueScaleSpecUseUTC: boolean;
    valueScaleSpecNiceType: ValueScaleSpecNiceTypeEnum;
    valueScaleSpecNiceValue: number | null;
    valueScaleSpecTimeNice: boolean;
    valueScaleFormat: string;
    indexScaleSpecRound: boolean;
    colors: string;
    definitions: string;
    fills: string;
}
