import { ReactElement, createElement } from "react";
import {
    BarLegendProps,
    BarDatum,
    ResponsiveBar,
    ComputedDatum,
    ComputedBarDatum,
    ComputedBarDatumWithValue
} from "@nivo/bar";
import { Box, SvgFillMatcher, CartesianMarkerProps, Theme } from "@nivo/core";
import { ScaleSpec, ScaleBandSpec } from "@nivo/scales";
import { AxisProps } from "@nivo/axes";
import { OrdinalColorScaleConfig, InheritedColorConfig } from "@nivo/colors";

type NivoResponsiveBarProps = {
    data: BarDatum[];
    keys: string[];
    indexBy: string;
    margin?: Box;
    padding?: number;
    valueScale?: ScaleSpec;
    indexScale?: ScaleBandSpec;
    colors?: OrdinalColorScaleConfig<ComputedDatum<BarDatum>>;
    defs?: Array<{
        id: string;
        [key: string]: any;
    }>;
    fill?: Array<{
        id: string;
        match: Record<string, unknown> | "*" | SvgFillMatcher<ComputedBarDatum<BarDatum>>;
    }>;
    axisTop?: AxisProps | null;
    axisRight?: AxisProps | null;
    axisBottom?: AxisProps | null;
    axisLeft?: AxisProps | null;
    labelSkipWidth?: number;
    labelSkipHeight?: number;
    labelTextColor?: InheritedColorConfig<ComputedBarDatumWithValue<BarDatum>>;
    legends?: BarLegendProps[] | null;
    markers?: CartesianMarkerProps[];
    animate: boolean;
    enableTotals: boolean;
    enableLabels: boolean;
    enableGridX: boolean;
    enableGridY: boolean;
    totalsOffset?: number;
    theme?: Theme;
    borderWidth: number;
    borderColor?: InheritedColorConfig<ComputedBarDatumWithValue<BarDatum>>;
    borderRadius: number;
    groupMode: "grouped" | "stacked";
    layout: "horizontal" | "vertical";
};

