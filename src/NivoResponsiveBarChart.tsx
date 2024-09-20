import { ReactElement, createElement } from "react";

import { NivoResponsiveBarChartContainerProps } from "../typings/NivoResponsiveBarChartProps";

import "./ui/NivoResponsiveBarChart.css";
import NivoResponsiveBar from "./components/NivoResponsiveBar";
import { BarDatum, BarLegendProps, ComputedDatum, ComputedBarDatum } from "@nivo/bar";
import { CartesianMarkerProps, Theme, SvgFillMatcher } from "@nivo/core";
import { ScaleSpec } from "@nivo/scales";
import { OrdinalColorScaleConfig } from "@nivo/colors";

export function NivoResponsiveBarChart(props: NivoResponsiveBarChartContainerProps): ReactElement {
    let parsedData: BarDatum[];
    try {
        parsedData = JSON.parse(props.data.value!) as BarDatum[];
    } catch (e) {
        return <span>{"Error in Chart Data (JSON): " + e.message}</span>;
    }

    let parsedKeys: string[];
    try {
        parsedKeys = JSON.parse(props.keys.value!) as string[];
    } catch (e) {
        return <span>{"Error in Keys (JSON): " + e.message}</span>;
    }

    // Returning if no legends data
    if (props.legendsType === "specify" && !props.legends?.value) {
        return <span>{"Error in Legends JSON Data: No legends data!"}</span>;
    }

    let parsedMarkers: CartesianMarkerProps[] | undefined;
    try {
        parsedMarkers = props.markers?.value ? (JSON.parse(props.markers.value) as CartesianMarkerProps[]) : [];
    } catch (e) {
        return <span>{"Error in Markers (JSON): " + e.message}</span>;
    }

    // Returning if no theme data
    if (props.themeType === "specify" && !props.theme?.value) {
        return <span>{"Error in Theme JSON Data: No theme data!"}</span>;
    }

    const getParsedLegends = (): BarLegendProps[] => {
        return JSON.parse(props.legends!.value!);
    };

    const getParsedTheme = (): Theme => {
        return JSON.parse(props.theme!.value!);
    };

    const getValueScaleSpec = (): ScaleSpec => {
        if (props.valueScaleSpecType === "linear") {
            return {
                type: "linear",
                min: props.valueScaleSpecMinType === "auto" ? "auto" : props.valueScaleSpecMinValue,
                max: props.valueScaleSpecMaxType === "auto" ? "auto" : props.valueScaleSpecMaxValue,
                stacked: props.valueScaleSpecStacked,
                reverse: props.valueScaleSpecReverse,
                clamp: props.valueScaleSpecClamp,
                nice:
                    props.valueScaleSpecNiceType === "true"
                        ? true
                        : props.valueScaleSpecNiceType === "false"
                        ? false
                        : props.valueScaleSpecNiceValue
            };
        }
        if (props.valueScaleSpecType === "log") {
            return {
                type: "log",
                base: props.valueScaleSpecBase,
                min: props.valueScaleSpecMinType === "auto" ? "auto" : props.valueScaleSpecMinValue,
                max: props.valueScaleSpecMaxType === "auto" ? "auto" : props.valueScaleSpecMaxValue
            };
        }
        if (props.valueScaleSpecType === "symlog") {
            return {
                type: "symlog",
                constant: props.valueScaleSpecConstant,
                min: props.valueScaleSpecMinType === "auto" ? "auto" : props.valueScaleSpecMinValue,
                max: props.valueScaleSpecMaxType === "auto" ? "auto" : props.valueScaleSpecMaxValue,
                reverse: props.valueScaleSpecReverse
            };
        }
        if (props.valueScaleSpecType === "point") {
            return { type: "point" };
        }
        if (props.valueScaleSpecType === "band") {
            return {
                type: "band",
                round: props.valueScaleSpecRound
            };
        }
        return {
            type: "time",
            format: props.valueScaleSpecFormatType === "native" ? "native" : props.valueScaleSpecFormatValue,
            precision: props.valueScaleSpecPrecision,
            min: props.valueScaleSpecTimeMinType === "auto" ? "auto" : props.valueScaleSpecTimeMinValue,
            max: props.valueScaleSpecTimeMaxType === "auto" ? "auto" : props.valueScaleSpecTimeMaxValue,
            useUTC: props.valueScaleSpecUseUTC,
            nice: props.valueScaleSpecTimeNice
        };
    };

    const getColors = (): OrdinalColorScaleConfig<ComputedDatum<BarDatum>> | undefined => {
        return props.colors ? JSON.parse(props.colors.value!) : undefined;
    };

    const getDefinitions = ():
        | Array<{
              id: string;
              [key: string]: any;
          }>
        | undefined => {
        return props.definitions ? JSON.parse(props.definitions.value!) : undefined;
    };

    const getFills = ():
        | Array<{
              id: string;
              match: Record<string, unknown> | "*" | SvgFillMatcher<ComputedBarDatum<BarDatum>>;
          }>
        | undefined => {
        return props.fills ? JSON.parse(props.fills.value!) : undefined;
    };

    return (
        <NivoResponsiveBar
            data={parsedData}
            keys={parsedKeys}
            indexBy={props.indexBy.value!}
            theme={props.themeType === "default" ? undefined : getParsedTheme()}
            markers={parsedMarkers}
            margin={{
                top: props.marginTop,
                right: props.marginRight,
                bottom: props.marginBottom,
                left: props.marginLeft
            }}
            valueScale={getValueScaleSpec()}
            indexScale={{ type: "band", round: props.indexScaleSpecRound }}
            animate={props.animate}
            enableTotals={props.enableTotals}
            enableLabels={props.enableLabels}
            enableGridX={props.enableGridX}
            enableGridY={props.enableGridY}
            totalsOffset={props.totalsOffset}
            axisTop={
                props.enableAxisTop
                    ? {
                          tickSize: props.axisTopTickSize,
                          tickPadding: props.axisTopTickPadding,
                          tickRotation: props.axisTopTickRotation,
                          legend: props.axisTopLegend?.value,
                          legendOffset: props.axisTopLegendOffset,
                          legendPosition: props.axisTopLegendPosition,
                          truncateTickAt: props.axisTopTickTruncateAt
                      }
                    : null
            }
            axisRight={
                props.enableAxisRight
                    ? {
                          tickSize: props.axisRightTickSize,
                          tickPadding: props.axisRightTickPadding,
                          tickRotation: props.axisRightTickRotation,
                          legend: props.axisRightLegend?.value,
                          legendOffset: props.axisRightLegendOffset,
                          legendPosition: props.axisRightLegendPosition,
                          truncateTickAt: props.axisRightTickTruncateAt
                      }
                    : null
            }
            axisBottom={
                props.enableAxisBottom
                    ? {
                          tickSize: props.axisBottomTickSize,
                          tickPadding: props.axisBottomTickPadding,
                          tickRotation: props.axisBottomTickRotation,
                          legend: props.axisBottomLegend?.value,
                          legendOffset: props.axisBottomLegendOffset,
                          legendPosition: props.axisBottomLegendPosition,
                          truncateTickAt: props.axisBottomTickTruncateAt
                      }
                    : null
            }
            axisLeft={
                props.enableAxisLeft
                    ? {
                          tickSize: props.axisLeftTickSize,
                          tickPadding: props.axisLeftTickPadding,
                          tickRotation: props.axisLeftTickRotation,
                          legend: props.axisLeftLegend?.value,
                          legendOffset: props.axisLeftLegendOffset,
                          legendPosition: props.axisLeftLegendPosition,
                          truncateTickAt: props.axisLeftTickTruncateAt
                      }
                    : null
            }
            legends={
                props.legendsType === "default" ? undefined : props.legendsType === "no" ? null : getParsedLegends()
            }
            borderWidth={props.borderWidth}
            borderColor={props.borderColor ? props.borderColor.value : "#fff"}
            borderRadius={props.borderRadius}
            layout={props.layout}
            groupMode={props.groupMode}
            colors={getColors()}
            defs={getDefinitions()}
            fill={getFills()}
        />
    );
}