const DefaultProps: NivoResponsiveBarProps = {
    data: [
        {
            country: "AD",
            "hot dog": 32,
            "hot dogColor": "hsl(185, 70%, 50%)",
            burger: 121,
            burgerColor: "hsl(150, 70%, 50%)",
            sandwich: 122,
            sandwichColor: "hsl(246, 70%, 50%)",
            kebab: 157,
            kebabColor: "hsl(26, 70%, 50%)",
            fries: 9,
            friesColor: "hsl(333, 70%, 50%)",
            donut: 148,
            donutColor: "hsl(47, 70%, 50%)"
        },
        {
            country: "AE",
            "hot dog": 37,
            "hot dogColor": "hsl(280, 70%, 50%)",
            burger: 64,
            burgerColor: "hsl(107, 70%, 50%)",
            sandwich: 90,
            sandwichColor: "hsl(303, 70%, 50%)",
            kebab: 189,
            kebabColor: "hsl(230, 70%, 50%)",
            fries: 10,
            friesColor: "hsl(135, 70%, 50%)",
            donut: 183,
            donutColor: "hsl(268, 70%, 50%)"
        },
        {
            country: "AF",
            "hot dog": 82,
            "hot dogColor": "hsl(30, 70%, 50%)",
            burger: 43,
            burgerColor: "hsl(65, 70%, 50%)",
            sandwich: 191,
            sandwichColor: "hsl(93, 70%, 50%)",
            kebab: 99,
            kebabColor: "hsl(178, 70%, 50%)",
            fries: 32,
            friesColor: "hsl(169, 70%, 50%)",
            donut: 7,
            donutColor: "hsl(86, 70%, 50%)"
        },
        {
            country: "AG",
            "hot dog": 147,
            "hot dogColor": "hsl(42, 70%, 50%)",
            burger: 140,
            burgerColor: "hsl(193, 70%, 50%)",
            sandwich: 4,
            sandwichColor: "hsl(279, 70%, 50%)",
            kebab: 118,
            kebabColor: "hsl(316, 70%, 50%)",
            fries: 103,
            friesColor: "hsl(207, 70%, 50%)",
            donut: 173,
            donutColor: "hsl(41, 70%, 50%)"
        },
        {
            country: "AI",
            "hot dog": 109,
            "hot dogColor": "hsl(15, 70%, 50%)",
            burger: 94,
            burgerColor: "hsl(355, 70%, 50%)",
            sandwich: 196,
            sandwichColor: "hsl(148, 70%, 50%)",
            kebab: 145,
            kebabColor: "hsl(62, 70%, 50%)",
            fries: 56,
            friesColor: "hsl(92, 70%, 50%)",
            donut: 152,
            donutColor: "hsl(37, 70%, 50%)"
        },
        {
            country: "AL",
            "hot dog": 173,
            "hot dogColor": "hsl(7, 70%, 50%)",
            burger: 189,
            burgerColor: "hsl(39, 70%, 50%)",
            sandwich: 193,
            sandwichColor: "hsl(85, 70%, 50%)",
            kebab: 151,
            kebabColor: "hsl(34, 70%, 50%)",
            fries: 60,
            friesColor: "hsl(297, 70%, 50%)",
            donut: 74,
            donutColor: "hsl(268, 70%, 50%)"
        },
        {
            country: "AM",
            "hot dog": 189,
            "hot dogColor": "hsl(175, 70%, 50%)",
            burger: 177,
            burgerColor: "hsl(69, 70%, 50%)",
            sandwich: 98,
            sandwichColor: "hsl(159, 70%, 50%)",
            kebab: 114,
            kebabColor: "hsl(302, 70%, 50%)",
            fries: 41,
            friesColor: "hsl(242, 70%, 50%)",
            donut: 77,
            donutColor: "hsl(37, 70%, 50%)"
        }
    ],
    keys: ["hot dog", "burger", "sandwich", "kebab", "fries", "donut"],
    indexBy: "country",
    margin: { top: 50, right: 130, bottom: 50, left: 60 },
    padding: 0.3,
    valueScale: { type: "linear" },
    indexScale: { type: "band", round: true },
    colors: { scheme: "nivo" },
    defs: [
        {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true
        },
        {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10
        }
    ],
    fill: [
        {
            match: {
                id: "fries"
            },
            id: "dots"
        },
        {
            match: {
                id: "sandwich"
            },
            id: "lines"
        }
    ],
    axisTop: null,
    axisRight: null,
    axisBottom: {
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "country",
        legendPosition: "middle",
        legendOffset: 32,
        truncateTickAt: 0
    },
    axisLeft: {
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "food",
        legendPosition: "middle",
        legendOffset: -40,
        truncateTickAt: 0
    },
    labelSkipWidth: 12,
    labelSkipHeight: 12,
    labelTextColor: {
        from: "color",
        modifiers: [["darker", 1.6]]
    },
    animate: true,
    enableTotals: true,
    enableLabels: true,
    enableGridX: true,
    enableGridY: true,
    legends: [
        {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
                {
                    on: "hover",
                    style: {
                        itemOpacity: 1
                    }
                }
            ]
        }
    ],
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 0,
    groupMode: "stacked",
    layout: "vertical"
};

const NivoResponsiveBar = (props: NivoResponsiveBarProps): ReactElement => {
    return (
        <ResponsiveBar
            data={props.data ?? DefaultProps.data}
            keys={props.keys ?? DefaultProps.keys}
            indexBy={props.indexBy ?? DefaultProps.indexBy}
            margin={props.margin ?? DefaultProps.margin}
            padding={props.padding ?? DefaultProps.padding}
            valueScale={props.valueScale ?? DefaultProps.valueScale}
            indexScale={{
                type: "band",
                round: props.indexScale ? props.indexScale.round : DefaultProps.indexScale!.round
            }}
            colors={props.colors ?? DefaultProps.colors}
            defs={props.defs ?? DefaultProps.defs}
            fill={props.fill ?? DefaultProps.fill}
            axisTop={props.axisTop}
            axisRight={props.axisRight}
            axisBottom={props.axisBottom}
            axisLeft={props.axisLeft}
            labelSkipWidth={props.labelSkipWidth ?? DefaultProps.labelSkipWidth}
            labelSkipHeight={props.labelSkipHeight ?? DefaultProps.labelSkipHeight}
            labelTextColor={props.labelTextColor ?? DefaultProps.labelTextColor}
            legends={
                props.legends === undefined ? DefaultProps.legends! : props.legends === null ? undefined : props.legends
            }
            markers={props.markers}
            animate={props.animate}
            enableTotals={props.enableTotals}
            enableLabel={props.enableLabels}
            enableGridX={props.enableGridX}
            enableGridY={props.enableGridY}
            totalsOffset={props.totalsOffset}
            theme={props.theme}
            borderWidth={props.borderWidth}
            borderColor={props.borderColor ?? DefaultProps.borderColor}
            borderRadius={props.borderRadius}
            groupMode={props.groupMode}
            layout={props.layout}
        />
    );
};

export default NivoResponsiveBar;
